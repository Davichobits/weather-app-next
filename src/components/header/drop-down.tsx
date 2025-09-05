import type { DropDownOptions } from '../../types/types'
import { DropDownItem } from './drop-down-item'

const dropDownOptions: DropDownOptions[] = [
  {
    variable: 'Temperature',
    units: ['Celsius (°C)', 'Fahrenheit (°F)'],
  },
  {
    variable: 'Wind Speed',
    units: ['km/h', 'mph'],
  },
  {
    variable: 'Precipitation',
    units: ['Millimeters (mm)', 'Inches (in)'],
  },
]

export const DropDown = () => {
  return (
    <div className='absolute top-[43px] right-0 w-[214px] bg-Neutral-800 border border-Neutral-600 rounded-xl px-2 py-1.5 flex flex-col'>
      <p className='p-2 h-[39px] hover:bg-Neutral-700 rounded-lg cursor-pointer transition-colors'>Switch to Imperial</p>
      {
        dropDownOptions.map((option)=><DropDownItem key={option.variable} {...option} />)
      }
    </div>
  )
}
