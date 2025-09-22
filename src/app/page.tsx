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
      <main className='m-4 md:min-w-[720px]'>
        <Header />
        <Hero />
        <Search />
        <WeatherInfo />
        <DailyForecast />
        <HourlyForecast />
      </main>
    </IndicatorStoreProvider>
  );
}
