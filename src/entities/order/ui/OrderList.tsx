import { Order } from '@/shared/api';
import { OrderItem } from './OrderItem/OrderItem';

type OrderListProps = {
  orders: Order[];
};

export function OrderList({ orders }: OrderListProps) {
  return (
    <div className="cards">
      {Boolean(orders.length) && orders.map((order) => <OrderItem key={order.id} order={order} />)}
    </div>
  );
}

export default OrderList;
