import type { QueryClient } from '@tanstack/react-query'
import { isServer } from '@tanstack/react-query'

import { createQueryClient } from './query-client.create'

let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
  if (isServer) {
    return createQueryClient()
  }
  if (!browserQueryClient) browserQueryClient = createQueryClient()
  return browserQueryClient
}
