import Image from 'next/image';
import { useIndicatorStore } from '@/stores/indicator-store-provider';
import { UnitTemperature, UnitWindSpeed, UnitPrecipitation, Indicator } from '@/types/types';
interface Props {
  unit: string;
  indicator: Indicator
}

export const DropDownUnit = ({unit, indicator}: Props) => {

  const store = useIndicatorStore((state)=> state);

  let indicatorUnit: UnitTemperature | UnitWindSpeed | UnitPrecipitation

  if(indicator === 'Temperature'){
    indicatorUnit = store.temperatureUnit;
  }else if(indicator === 'Wind Speed'){
    indicatorUnit = store.windSpeedUnit
  }else{
    indicatorUnit = store.precipitationUnit
  }

  const isSelected = indicatorUnit === unit;

  const handleClick = () => {
    if(indicator === 'Temperature'){
      store.toggleTemperatureUnit();
    }else if(indicator === 'Wind Speed'){
      store.toggleWindSpeedUnit();
    }else{
      store.togglePrecipitationUnit();
    }
    
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