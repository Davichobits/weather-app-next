import { DaysDropdownButton } from './days-dropdown-button'

export const HourlyForecast = () => {
  return (
    <section className='bg-Neutral-800 border border-Neutral-600 rounded-xl py-5 px-4'>
      <div className='flex justify-between'>
        <h2>Hourly forecast</h2>
        <DaysDropdownButton />
      </div>
    </section>
  )
}
