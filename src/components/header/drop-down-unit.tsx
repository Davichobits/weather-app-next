import Image from 'next/image';
import { useIndicatorStore } from '@/stores/indicator-store-provider';
import { UnitTemperature, UnitWindSpeed, UnitPrecipitation, Indicator } from '@/types/types';
interface Props {
  unit: string;
  indicator: Indicator
}

export const DropDownUnit = ({unit, indicator}: Props) => {

  const store = useIndicatorStore((state)=> state);

  const indicatorMap = {
    Temperature: {
      value: store.temperatureUnit as UnitTemperature,
      toggle: store.toggleTemperatureUnit,
    },
    'Wind Speed': {
      value: store.windSpeedUnit as UnitWindSpeed,
      toggle: store.toggleWindSpeedUnit,
    },
    Precipitation: {
      value: store.precipitationUnit as UnitPrecipitation,
      toggle: store.togglePrecipitationUnit,
    },
  }

  const { value, toggle } = indicatorMap[indicator]
  const isSelected = value === unit

  return (
    <button onClick={toggle} className={`rounded-lg px-2 py-2.5 flex justify-between cursor-pointer ${isSelected && 'bg-Neutral-700' } hover:bg-Neutral-700 transition-colors`}>
      <p>{unit}</p>
      {
        isSelected && (<Image width={14} height={14} src={'/images/icon-checkmark.svg'} alt='icon checkmark' />)
      }
      
    </button>
  )
}