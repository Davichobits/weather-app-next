import { DaysDropdownOptions } from '@/types/types';

const days: DaysDropdownOptions[] = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

export const DaysDropDown = () => {

  return (
    <div className='absolute top-[43px] right-0 w-[214px] bg-Neutral-800 border border-Neutral-600 rounded-xl px-2 py-1.5 flex flex-col gap-1 z-10'>
      {
        days.map((day)=>(
          <p className='hover:bg-Neutral-700 rounded-lg py-2.5 px-2 h-[39px] cursor-pointer transition-colors' key={day}>{day}</p>
        ))
      }
    </div>
  )
}
