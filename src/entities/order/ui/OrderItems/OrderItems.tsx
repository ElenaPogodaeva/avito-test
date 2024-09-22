import { OrderItemType } from '@/shared/api';
import { Link } from 'react-router-dom';
import style from './OrderItems.module.scss';

type OrderItemsProps = {
  items: OrderItemType[];
};

export function OrderItems({ items }: OrderItemsProps) {
  return (
    <ul className={style.orderItems}>
      {Boolean(items.length) &&
        items.map((item) => (
          <li key={item.id} className={style.orderItem}>
            <Link to={`/advertisements/${item.id}`} className={style.orderLink}>
              {item.name}
            </Link>
            {item.count} шт.
          </li>
        ))}
    </ul>
  );
}
