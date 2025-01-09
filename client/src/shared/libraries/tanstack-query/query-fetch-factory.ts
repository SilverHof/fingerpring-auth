import { AxiosRequestConfig } from 'axios'
import { QueryFunctionContext } from '@tanstack/react-query'
import merge from 'lodash.merge'

import { axiosHttpClient } from '../../api/http-client'

export const getSingleRequestTarget = (id: number | string, target: string): string => target.replace(/:id/, String(id))

export const queryFetchFactory =
  <Response, RequestData = undefined>(url: string, defaultConfig: AxiosRequestConfig<RequestData> = {}) =>
  (config?: AxiosRequestConfig) =>
  async (context?: QueryFunctionContext) => {
    if (context?.pageParam && config) {
      const { pageParam: page } = context
      if (config.params) {
        config.params.page = page
      } else {
        config.params = { page }
      }
    }

    const mergedConfig = merge({ url }, defaultConfig, config)

    const { data } = await axiosHttpClient<Response, RequestData>(mergedConfig)

    return data
  }
