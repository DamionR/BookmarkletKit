import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box, TextField, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { loadBookmarkletData, searchBookmarklets } from '../utils/bookmarkletLoader';

const bookmarkletCategories = [
  { id: 'productivity', name: 'Productivity Tools', icon: '🚀' },
  { id: 'debugging', name: 'Debugging & Development', icon: '🛠️' },
  { id: 'security', name: 'Security & Privacy', icon: '🔒' }
];

const HomePage = () => {
  const [bookmarklets, setBookmarklets] = useState([]);
  const [filteredBookmarklets, setFilteredBookmarklets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadBookmarkletData();
        setBookmarklets(data);
        setFilteredBookmarklets(data);
      } catch (error) {
        console.error('Error loading bookmarklets:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = bookmarklets;
    if (searchQuery) result = searchBookmarklets(searchQuery, result);
    if (selectedCategory) result = result.filter(b => b.category === selectedCategory);
    setFilteredBookmarklets(result);
  }, [searchQuery, selectedCategory, bookmarklets]);

  if (loading) return <Typography>Loading bookmarklets...</Typography>;

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>BookmarkletKit Packager</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search Bookmarklets"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Filter by Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="">All Categories</MenuItem>
            {bookmarkletCategories.map(category => (
              <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {filteredBookmarklets.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
          No bookmarklets found matching your search.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredBookmarklets.map(bookmarklet => (
            <Grid item xs={12} sm={6} md={4} key={bookmarklet.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2">{bookmarklet.icon} {bookmarklet.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{bookmarklet.description}</Typography>
                  <Chip label={bookmarklet.category} size="small" sx={{ mr: 1, mb: 1 }} />
                </CardContent>
                <CardActions>
                  <Button component="a" href={bookmarklet.code} size="small" color="primary" draggable="true">Drag to Bookmarks</Button>
                  <Button component={Link} to={`/bookmarklet/${bookmarklet.id}`} size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomePage;