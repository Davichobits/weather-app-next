interface Props {
  unit: string;
}

export const DropDownUnit = ({unit}: Props) => {
  return (
    <div className='text-left bg-Neutral-700 rounded-lg px-2 py-2.5'>{unit}</div>
  )
}