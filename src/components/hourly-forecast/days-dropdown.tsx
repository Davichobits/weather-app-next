import { DaysDropdownOptions } from '@/types/types';

const days: DaysDropdownOptions[] = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

export const DaysDropDown = () => {

  return (
    <div className='absolute top-[43px] right-0 w-[214px] bg-Neutral-800 border border-Neutral-600 rounded-xl px-2 py-1.5 flex flex-col z-10'>
      {
        days.map((day)=>(
          <p key={day}>{day}</p>
        ))
      }
    </div>
  )
}
