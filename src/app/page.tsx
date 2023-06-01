import Cards from '@components/views/Dashboard/Cards';
import CategoryAchievement from '@components/views/Dashboard/CategoryAchievement';
import SalesOrderChart from '@components/views/Dashboard/Sales/SalesOrderChart';
import SalesPerformance from '@components/views/Dashboard/Sales/SalesPerformance';
import TopSellingProducts from '@components/views/Dashboard/TopSellingProducts';
import TopSellingStores from '@components/views/Dashboard/TopSellingStores';

export default function Home() {
  return (
    <div className="space-y-5">
      <Cards />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <SalesOrderChart />
        </div>
        <SalesPerformance />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <TopSellingProducts />
        <CategoryAchievement />
        <TopSellingStores />
      </div>
    </div>
  );
}
