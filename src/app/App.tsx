import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/shared/ui/Layout';
import { AdvertisementsPage } from '@/pages/advertisements';
import { AdvertisementDetail } from '@/pages/advertisement-detail';
import { NotFoundPage } from '@/pages/not-found';
import { OrdersPage } from '@/pages/orders';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AdvertisementsPage />} />
        <Route path="advertisements/:id" element={<AdvertisementDetail />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
