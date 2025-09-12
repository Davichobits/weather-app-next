import Image from 'next/image';
import { WeatherConditions } from './weather-conditions';

export const WeatherInfo = () => {
  return (
    <section className='mb-8'>
      <div className='bg-[url(/images/bg-today-small.svg)] py-10 px-6 mt-8 mb-[20px]'>
        <h2 className='text-[1.75rem] text-center font-bold mb-3'>Berlin, Germany</h2>
        <p className='text-center text-lg font-medium text-Neutral-0'>Tuesday, Aug 5, 2025</p>
        <div className='flex items-center'>
          <Image src='/images/icon-sunny.webp' width={120} height={120} alt='icon sunny' />
          <span className='text-8xl italic'>68°</span>
        </div>
      </div>
      <WeatherConditions />
    </section>
  )
}
