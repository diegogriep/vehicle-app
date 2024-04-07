'use client'

import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'
import { VehiclesProvider } from '@/hooks/use-vehicles'

export function Providers({ children }: PropsWithChildren) {
  return (
    <VehiclesProvider>
      <GlobalStyles />
      {children}
    </VehiclesProvider>
  )
}
