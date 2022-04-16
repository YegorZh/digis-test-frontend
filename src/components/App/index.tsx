import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from '../BookDetails';
import Home from '../Home';
import Library from '../Library';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
