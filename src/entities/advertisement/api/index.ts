import { CreateAdvertisment, QueryParams, UpdateAdvertisment, createResponse } from '@/shared/api';
import { BASE_URL } from '@/shared/config';

export const getAdvertisements = (params: QueryParams) => {
  const url = `${BASE_URL}/advertisements`;
  return createResponse(url, 'GET', { params });
};

export const getAdvertisementById = (id: string) => {
  const url = `${BASE_URL}/advertisements/${id}`;
  return createResponse(url, 'GET');
};

export const createAdvertisement = (advertisement: CreateAdvertisment) => {
  const url = `${BASE_URL}/advertisements`;
  return createResponse(url, 'POST', { body: advertisement });
};

export const updateAdvertisement = (id: string, advertisement: UpdateAdvertisment) => {
  const url = `${BASE_URL}/advertisements/${id}`;
  return createResponse(url, 'PATCH', { body: advertisement });
};
