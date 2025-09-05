import { Header } from '@/components';
import { IndicatorStoreProvider } from '@/stores/indicator-store-provider';
export default function Home() {
  return (
    <IndicatorStoreProvider>
      <div className="w-[343px] m-4">
        <Header />
      </div>
    </IndicatorStoreProvider>
  );
}
