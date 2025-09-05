import { UnitsButton } from './switch-dropdown'
export const Header = () => {
  return (
    <div className='flex justify-between'>
      <img src="images/logo.svg" alt="Logo" />
      <UnitsButton />
    </div>
  )
}
