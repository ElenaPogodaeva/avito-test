import { AdvertismentRequest, Config, QueryParams } from '../types/types';
import { BASE_URL } from '../config/constants';

async function createResponse(
  url: string,
  method: string,
  {
    params,
    body,
  }: {
    params?: QueryParams;
    body?: AdvertismentRequest;
  } = {}
) {
  try {
    const config: Config = {
      method,
      headers: {},
    };
    const newUrl = new URL(url);

    if (params) {
      newUrl.search = new URLSearchParams(params).toString();
    }

    if (body) {
      config.headers['Content-Type'] = 'application/json';
      config.body = JSON.stringify(body);
    }

    const response = await fetch(newUrl.href, config);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const getAdvertisements = (params: QueryParams) => {
  const url = `${BASE_URL}/advertisements`;
  return createResponse(url, 'GET', { params });
};

export const getAdvertisementById = (id: string) => {
  const url = `${BASE_URL}/advertisements/${id}`;
  return createResponse(url, 'GET');
};

export const createAdvertisement = (advertisement: AdvertismentRequest) => {
  const url = `${BASE_URL}/advertisements`;
  return createResponse(url, 'POST', { body: advertisement });
};

export const updateAdvertisement = (id: string, advertisement: AdvertismentRequest) => {
  const url = `${BASE_URL}/advertisements/${id}`;
  return createResponse(url, 'PUT', { body: advertisement });
};
