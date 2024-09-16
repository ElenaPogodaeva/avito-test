import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Loader } from '@/shared/ui/Loader';
import { Sort } from '@/features/order';
import { fetchOrders, OrderList } from '@/entities/order';

export function OrdersPage() {
  const { orders, sortBy, isLoading, error } = useAppSelector((state) => state.orders);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders(sortBy));
  }, [sortBy]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error occured</p>;

  return (
    <div className="page">
      <section className="section">
        <h2 className="section-title">Заказы</h2>
        <Sort />
        <OrderList orders={orders} />
      </section>
    </div>
  );
}
