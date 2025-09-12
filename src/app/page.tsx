import { 
  Header, 
  Hero, 
  Search,
  WeatherInfo,
} from '@/components';
import { IndicatorStoreProvider } from '@/stores/indicator-store-provider';

export default function Home() {
  return (
        <IndicatorStoreProvider>
      <div className="w-[343px] m-4">
        <Header />
        <Hero />
        <Search />
        <WeatherInfo />
      </div>
      </IndicatorStoreProvider>
  );
}
