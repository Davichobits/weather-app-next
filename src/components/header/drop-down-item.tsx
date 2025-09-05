'use client';
import type { DropDownOptions } from '../../types/types'
import { DropDownUnit } from './drop-down-unit'

export const DropDownItem = ({indicator, units}: DropDownOptions) => {

  return (
    <div className='border border-transparent border-b-Neutral-600 last:border-none'>
      <h2 className='text-Neutral-300 text-sm text-left px-2 py-1.5'>{indicator}</h2>
      <div className='flex flex-col gap-1 mb-1'>
        {
          units.map((unit)=> <DropDownUnit key={unit} unit={unit} /> )
        }
      </div>
    </div>
  )
}
