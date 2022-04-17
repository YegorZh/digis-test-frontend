import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails: React.FC = () => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://digis-test.herokuapp.com/books/${id}`)
      .then((res) => alert(res.data));
    // .catch((err) => alert(err));
  }, []);
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ px: '16px', py: '16px' }}
    ></Box>
  );
};

export default BookDetails;
