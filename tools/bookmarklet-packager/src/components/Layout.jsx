import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
            BookmarkletKit
          </Typography>
          <MuiLink component={Link} to="/" color="inherit" sx={{ mx: 2 }}>Home</MuiLink>
          <MuiLink component={Link} to="/create" color="inherit" sx={{ mx: 2 }}>Create</MuiLink>
          <MuiLink component={Link} to="/about" color="inherit">About</MuiLink>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: theme => theme.palette.grey[200] }}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} <MuiLink color="inherit" href="https://github.com/DamionR/BookmarkletKit">BookmarkletKit</MuiLink>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;