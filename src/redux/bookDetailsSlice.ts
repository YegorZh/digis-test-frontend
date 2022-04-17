import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBooksData } from './booksDataSlice';

export interface BookDetailsState {
  data?: IBooksData;
}
const initialState: BookDetailsState = {};

export const bookDetailsSlice = createSlice({
  name: 'bookDetails',
  initialState,
  reducers: {
    setBookDetails: (state, action: PayloadAction<IBooksData>) => {
      state.data = action.payload;
    },
  },
});

export const { setBookDetails } = bookDetailsSlice.actions;
export default bookDetailsSlice.reducer;
