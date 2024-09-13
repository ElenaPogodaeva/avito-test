import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AdvertisementsPage from './pages/AdvertisementsPage/AdvertisementsPage';
import AdvertisementDetail from './pages/AdvertisementDetail/AdvertisementDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AdvertisementsPage />} />
        <Route path="advertisements/:id" element={<AdvertisementDetail />} />
        {/* <Route path="orders" element={<OrdersPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
