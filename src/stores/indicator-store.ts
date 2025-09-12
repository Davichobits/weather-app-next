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

const getSystemFromUnits = (
  temperatureUnit: UnitTemperature,
  windSpeedUnit: UnitWindSpeed,
  precipitationUnit: UnitPrecipitation
): MetricSystem => {
  if (
    temperatureUnit === 'Celsius (°C)' &&
    windSpeedUnit === 'km/h' &&
    precipitationUnit === 'Millimeters (mm)'
  ) {
    return 'metric';
  }

  if (
    temperatureUnit === 'Fahrenheit (°F)' &&
    windSpeedUnit === 'mph' &&
    precipitationUnit === 'Inches (in)'
  ) {
    return 'imperial';
  }

  return 'metric';
}

export const createIndicatorStore = (initState: IndicatorState = defaultInitState) => {
  
  return createStore<IndicatorStore>()((set)=>({
    ...initState,
    toggleTemperatureUnit: () =>
      set((state) => {
        const newTemp = state.temperatureUnit === 'Celsius (°C)' ? 'Fahrenheit (°F)' : 'Celsius (°C)';
        return {
          temperatureUnit: newTemp,
          metricSystem: getSystemFromUnits(newTemp, state.windSpeedUnit, state.precipitationUnit),
        };
      }),

    toggleWindSpeedUnit: () =>
      set((state) => {
        const newWind = state.windSpeedUnit === 'km/h' ? 'mph' : 'km/h';
        return {
          windSpeedUnit: newWind,
          metricSystem: getSystemFromUnits(state.temperatureUnit, newWind, state.precipitationUnit),
        };
      }),

    togglePrecipitationUnit: () =>
      set((state) => {
        const newPrecip = state.precipitationUnit === 'Inches (in)' ? 'Millimeters (mm)' : 'Inches (in)';
        return {
          precipitationUnit: newPrecip,
          metricSystem: getSystemFromUnits(state.temperatureUnit, state.windSpeedUnit, newPrecip),
        };
      }),

    toggleMetricSystem: () =>
      set((state) => {
        const newSystem = state.metricSystem === 'metric' ? 'imperial' : 'metric';
        return {
          metricSystem: newSystem,
          temperatureUnit: newSystem === 'metric' ? 'Celsius (°C)' : 'Fahrenheit (°F)',
          windSpeedUnit: newSystem === 'metric' ? 'km/h' : 'mph',
          precipitationUnit: newSystem === 'metric' ? 'Millimeters (mm)' : 'Inches (in)',
        };
      }),
  }))
} 