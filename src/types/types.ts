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