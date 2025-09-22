'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { 
  type IndicatorStore, 
  createIndicatorStore,
  initIndicatorStore,
} from './indicator-store'

export type IndicatorStoreApi = ReturnType<typeof createIndicatorStore>

export const IndicatorStoreContext = createContext<IndicatorStoreApi | undefined>(
  undefined,
)

export interface IndicatorStoreProviderProps {
  children: ReactNode
}

export const IndicatorStoreProvider = ({
  children,
}: IndicatorStoreProviderProps) => {

  const storeRef = useRef<IndicatorStoreApi | null>(null)
  
  if (storeRef.current === null) {
    storeRef.current = createIndicatorStore(initIndicatorStore())
  }

  return (
    <IndicatorStoreContext.Provider value={storeRef.current}>
      {children}
    </IndicatorStoreContext.Provider>
  )
}

export const useIndicatorStore = <T,>(
  selector: (store: IndicatorStore) => T,
): T => {
  const indicatorStoreContext = useContext(IndicatorStoreContext)

  if (!indicatorStoreContext) {
    throw new Error(`useIndicatorStore must be used within IndicatorStoreProvider`)
  }

  return useStore(indicatorStoreContext, selector)
}