import React from 'react';
import { Box, Typography, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <Typography variant="h4" color="error" gutterBottom>Something went wrong</Typography>
          <Typography variant="body1" paragraph>Please try refreshing the page.</Typography>
          <Button variant="contained" color="primary" onClick={() => window.location.reload()}>Reload Page</Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;