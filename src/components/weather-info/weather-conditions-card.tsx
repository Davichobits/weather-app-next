import { WeatherCondition } from '@/types/types';

export const WeatherConditionsCard = ({condition, metric, unit}: WeatherCondition) => {
  return (
    <div className='bg-Neutral-800 rounded-xl border border-Neutral-600 p-5'>
      <h2 className='text-lg mb-6'>{condition}</h2>
      <p className='text-[32px] font-light'>{`${metric}${unit}`}</p>
    </div>
  )
}
