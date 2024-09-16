import { QueryParams } from '@/shared/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOrders } from '../api';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (sortBy: string, { rejectWithValue }) => {
    const [sort, order] = sortBy.split('-');

    const params: QueryParams = {
      _sort: sort,
      _order: order,
    };

    try {
      const orders = await getOrders(params);
      return { orders };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
