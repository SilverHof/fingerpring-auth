import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { AxiosError, AxiosRequestConfig } from 'axios'
import type {
  CancelOptions,
  InfiniteData,
  QueryClient,
  QueryFilters,
  QueryFunction,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import type { ParsedUrlQuery } from 'querystring'

export type CustomQueryKey = unknown[]

export type QueryType = 'query' | 'infinite'

export type CustomQueryFilters<Filters> = Partial<Filters & { locale: string }>

// ** Util types

export type QueryFetchFunction<Response> = (
  config?: AxiosRequestConfig | undefined
) => QueryFunction<Response, CustomQueryKey, unknown>

export type QueryCallbacks<TData, TError extends AxiosError = AxiosError> = {
  onSuccess?: (data: TData) => void
  onError?: (error: TError) => void
  onSettled?: (data: TData | undefined, error: TError | null) => void
}

export type UseQueryCallbackType<Response> = {
  response:
    | UseQueryResult<Response, AxiosError<unknown, any>>
    | UseInfiniteQueryResult<Response, AxiosError<unknown, any>>
  callbacks: QueryCallbacks<Response>
}

export type AdditionalQueryParams<Response, FiltersContent> = QueryCallbacks<Response> & {
  queryKey?: string[]
  filters?: CustomQueryFilters<FiltersContent>
  router?: AppRouterInstance
}

export type UseQueryFactoryArgs<Response, FiltersContent = Record<string, unknown>> = {
  primaryKey: CustomQueryKey
  queryFetchFn: QueryFetchFunction<Response>
  initialFilters?: FiltersContent
}

// ** Types for useQueryFactory

export type QueryParams<Response, FiltersContent = {}> = QueryOptions<Response> &
  AdditionalQueryParams<Response, FiltersContent>

export type QueryOptions<Response> = Omit<
  UseQueryOptions<Response, AxiosError, Response, CustomQueryKey>,
  'queryKey' | 'queryFn'
>

export type QueryFactoryReturnValue<
  Response,
  FiltersContent,
  PrefetchResult extends Response,
  Params extends QueryParams<Response, FiltersContent>,
  QueryResult extends UseQueryResult,
> = (config?: (filters: FiltersContent & { locale?: string }) => AxiosRequestConfig) => {
  prefetch: (
    queryClient: QueryClient,
    preBuildFilters?: ParsedUrlQuery,
    params?: Params
  ) => Promise<{
    response?: PrefetchResult
    currentQueryKey: CustomQueryKey
  }>
  query: (params?: Params) => QueryResult & {
    currentQueryKey: CustomQueryKey
    cancelQuery: (filters?: QueryFilters, cancelOptions?: CancelOptions) => void
  }
}

// ** Types for useInfiniteQueryFactory

export type InfiniteQueryOptions<Response> = Omit<
  UseInfiniteQueryOptions<Response, AxiosError, Response, Response, CustomQueryKey>,
  'queryKey' | 'queryFn'
>

export type InfiniteQueryParams<Response, FiltersContent = {}> = InfiniteQueryOptions<Response> &
  AdditionalQueryParams<Response, FiltersContent>

export type InfiniteQueryFactoryReturnValue<
  Response,
  FiltersContent,
  PrefetchResult extends InfiniteData<Response>,
  Params extends InfiniteQueryParams<Response, FiltersContent>,
  QueryResult extends UseInfiniteQueryResult,
> = (config?: (filters: FiltersContent & { locale?: string }) => AxiosRequestConfig) => {
  prefetchInfinite: (
    queryClient: QueryClient,
    preBuildFilters?: ParsedUrlQuery,
    params?: Params
  ) => Promise<{
    infiniteResponse?: PrefetchResult
    currentQueryKey: CustomQueryKey
  }>
  queryInfinite: (params?: Params) => QueryResult & {
    currentQueryKey: CustomQueryKey
    cancelQuery: (filters?: QueryFilters, cancelOptions?: CancelOptions) => void
  }
}
