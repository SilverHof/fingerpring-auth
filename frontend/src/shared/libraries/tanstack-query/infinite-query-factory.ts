import { AxiosError } from 'axios'
import {
  CancelOptions,
  InfiniteData,
  QueryFilters,
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQueryClient,
} from '@tanstack/react-query'

import type {
  CustomQueryKey,
  InfiniteQueryFactoryReturnValue,
  InfiniteQueryParams,
  UseQueryFactoryArgs,
} from './_types'
import { getCurrentQueryKey } from './_helpers'

import { useQueryCallbacks } from './use-query-callbacks'

export const infiniteQueryFactory =
  <Response, FiltersContent = Record<string, unknown>>({
    primaryKey,
    queryFetchFn,
    initialFilters = {} as FiltersContent,
  }: UseQueryFactoryArgs<Response, FiltersContent>): InfiniteQueryFactoryReturnValue<
    Response,
    FiltersContent,
    InfiniteData<Response>,
    InfiniteQueryParams<Response, FiltersContent>,
    UseInfiniteQueryResult<Response, AxiosError>
  > =>
  (config) => {
    let serverSideFilters: CustomQueryKey

    return {
      prefetchInfinite: async (queryClient, preBuildFilters = {}, params) => {
        const filters = { ...initialFilters, ...preBuildFilters }
        const currentQueryKey = getCurrentQueryKey(primaryKey, filters, params?.queryKey)

        serverSideFilters = currentQueryKey

        await queryClient.prefetchInfiniteQuery({
          queryKey: currentQueryKey,
          queryFn: queryFetchFn(config?.(filters) || {}),
          ...(params as InfiniteQueryParams<Response, FiltersContent>),
        })

        const prefetchInfiniteResponse = queryClient.getQueryData<InfiniteData<Response>>(currentQueryKey)

        return {
          infiniteResponse: prefetchInfiniteResponse,
          currentQueryKey,
        }
      },
      queryInfinite: (params) => {
        // eslint-disable-next-line
        const queryClient = useQueryClient()

        const filters = { ...initialFilters, ...params?.filters } as FiltersContent & { locale: string }
        const currentQueryKey = serverSideFilters || getCurrentQueryKey(primaryKey, filters, params?.queryKey)

        const { onSuccess, onError, onSettled } = params || {}

        // eslint-disable-next-line
        const infiniteQueryResponse = useInfiniteQuery({
          queryKey: currentQueryKey,
          queryFn: queryFetchFn(config?.(filters) || {}),
          ...(params as InfiniteQueryParams<Response, FiltersContent>),
          getNextPageParam: (lastPage) => lastPage,
        })

        const cancelQuery = (filters?: QueryFilters, cancelOptions?: CancelOptions) => {
          queryClient.cancelQueries({ queryKey: currentQueryKey, ...filters }, cancelOptions)
        }

        // eslint-disable-next-line
        useQueryCallbacks({
          response: infiniteQueryResponse as UseInfiniteQueryResult<Response, AxiosError<unknown, any>>,
          callbacks: { onSuccess, onError, onSettled },
        })

        return {
          ...(infiniteQueryResponse as UseInfiniteQueryResult<Response, AxiosError<unknown, any>>),
          currentQueryKey,
          cancelQuery,
        }
      },
    }
  }
