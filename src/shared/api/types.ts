export type Advertisment = {
  /* Уникальный идентификатор. */
  id: string;
  /* Название. */
  name: string;
  /* Описание. */
  description?: string;
  /* Цена. */
  price: number;
  /* Дата и время создания. */
  createdAt: string;
  /* Количество просмотров. */
  views: number;
  /* Количество лайков. */
  likes: number;
  /* Ссылка на изображение. */
  imageUrl?: string;
};

export const enum OrderStatus {
  Created = 0,
  Paid = 1,
  Transport = 2,
  DeliveredToThePoint = 3,
  Received = 4,
  Archived = 5,
  Refund = 6,
}

export type OrderItemType = Advertisment & { count: number };

export type Order = {
  /* Уникальный идентификатор. */
  id: string;
  /* Статус. */
  status: (typeof OrderStatus)[keyof typeof OrderStatus];
  /* Дата и время создания. */
  createdAt: string;
  /* Дата и время завершения. */
  finishedAt?: string;
  /* Товары в заказе. */
  items: Array<OrderItemType>;
  /* Способ доставки(Почта, СДЭК...) */
  deliveryWay: string;
  /* Сумма заказа */
  total: number;
};

type Image = {
  /* Уникальный идентификатор. */
  id: number;
  /* Ссылка. */
  url: string;
  /* Название. */
  name: string;
};

export type CreateAdvertisment = {
  name: string;
  /* Описание. */
  description?: string;
  /* Цена. */
  price: number;
  /* Дата и время создания. */
  createdAt: string;
  /* Количество просмотров. */
  views: number;
  /* Количество лайков. */
  likes: number;
  /* Ссылка на изображение. */
  imageUrl?: string;
};

export type UpdateAdvertisment = {
  name: string;
  /* Описание. */
  description?: string;
  /* Цена. */
  price: number;
  /* Ссылка на изображение. */
  imageUrl?: string;
};

export type AdvertismentRequest = CreateAdvertisment | UpdateAdvertisment;

export type QueryParams = {
  // _start: string;
  // _limit: string;
  _page?: string;
  _per_page?: string;
  _sort?: string;
  _order?: string;
  name?: string;
};

export type Config = {
  method: string;
  headers: {
    'Content-Type'?: string;
  };
  body?: string;
};

export type FormValues = {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
};
