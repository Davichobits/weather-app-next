import { WeatherCondition } from '@/types/types';
import { WeatherConditionsCard } from './weather-conditions-card'

const conditions: WeatherCondition[] = [
  {
    condition: 'Feels Like',
    metric: 64,
    unit: '°'
  },
  {
    condition: 'Humidity',
    metric: 46,
    unit: '%',
  },
  {
    condition: 'Wind',
    metric: 9,
    unit: 'mph',
  },
  {
    condition: 'Precipitation',
    metric: 0,
    unit: 'in'
  },
];

export const WeatherConditions = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        conditions.map(condition => (
          <WeatherConditionsCard 
            key={condition.condition}
            {...condition}
          />
        ))
      }
    </div>
  )
}
