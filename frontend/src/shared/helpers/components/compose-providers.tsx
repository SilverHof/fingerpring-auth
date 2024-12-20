import type { ComponentType, ReactNode } from 'react'

export type ProviderComponent = ComponentType<{ children: ReactNode }>

// Функция композиции провайдеров
// Есть библиотека compose-function, но она в nextjs 14 не работает

export const composeProviders = (...providers: ProviderComponent[]): ProviderComponent =>
  providers.reduce(
    (AccumulatedProviders, CurrentProvider) =>
      ({ children }: { children: ReactNode }) => (
        <AccumulatedProviders>
          <CurrentProvider>{children}</CurrentProvider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: ReactNode }) => children
  )
