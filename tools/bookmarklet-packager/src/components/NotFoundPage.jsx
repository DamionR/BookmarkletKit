import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h1" component="h1" gutterBottom>404</Typography>
      <Typography variant="h4" component="h2" gutterBottom>Page Not Found</Typography>
      <Typography variant="body1" paragraph>The page you're looking for doesn't exist.</Typography>
      <Button component={Link} to="/" variant="contained">Go to Home</Button>
    </Box>
  );
};

export default NotFoundPage;