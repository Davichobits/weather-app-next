'use client';
import Image from 'next/image'
import { useState } from 'react';
export const Search = () => {

  const [query, setQuery] = useState('');

  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    
    const data = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1`);
    const weatherData = await data.json();
    console.log(weatherData.results[0]);
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
