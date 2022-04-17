import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from '../pages/BookDetails';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Navbar from '../structure/Navbar';

const App: React.FC = () => {
  return (
    <Box minHeight="100vh" display="flex" sx={{ flexDirection: 'column' }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/book/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
