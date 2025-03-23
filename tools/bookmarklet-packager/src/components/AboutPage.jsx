import React from 'react';
import { Typography, Paper, Box, Link } from '@mui/material';

const AboutPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>About BookmarkletKit</Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="body1" paragraph>
          BookmarkletKit is a collection of browser bookmarklets designed to enhance productivity for developers and support specialists.
        </Typography>
        <Typography variant="body1" paragraph>
          Each bookmarklet is crafted to solve specific problems, from redacting sensitive information to providing debugging tools.
        </Typography>
        <Typography variant="body1">
          Visit our <Link href="https://github.com/DamionR/BookmarkletKit" target="_blank" rel="noopener">GitHub repository</Link> to explore the source code or contribute.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutPage;