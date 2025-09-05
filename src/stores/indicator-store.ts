import { createStore } from 'zustand';
import { UnitTemperature } from '@/types/types';


export type IndicatorState = {
  unit: UnitTemperature;
}

export type IndicatorActions = {
  toggleUnit: () => void;
}

export type IndicatorStore = IndicatorState & IndicatorActions;

export const initIndicatorStore = (): IndicatorState => {
  return { unit: 'Celsius (°C)' }
}


export const defaultInitState: IndicatorState = {
  unit: 'Celsius (°C)',
}

export const createIndicatorStore = (initState: IndicatorState = defaultInitState) => {
  
  return createStore<IndicatorStore>()((set)=>({
    ...initState,
    toggleUnit: ()=>set((state)=>({
      unit: state.unit === 'Celsius (°C)' ? 'Fahrenheit (°F)' : 'Celsius (°C)',
    })),
  }))
} 