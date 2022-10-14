import { configureStore } from '@reduxjs/toolkit';
import searchFilterReducer from './searchFilter/searchFilterSlice';

export const store = configureStore({
  reducer: {
    searchFilter: searchFilterReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;