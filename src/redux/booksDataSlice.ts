import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBooksData {
  _id: string;
  title: string;
  author: string;
  genre: string;
  published: string;
  shortDescription: string;
  pages: string;
  image?: string;
}

export interface BooksDataState {
  data?: IBooksData[];
}

const initialState: BooksDataState = {};

export const booksDataSlice = createSlice({
  name: 'booksData',
  initialState,
  reducers: {
    setBooksData: (state, action: PayloadAction<IBooksData[]>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooksData } = booksDataSlice.actions;
export default booksDataSlice.reducer;
