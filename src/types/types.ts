export type UnitTemperature = 'Celsius (°C)' | 'Fahrenheit (°F)'
export type UnitWindSpeed = 'km/h' | 'mph'
export type UnitPrecipitation = 'Millimeters (mm)' | 'Inches (in)'
export type Indicator = 'Temperature' | 'Wind Speed' | 'Precipitation'

export interface TemperatureOptions {
  indicator: 'Temperature'
  units: UnitTemperature[]
}

export interface WindSpeedOptions {
  indicator: 'Wind Speed'
  units: UnitWindSpeed[]
}

export interface PrecipitationOptions {
  indicator: 'Precipitation'
  units: UnitPrecipitation[]
}

export type DropDownOptions =
  | TemperatureOptions
  | WindSpeedOptions
  | PrecipitationOptions

export type MetricSystem = "imperial" | "metric"

export type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'; 

export interface Forecast {
  day: Day,
  minTemp: number,
  maxTemp: number,
  iconUrl: string,
}