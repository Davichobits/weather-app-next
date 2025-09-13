import { ForecastCard } from './forecast-card'
import { Forecast } from '@/types/types'

const dailyForecasts: Forecast[] = [
  {
    day: 'Tue',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Tue',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Tue',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Tue',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Tue',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Tue',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Tue',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
] 

export const DailyForecast = () => {
  return (
    <div className='mb-8'>
      <h2 className='text-xl mb-5'>Daily forecast</h2>
      <div className='grid grid-cols-3 gap-4'>
        {
          dailyForecasts.map(forecast => (
            <ForecastCard 
              key={forecast.day} 
              {...forecast} 
            />
          ))
        }
      </div>
    </div>
  )
}
