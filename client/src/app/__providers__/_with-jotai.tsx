import { ReactNode } from 'react'
import { Provider as JotaiProvider } from 'jotai'

export const WithJotai = ({ children }: { children: ReactNode }) => <JotaiProvider>{children}</JotaiProvider>
