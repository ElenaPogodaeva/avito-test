import React from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { setSortValue } from '@/entities/order';
import { SortType } from '@/entities/order/model/ordersSlice';
import style from './Sort.module.scss';

export function Sort() {
  const { sortBy } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value as SortType;
    dispatch(setSortValue(value));
  };

  return (
    <div className={style.searchOptions}>
      <label className={style.searchLabel}>
        Сортировать по сумме заказа
        <select
          className={`input ${style.searchSelect}`}
          name="sortBy"
          value={sortBy}
          onChange={handleChange}
        >
          <option value={SortType.TotalAsc}>по возрастанию</option>
          <option value={SortType.TotalDesc}>по убыванию</option>
        </select>
      </label>
    </div>
  );
}
