'use client';
import Image from 'next/image';
import { DropDown } from './drop-down';
import { useState } from 'react';

export const UnitsButton = () => {

  const [isOpen, SetIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    console.log('Click')
    SetIsOpen(!isOpen);
  }

  return (
    <div className='relative'>
      <button
        onClick={handleClick}
        className={`flex justify-center gap-1.5 rounded-[6px] items-center  w-[89px] h-[33px] cursor-pointer ${isOpen ? 'bg-Neutral-700': 'bg-Neutral-800'} hover:bg-Neutral-700 transition-colors`}>
        <Image 
          width={14} 
          height={14} 
          alt='icon units' 
          src='/images/icon-units.svg' 
        />
        <span className='text-sm'>Units</span>
        <Image 
          width={9} 
          height={14} 
          alt='icon dropdown' 
          src='/images/icon-dropdown.svg' 
        />
      </button>
      {
        isOpen && (<DropDown />)
      }
    </div>
  );
};
