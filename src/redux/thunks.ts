import { createAsyncThunk } from '@reduxjs/toolkit';

import { AdvertismentRequest, QueryParams } from '../types/types';
import { createAdvertisement, getAdvertisementById, getAdvertisements } from '../api/api';

type SearchOptions = {
  searchValue: string;
  resultsPerPage: number;
  currentPage: number;
};

export const fetchAdvertisements = createAsyncThunk(
  'advertisements/fetchAdvertisements',
  async (searchOptions: SearchOptions, { rejectWithValue }) => {
    const { searchValue, resultsPerPage, currentPage } = searchOptions;

    // const params: QueryParams = {
    //   _start: (currentPage * resultsPerPage).toString(),
    //   _limit: resultsPerPage.toString(),
    // };

    // const params: QueryParams = {
    //   _start: (currentPage * resultsPerPage).toString(),
    //   _limit: resultsPerPage.toString(),
    // };

    const params: QueryParams = {
      _page: currentPage.toString(),
      _per_page: resultsPerPage.toString(),
    };

    if (searchValue) {
      params.name = searchValue;
    }

    try {
      const response = await getAdvertisements(params);
      const total = response.items;
      const advertisements = response.data;
      return { advertisements, total };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

export const addAdvertisement = createAsyncThunk(
  'advertisements/addAdvertisement',
  async (data: AdvertismentRequest, { rejectWithValue }) => {
    try {
      const response = await createAdvertisement(data);
      return response;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

export const fetchAdvertisement = createAsyncThunk(
  'advertisement/fetchAdvertisement',
  async (id: string, { rejectWithValue }) => {
    try {
      const advertisement = await getAdvertisementById(id);
      return advertisement;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
