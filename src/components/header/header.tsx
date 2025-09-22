import Image from 'next/image'
import { UnitsButton } from './switch-dropdown'
export const Header = () => {
  return (
    <header className='flex justify-between'>
      <Image className='w-[137px] md:w-[197]' width={197} height={40} src="/images/logo.svg" alt="Logo" />
      <UnitsButton />
    </header>
  )
}
