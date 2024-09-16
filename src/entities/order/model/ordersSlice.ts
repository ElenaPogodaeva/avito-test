import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '@/shared/api';
import { fetchOrders } from './thunks';

export enum SortType {
  TotalAsc = 'total-asc',
  TotalDesc = 'total-desc',
}

export type OrdersState = {
  sortBy: SortType;
  orders: Order[];
  isLoading: boolean;
  error: string;
};

const initialState: OrdersState = {
  sortBy: SortType.TotalAsc,
  orders: [],
  isLoading: true,
  error: '',
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setSortValue: (state, action: PayloadAction<SortType>) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.orders = action.payload.orders;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.orders = [];
    });
  },
});

export const { setSortValue } = ordersSlice.actions;

export default ordersSlice.reducer;
