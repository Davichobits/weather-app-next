import { createStore } from 'zustand';
import { UnitTemperature, UnitWindSpeed, UnitPrecipitation } from '@/types/types';


export type IndicatorState = {
  temperatureUnit: UnitTemperature;
  windSpeedUnit: UnitWindSpeed;
  precipitationUnit: UnitPrecipitation;
}

export type IndicatorActions = {
  toggleTemperatureUnit: () => void;
  toggleWindSpeedUnit: ()=> void;
  togglePrecipitationUnit: ()=> void;
}

export type IndicatorStore = IndicatorState & IndicatorActions;

export const initIndicatorStore = (): IndicatorState => {
  return { 
    temperatureUnit: 'Celsius (°C)',
    windSpeedUnit: 'km/h',
    precipitationUnit: 'Millimeters (mm)'
  }
}


export const defaultInitState: IndicatorState = {
  temperatureUnit: 'Celsius (°C)',
  windSpeedUnit: 'km/h',
  precipitationUnit: 'Millimeters (mm)'
}

export const createIndicatorStore = (initState: IndicatorState = defaultInitState) => {
  
  return createStore<IndicatorStore>()((set)=>({
    ...initState,
    toggleTemperatureUnit: ()=>set((state)=>({
      temperatureUnit: state.temperatureUnit === 'Celsius (°C)' ? 'Fahrenheit (°F)' : 'Celsius (°C)',
    })),
    toggleWindSpeedUnit: ()=>set((state)=>({
      windSpeedUnit: state.windSpeedUnit === 'km/h' ? 'mph' : 'km/h',
    })),
    togglePrecipitationUnit: ()=>set((state)=>({
      precipitationUnit: state.precipitationUnit === 'Inches (in)' ? 'Millimeters (mm)' : 'Inches (in)'
    }))
  }))
} 