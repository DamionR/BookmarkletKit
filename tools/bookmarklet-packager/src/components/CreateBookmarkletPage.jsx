import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const CreateBookmarkletPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>Create a New Bookmarklet</Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="body1" paragraph>
          Use our CLI tool to create a new bookmarklet project from your terminal.
        </Typography>
        <Typography variant="body2" paragraph>Run this command:</Typography>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
          npx @bookmarkletkit/create-bookmarklet
        </pre>
        <Typography variant="body1" paragraph>Follow the prompts to set up your project.</Typography>
      </Paper>
    </Box>
  );
};

export default CreateBookmarkletPage;