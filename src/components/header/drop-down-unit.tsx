import Image from 'next/image';
import { useIndicatorStore } from '@/stores/indicator-store-provider';
interface Props {
  unit: string;
}

export const DropDownUnit = ({unit}: Props) => {

  const store = useIndicatorStore((state)=> state);

  const isSelected = store.unit === unit;

  const handleClick = () => {
    store.toggleUnit();
  }

  return (
    <button onClick={handleClick} className={`rounded-lg px-2 py-2.5 flex justify-between cursor-pointer ${isSelected && 'bg-Neutral-700' } hover:bg-Neutral-700 transition-colors`}>
      <p>{unit}</p>
      {
        isSelected && (<Image width={14} height={14} src={'/images/icon-checkmark.svg'} alt='icon checkmark' />)
      }
      
    </button>
  )
}