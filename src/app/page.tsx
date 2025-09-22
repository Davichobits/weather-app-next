import {
  Header,
  Hero,
  Search,
  WeatherInfo,
  DailyForecast,
  HourlyForecast,
} from '@/components';
import { IndicatorStoreProvider } from '@/stores/indicator-store-provider';
import { CityStoreProvider } from '@/stores/city-store-provider';

export default function Home() {
  return (
    <IndicatorStoreProvider>
      <CityStoreProvider>
      <main className='m-4 md:min-w-[720px] md:max-w-[1216px] xl:max-w-[1216px]'>
        <Header />
        <Hero />
        <Search />
        <div className='xl:flex xl:mt-12 xl:gap-8'>
          <div>
            <WeatherInfo />
            <DailyForecast />
          </div>
          <HourlyForecast />
        </div>
      </main>
      </CityStoreProvider>
    </IndicatorStoreProvider>
  );
}
