'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useCityStore } from '@/stores/city-store-provider';

export const Search = () => {

  const [query, setQuery] = useState('');
  const cityStore = useCityStore(state => state);
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if(query.trim() === "") return;

    try {
      // Buscar la ciudad
      const geocodingResponse = await fetch(`/api/geocoding?name=${encodeURIComponent(query)}`);
      const cityData = await geocodingResponse.json();
      
      if (!cityData.results?.[0]) {
        console.error('City not found');
        return;
      }

      const {name, country, latitude, longitude} = cityData.results[0];
      
      // Actualizar el store con la información de la ciudad
      cityStore.updateCity({
        city: name,
        country,
        coordinates: {
          latitude,
          longitude
        }
      });

      // Obtener el clima para la ciudad
      const weatherResponse = await fetch(`/api/weather?latitude=${latitude}&longitude=${longitude}`);
      const weatherData = await weatherResponse.json();
      console.log('Weather data:', weatherData.current);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  return (
    <form onSubmit={handleSearch} className='flex flex-col gap-3 mx-auto xl:max-w-[656px] md:flex-row' action="">
      <div className='relative md:flex-1'>
        <Image className='absolute top-[18px] left-6' width={20} height={20} src='/images/icon-search.svg' alt='icon search' />
        <input onChange={(e) => setQuery(e.target.value)} className='bg-Neutral-800 py-4 pl-14 w-full rounded-xl' type="text" placeholder='Search for a place...' />
      </div>
      <button className='bg-Blue-500 hover:bg-Blue-700 py-4 px-6 rounded-xl cursor-pointer transition-colors' type='submit'>Search</button>
    </form>
  )
}
