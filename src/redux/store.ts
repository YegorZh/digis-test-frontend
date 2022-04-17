import { configureStore } from '@reduxjs/toolkit';
import booksDataReducer from './booksDataSlice';
import bookDetailsReducer from './bookDetailsSlice';

export const store = configureStore({
  reducer: {
    booksData: booksDataReducer,
    bookDetails: bookDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
