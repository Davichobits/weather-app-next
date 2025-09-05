import type { DropDownOptions } from '../../types/types'
import { DropDownUnit } from './drop-down-unit'

export const DropDownItem = ({variable, units}: DropDownOptions) => {
  return (
    <div>
      <h2 className='text-Neutral-300 text-sm text-left'>{variable}</h2>
      {
        units.map((unit)=> <DropDownUnit key={unit} unit={unit} /> )
      }
    </div>
  )
}
