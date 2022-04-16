import { AppBar, Box, Button, Menu } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const pages = [
    { name: 'Home', link: '/' },
    { name: 'Library', link: '/library' },
  ];
  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1, display: 'flex', px: '40px' }}>
        {pages.map((page) => (
          <Button
            key={page.name}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <NavLink to={page.link}>{page.name}</NavLink>
          </Button>
        ))}
      </Box>
    </AppBar>
  );
};

export default Navbar;
