import { DropDown } from './drop-down'

export const UnitsButton = () => {
  return (
    <>
    <button className='flex justify-center gap-1.5 rounded-[6px] items-center bg-Neutral-800 w-[89px] h-[33px] cursor-pointer hover:bg-Neutral-700 relative'>
      <img className='size-[14px]' src="/images/icon-units.svg" alt="" />
      <span className='text-sm'>Units</span>
      <img className='w-[9px]' src="/images/icon-dropdown.svg" alt="" />
    </button>
      <DropDown />
    </>
  )
}
