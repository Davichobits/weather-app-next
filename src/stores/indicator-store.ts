import { createStore } from 'zustand';
import { 
  UnitTemperature, 
  UnitWindSpeed, 
  UnitPrecipitation,
  MetricSystem
} from '@/types/types';


export type IndicatorState = {
  temperatureUnit: UnitTemperature;
  windSpeedUnit: UnitWindSpeed;
  precipitationUnit: UnitPrecipitation;
  metricSystem: MetricSystem
}

export type IndicatorActions = {
  toggleTemperatureUnit: () => void;
  toggleWindSpeedUnit: ()=> void;
  togglePrecipitationUnit: ()=> void;
  toggleMetricSystem: ()=> void;
}

export type IndicatorStore = IndicatorState & IndicatorActions;

export const initIndicatorStore = (): IndicatorState => {
  return { 
    temperatureUnit: 'Celsius (°C)',
    windSpeedUnit: 'km/h',
    precipitationUnit: 'Millimeters (mm)',
    metricSystem: 'metric',
  }
}


export const defaultInitState: IndicatorState = {
  temperatureUnit: 'Celsius (°C)',
  windSpeedUnit: 'km/h',
  precipitationUnit: 'Millimeters (mm)',
  metricSystem: 'metric',
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
    })),
    toggleMetricSystem: ()=>set((state)=>({
      metricSystem: state.metricSystem === 'imperial' ? 'metric': 'imperial',
    }))
  }))
} 