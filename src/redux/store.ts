import { configureStore } from '@reduxjs/toolkit';
import advertisementsReducer from './advertisementsSlice';
import advertisementReducer from './advertisementSlice';

export const store = configureStore({
  reducer: {
    advertisements: advertisementsReducer,
    advertisement: advertisementReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
