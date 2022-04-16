import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';

const BookCard: React.FC = () => {
  return (
    <Card
      sx={{
        minWidth: {
          sm: 275,
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
            The Shadow Over Insmouth
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Howard Lovecraft
          </Typography>
          <Typography variant="body2">Genre: Horror</Typography>
          <Typography variant="body2">Published: 1941</Typography>
          <Typography variant="body2">Pages: ?</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">MORE INFO</Button>
        </CardActions>
      </Box>
      <Box
        flex="0.75"
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: '16px',
          mx: '24px',
        }}
      >
        <Box
          width="100%"
          height="100%"
          component="img"
          sx={{ objectFit: 'cover' }}
          src="https://picsum.photos/2000/2000"
        />
      </Box>
    </Card>
  );
};

export default BookCard;
