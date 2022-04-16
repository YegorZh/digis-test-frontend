import { Box, Grid } from '@mui/material';
import React from 'react';
import BookCard from './BookCard';

const Library: React.FC = () => {
  return (
    <Grid
      sx={{ px: '48px', pt: '24px' }}
      container
      spacing={3}
      justifyContent="center"
    >
      {[...Array(10)].map((_, index) => (
        <Grid key={index} item>
          <BookCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default Library;
