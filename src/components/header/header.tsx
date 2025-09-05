import Image from 'next/image'
import { UnitsButton } from './switch-dropdown'
export const Header = () => {
  return (
    <div className='flex justify-between'>
      <Image width={137} height={28} src="images/logo.svg" alt="Logo" />
      <UnitsButton />
    </div>
  )
}
