'use client';
import Image from 'next/image';
import { DropDown } from './drop-down';
import { useState, useRef, useEffect } from 'react';

export const UnitsButton = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className='relative'>
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
          className='size-auto'
          src='/images/icon-dropdown.svg' 
        />
      </button>
      {
        isOpen && (<DropDown />)
      }
    </div>
  );
};
