import { AdvertismentRequest, Config, QueryParams } from './types';

export async function createResponse(
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
