import type { AxiosError } from 'axios'
import type { CancelOptions, QueryFilters, UseQueryResult } from '@tanstack/react-query'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import { removeEmptyFilters } from '@/src/shared/helpers'

import type { CustomQueryKey, QueryFactoryReturnValue, QueryParams, UseQueryFactoryArgs } from './_types'
import { getCurrentQueryKey } from './_helpers'

import { useQueryCallbacks } from './use-query-callbacks'

export const queryFactory =
  <Response, FiltersContent = Record<string, unknown>>({
    primaryKey,
    queryFetchFn,
    initialFilters = {} as FiltersContent,
  }: UseQueryFactoryArgs<Response, FiltersContent>): QueryFactoryReturnValue<
    Response,
    FiltersContent,
    Response,
    QueryParams<Response, FiltersContent>,
    UseQueryResult<Response, AxiosError>
  > =>
  (config) => {
    let serverSideFilters: CustomQueryKey

    return {
      prefetch: async (queryClient, preBuildFilters = {}, params) => {
        const filters = { ...initialFilters, ...preBuildFilters }
        const currentQueryKey = getCurrentQueryKey(primaryKey, filters, params?.queryKey)

        serverSideFilters = currentQueryKey

        await queryClient.prefetchQuery({
          ...(params as QueryParams<Response, FiltersContent>),
          queryKey: currentQueryKey,
          queryFn: queryFetchFn(config?.(filters) || {}),
        })

        const prefetchResponse = queryClient.getQueryData<Response>(currentQueryKey)

        return {
          response: prefetchResponse,
          currentQueryKey,
        }
      },
      query: (params) => {
        // eslint-disable-next-line
        const queryClient = useQueryClient()

        const filters = { ...initialFilters, ...params?.filters } as FiltersContent & { locale: string }
        const currentQueryKey = serverSideFilters || getCurrentQueryKey(primaryKey, filters, params?.queryKey)

        const { onSuccess, onError, onSettled } = params || {}

        const queryFetchConfig =
          config?.(
            removeEmptyFilters(filters) as FiltersContent & {
              locale?: string
            }
          ) || {}

        // eslint-disable-next-line
        const queryResponse = useQuery({
          queryKey: currentQueryKey,
          queryFn: queryFetchFn(queryFetchConfig),
        })

        const cancelQuery = (filters?: QueryFilters, cancelOptions?: CancelOptions) => {
          queryClient.cancelQueries({ queryKey: currentQueryKey, ...filters }, cancelOptions)
        }

        // eslint-disable-next-line
        useQueryCallbacks({
          response: queryResponse as UseQueryResult<Response, AxiosError<unknown, any>>,
          callbacks: { onSuccess, onError, onSettled },
        })

        return {
          ...(queryResponse as UseQueryResult<Response, AxiosError<unknown, any>>),
          currentQueryKey,
          cancelQuery,
        }
      },
    }
  }
