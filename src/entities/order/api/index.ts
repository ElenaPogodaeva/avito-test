import { Order, QueryParams, createResponse } from '@/shared/api';
import { BASE_URL } from '@/shared/config';

export const getOrders = (params: QueryParams): Promise<Order[]> => {
  const url = `${BASE_URL}/orders`;
  return createResponse(url, 'GET', { params });
};
