import { createAsyncThunk } from '@reduxjs/toolkit';

import { QueryParams } from '../types/types';
import { getAdvertisements } from '../api/api';

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
