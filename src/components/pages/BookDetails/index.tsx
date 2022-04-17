import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setBookDetails } from '../../../redux/bookDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const dispatcher = useAppDispatch();
  const bookData = useAppSelector((state) => state.bookDetails.data);
  useEffect(() => {
    axios
      .get(`https://digis-test.herokuapp.com/books/${id}`)
      .then((res) => dispatcher(setBookDetails(res.data)))
      .catch((err) => alert(err));
  }, []);
  return (
    <Box
      display="flex"
      gap="24px"
      sx={{
        px: '48px',
        py: '16px',
        height: 'fit-content',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box maxWidth="500px">
        <Typography variant="h3">{bookData?.title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {bookData?.author}
        </Typography>
        <Typography variant="body2">Genre: {bookData?.genre}</Typography>
        <Typography variant="body2">
          Published: {bookData?.published}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          Pages: {bookData?.pages}
        </Typography>
        <Box>
          <Typography variant="h4">Description</Typography>
          <Typography>{bookData?.shortDescription} </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        width="100%"
        sx={{ justifyContent: { xs: 'flex-start' } }}
      >
        <Box
          component="img"
          src={bookData?.image}
          sx={{
            maxHeight: '400px',
            maxWidth: '100%',
            objectFit: 'contain',
            borderRadius: 2,
          }}
          alt="Book image"
        />
      </Box>
    </Box>
  );
};

export default BookDetails;
