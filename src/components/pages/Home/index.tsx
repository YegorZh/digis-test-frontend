import { Box, Typography } from '@mui/material';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box sx={{ px: '48px', mt: '16px' }}>
        <Typography variant="h2">What is a book?</Typography>
        <Typography sx={{ columnCount: 2 }}>
          {`A book is a medium for recording information in the form of writing or
          images, typically composed of many pages (made of papyrus, parchment,
          vellum, or paper) bound together and protected by a cover. The
          technical term for this physical arrangement is codex (plural,
          codices). In the history of hand-held physical supports for extended
          written compositions or records, the codex replaces its predecessor,
          the scroll. A single sheet in a codex is a leaf and each side of a
          leaf is a page. As an intellectual object, a book is prototypically a
          composition of such great length that it takes a considerable
          investment of time to compose and still considered as an investment of
          time to read. In a restricted sense, a book is a self-sufficient
          section or part of a longer composition, a usage reflecting that, in
          antiquity, long works had to be written on several scrolls and each
          scroll had to be identified by the book it contained. Each part of
          Aristotle's Physics is called a book. In an unrestricted sense, a book
          is the compositional whole of which such sections, whether called
          books or chapters or parts, are parts.`}
        </Typography>
      </Box>
      <Box sx={{ mt: '24px', height: '300px', overflow: 'hidden' }}>
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
        />
      </Box>
    </Box>
  );
};

export default Home;
