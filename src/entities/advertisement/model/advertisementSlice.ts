import { createSlice } from '@reduxjs/toolkit';
import { Advertisment } from '@/shared/api';
import { fetchAdvertisement } from './thunks';

export type AdvertisementState = {
  advertisement: Advertisment | null;
  isLoading: boolean;
  error: string;
};

const initialState: AdvertisementState = {
  advertisement: null,
  isLoading: true,
  error: '',
};

export const advertisementSlice = createSlice({
  name: 'advertisement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdvertisement.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchAdvertisement.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.advertisement = action.payload;
    });
    builder.addCase(fetchAdvertisement.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.advertisement = null;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { setSearchValue, setSearchOptions, setCurrentPage, resetPage } =
//   advertisementsSlice.actions;

export default advertisementSlice.reducer;
