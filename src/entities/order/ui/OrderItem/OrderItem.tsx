import { Order } from '@/shared/api';
import { enumToString } from '@/shared/lib';
import { useState } from 'react';
import style from './OrderItem.module.scss';
import { OrderItems } from '../OrderItems/OrderItems';

type OrderItemProps = {
  order: Order;
};

export function OrderItem({ order }: OrderItemProps) {
  const { id, status, createdAt, items, deliveryWay, total } = order;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.card}>
      <div className={style.orderHeader}>
        <h2 className={style.orderTitle}>Заказ №{id}</h2>
        <div className={style.orderStatus}>
          <span>{enumToString(status)}</span>
        </div>
      </div>
      <div className={style.orderContent}>
        <p className={style.orderRow}>
          <span className={style.orderLabel}>Создан:</span>{' '}
          {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className={style.orderRow}>
          <span className={style.orderLabel}>Способ доставки: </span> {deliveryWay}
        </p>
        <p className={style.orderRow}>
          <span className={style.orderLabel}>Количество товаров: </span> {items.length}
        </p>
        <p className={style.orderRow}>
          <span className={style.orderLabel}>Сумма: </span> {total}
        </p>
      </div>
      <button
        type="button"
        className={`button ${style.orderBtn}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? 'Скрыть товары' : 'Показать товары'}
      </button>
      {isOpen && <OrderItems items={items} />}
    </div>
  );
}
