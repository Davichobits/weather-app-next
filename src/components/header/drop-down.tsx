import type { DropDownOptions } from '../../types/types';
import { DropDownItem } from './drop-down-item';
import { useIndicatorStore } from '@/stores/indicator-store-provider';

const dropDownOptions: DropDownOptions[] = [
  {
    indicator: 'Temperature',
    units: ['Celsius (°C)', 'Fahrenheit (°F)'],
  },
  {
    indicator: 'Wind Speed',
    units: ['km/h', 'mph'],
  },
  {
    indicator: 'Precipitation',
    units: ['Millimeters (mm)', 'Inches (in)'],
  },
]

export const DropDown = () => {

  const store = useIndicatorStore((state)=> state);

  const capitalize = (word: string) : string => {
    const firstLetter = word.at(0)?.toLocaleUpperCase();
    const rest = word.slice(1);
    return firstLetter + rest;
  }

  return (
    <div className='absolute top-[43px] right-0 w-[214px] bg-Neutral-800 border border-Neutral-600 rounded-xl px-2 py-1.5 flex flex-col z-10'>
      <button 
        onClick={store.toggleMetricSystem}
        className='p-2 h-[39px] hover:bg-Neutral-700 rounded-lg cursor-pointer transition-colors'
      >
        Switch to {capitalize(store.metricSystem)}
      </button>
      {
        dropDownOptions.map((option)=><DropDownItem key={option.indicator} {...option} />)
      }
    </div>
  )
}
