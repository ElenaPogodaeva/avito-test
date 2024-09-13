import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateAdvertisment, QueryParams, UpdateAdvertisment } from '../types/types';
import {
  createAdvertisement,
  getAdvertisementById,
  getAdvertisements,
  updateAdvertisement,
} from '../api/api';

type SearchOptions = {
  searchValue: string;
  resultsPerPage: number;
  currentPage: number;
};

export const fetchAdvertisements = createAsyncThunk(
  'advertisements/fetchAdvertisements',
  async (searchOptions: SearchOptions, { rejectWithValue }) => {
    const { searchValue, resultsPerPage, currentPage } = searchOptions;

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
  async (data: CreateAdvertisment, { rejectWithValue }) => {
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

export const editAdvertisement = createAsyncThunk(
  'advertisements/editAdvertisement',
  async (data: { id: string; advertisement: UpdateAdvertisment }, { rejectWithValue }) => {
    try {
      const { id, advertisement } = data;
      const response = await updateAdvertisement(id, advertisement);
      return response;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
