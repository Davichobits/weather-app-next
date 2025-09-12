import { Forecast } from '@/types/types'
import Image from 'next/image'

export const ForecastCard = ({day, iconUrl, maxTemp, minTemp}: Forecast) => {
  return (
    <div className='bg-Neutral-800 rounded-xl px-2.5 py-4 border border-Neutral-600'>
      <h2 className='text-center font-medium text-lg'>{day}</h2>
      <Image className='mx-auto' src={iconUrl} alt={day} width={60} height={60}  />
      <div className='flex justify-between'>
        <p>{`${maxTemp}°`}</p>
        <p>{`${minTemp}°`}</p>
      </div>
    </div>
  )
}
