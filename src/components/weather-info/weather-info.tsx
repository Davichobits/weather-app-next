'use client';
import Image from 'next/image';
import { WeatherConditions } from './weather-conditions';
import { useCityStore } from '@/stores/city-store-provider';

export const WeatherInfo = () => {

  const cityStore = useCityStore((state)=> state);

  return (
    <section className='mb-8 xl:w-[800px]'>
      <div className='bg-[url(/images/bg-today-small.svg)] md:bg-[url(/images/bg-today-large.svg)] rounded-[20px] py-10 px-6 mt-8 mb-[20px] md:flex md:justify-between md:h-[286px] md:items-center xl:mt-0'>
        <div>
          <h2 className='text-[1.75rem] text-center font-bold mb-3'>{`${cityStore.city}, ${cityStore.country}`}</h2>
          <p className='text-center text-lg font-medium text-Neutral-0'>Tuesday, Aug 5, 2025</p>
        </div>
        <div className='flex items-center'>
          <Image src='/images/icon-sunny.webp' width={120} height={120} alt='icon sunny' />
          <span className='text-8xl italic'>68°</span>
        </div>
      </div>
      <WeatherConditions />
    </section>
  )
}
