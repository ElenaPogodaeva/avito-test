import { OrderStatus } from '@/shared/api';

export const enumToString = (enumValue: number) => {
  switch (enumValue) {
    case OrderStatus.Created:
      return 'Создан';
    case OrderStatus.Paid:
      return 'Оплачен';
    case OrderStatus.Transport:
      return 'В пути';
    case OrderStatus.DeliveredToThePoint:
      return 'Доставлен в пункт выдачи';
    case OrderStatus.Received:
      return 'Получен';
    case OrderStatus.Archived:
      return 'В архиве';
    case OrderStatus.Refund:
      return 'Возврат';
    default:
      return '';
  }
};
