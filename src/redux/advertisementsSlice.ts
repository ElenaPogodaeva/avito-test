import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Advertisment } from '../types/types';
import { fetchAdvertisements } from './thunks';
import { LIMIT } from '../config/constants';

export type advertisementsState = {
  searchValue: string;
  resultsPerPage: number;
  currentPage: number;
  hasMore: boolean;
  advertisements: Advertisment[];
  isLoading: boolean;
  error: string;
  [key: string]: string | number | boolean | Advertisment[];
};

const initialState: advertisementsState = {
  searchValue: '',
  resultsPerPage: LIMIT,
  currentPage: 1,
  hasMore: true,
  advertisements: [],
  isLoading: true,
  error: '',
};

export const advertisementsSlice = createSlice({
  name: 'advertisements',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchOptions: (
      state,
      action: PayloadAction<{
        name: string;
        value: string;
      }>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
    setCurrentPage: (state) => {
      state.currentPage += 1;
    },
    resetPage: (state) => {
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdvertisements.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchAdvertisements.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      if (state.currentPage > 1) {
        state.advertisements = [...state.advertisements, ...action.payload.advertisements];
      } else {
        state.advertisements = action.payload.advertisements;
      }

      state.hasMore = state.advertisements.length < action.payload.total;
    });
    builder.addCase(fetchAdvertisements.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.advertisements = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue, setSearchOptions, setCurrentPage, resetPage } =
  advertisementsSlice.actions;

export default advertisementsSlice.reducer;
