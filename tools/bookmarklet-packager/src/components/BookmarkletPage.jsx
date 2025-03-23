import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Box, Button, Paper, Divider, Alert } from '@mui/material';
import { loadBookmarkletData } from '../utils/bookmarkletLoader';

const BookmarkletPage = () => {
  const { id } = useParams();
  const [bookmarklet, setBookmarklet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadBookmarkletData();
        const foundBookmarklet = data.find(b => b.id === id);
        setBookmarklet(foundBookmarklet || null);
      } catch (error) {
        console.error('Error loading bookmarklet details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <Typography>Loading bookmarklet details...</Typography>;
  if (!bookmarklet) return (
    <Box>
      <Alert severity="error">Bookmarklet not found</Alert>
      <Button component={Link} to="/" sx={{ mt: 2 }}>Back to Home</Button>
    </Box>
  );

  return (
    <Box>
      <Button component={Link} to="/" sx={{ mb: 2 }}>&larr; Back to All Bookmarklets</Button>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>{bookmarklet.icon} {bookmarklet.name}</Typography>
        <Typography variant="body1" paragraph>{bookmarklet.description}</Typography>
        <Box sx={{ my: 3 }}>
          <Button component="a" href={bookmarklet.code} variant="contained" color="primary" draggable="true" size="large">
            Drag this to your Bookmarks Bar
          </Button>
        </Box>
      </Paper>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>Installation Instructions</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>1. Ensure your bookmarks bar is visible (Ctrl+Shift+B or Command+Shift+B).</Typography>
        <Typography variant="body1" paragraph>2. Drag the button above to your bookmarks bar.</Typography>
        <Typography variant="body1" paragraph>3. Click it when on a relevant page.</Typography>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>How It Works</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: bookmarklet.usage }} />
      </Paper>
    </Box>
  );
};

export default BookmarkletPage;