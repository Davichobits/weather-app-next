'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import {
  type CityStore,
  createCityStore,
  initCityStore,
} from './city-store';

export type CityStoreApi = ReturnType<typeof createCityStore>;

export const CityStoreContext = createContext<CityStoreApi | undefined>(
  undefined,
);

export interface CityStoreProviderProps {
  children: ReactNode;
}

export const CityStoreProvider = ({ children }: CityStoreProviderProps) => {
  const storeRef = useRef<CityStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createCityStore();
  }

  return (
    <CityStoreContext.Provider value={storeRef.current}>
      {children}
    </CityStoreContext.Provider>
  );
};
export const useCityStore = <T,>(
  selector: (store: CityStore) => T
): T => {
  const cityStoreContext = useContext(CityStoreContext);
  if (!cityStoreContext) {
    throw new Error('useCityStore must be used within a CityStoreProvider');
  }
  return useStore(cityStoreContext, selector);
};
