import { ForecastCard } from './forecast-card'
import { Forecast } from '@/types/types'
import Image from 'next/image'

const dailyForecasts: Forecast[] = [
  {
    day: 'Mon',
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
    day: 'Wed',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Thu',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Fri',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Sat',
    minTemp: 68,
    maxTemp: 57,
    iconUrl: '/images/icon-snow.webp'
  },
  {
    day: 'Sun',
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
