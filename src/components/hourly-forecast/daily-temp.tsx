import Image from 'next/image'

export const DailyTemp = () => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      <div className='flex justify-between items-center bg-Neutral-700 rounded-xl px-3 py-2.5 border border-Neutral-600 h-[60px]'>
        <div className='flex items-center gap-2'>
          <Image src='/images/icon-snow.webp' alt='Snowy weather' width={40} height={40} />
          <p>3PM</p>
        </div>
        <p>68°</p>
      </div>
      <div className='flex justify-between items-center bg-Neutral-700 rounded-xl px-3 py-2.5 border border-Neutral-600 h-[60px]'>
        <div className='flex items-center gap-2'>
          <Image src='/images/icon-snow.webp' alt='Snowy weather' width={40} height={40} />
          <p>3PM</p>
        </div>
        <p>68°</p>
      </div>
      <div className='flex justify-between items-center bg-Neutral-700 rounded-xl px-3 py-2.5 border border-Neutral-600 h-[60px]'>
        <div className='flex items-center gap-2'>
          <Image src='/images/icon-snow.webp' alt='Snowy weather' width={40} height={40} />
          <p>3PM</p>
        </div>
        <p>68°</p>
      </div>
      <div className='flex justify-between items-center bg-Neutral-700 rounded-xl px-3 py-2.5 border border-Neutral-600 h-[60px]'>
        <div className='flex items-center gap-2'>
          <Image src='/images/icon-snow.webp' alt='Snowy weather' width={40} height={40} />
          <p>3PM</p>
        </div>
        <p>68°</p>
      </div>
      <div className='flex justify-between items-center bg-Neutral-700 rounded-xl px-3 py-2.5 border border-Neutral-600 h-[60px]'>
        <div className='flex items-center gap-2'>
          <Image src='/images/icon-snow.webp' alt='Snowy weather' width={40} height={40} />
          <p>3PM</p>
        </div>
        <p>68°</p>
      </div>
    </div>
  )
}
