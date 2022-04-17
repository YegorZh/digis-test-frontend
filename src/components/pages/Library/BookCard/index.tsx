import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IBooksData } from '../../../../redux/booksDataSlice';

const BookCard: React.FC<{ bookData: IBooksData }> = ({ bookData }) => {
  return (
    <Card
      sx={{
        minWidth: {
          xs: 275,
          md: 400,
        },
        maxWidth: 'fit-content',
        overflowx: 'scroll',
        display: 'flex',
      }}
    >
      <Box
        flex="1"
        display="flex"
        sx={{ justifyContent: 'space-between', flexDirection: 'column' }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {bookData.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {bookData.author}
          </Typography>
          <Typography variant="body2">Genre: {bookData.genre}</Typography>
          <Typography variant="body2">
            Published: {bookData.published}
          </Typography>
          <Typography variant="body2">Pages: {bookData.pages}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <NavLink to={`/library/book/${bookData._id}`}>MORE INFO</NavLink>
          </Button>
        </CardActions>
      </Box>
      <Box
        flex="0.75"
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          py: '16px',
          mx: '24px',
        }}
      >
        <Box
          width="100%"
          maxHeight="250px"
          component="img"
          sx={{ objectFit: 'cover', borderRadius: 1 }}
          src={bookData.image}
          alt={`Image for ${bookData.title}`}
        />
      </Box>
    </Card>
  );
};

export default BookCard;
