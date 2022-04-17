import { Grid } from '@mui/material';
import axios, { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { IBooksData, setBooksData } from '../../../redux/booksDataSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import BookCard from './BookCard';

const Library: React.FC = () => {
  const dispatcher = useAppDispatch();
  const booksData = useAppSelector((state) => state.booksData.data);

  useEffect(() => {
    axios
      .get('https://digis-test.herokuapp.com/books')
      .then((res) => {
        dispatcher(setBooksData(res.data));
      })
      .catch((err: Error | AxiosError) => alert(err));
  }, []);

  return (
    <Grid
      sx={{ px: '48px', pt: '24px' }}
      container
      spacing={3}
      justifyContent="center"
    >
      {booksData?.map((bookData, index) => (
        <Grid key={index} item>
          <BookCard bookData={bookData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Library;
