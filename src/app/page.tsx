import {
  Header,
  Hero,
  Search,
  WeatherInfo,
  DailyForecast,
  HourlyForecast,
} from '@/components';
import { IndicatorStoreProvider } from '@/stores/indicator-store-provider';

export default function Home() {
  return (
    <IndicatorStoreProvider>
      <div className='w-[343px] mt-4 mb-72'>
        <Header />
        <Hero />
        <Search />
        <WeatherInfo />
        <DailyForecast />
        <HourlyForecast />
      </div>
    </IndicatorStoreProvider>
  );
}
