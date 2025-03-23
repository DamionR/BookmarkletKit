import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { ErrorBoundary } from 'react-error-boundary';

const Layout = lazy(() => import('./components/Layout'));
const HomePage = lazy(() => import('./components/HomePage'));
const BookmarkletPage = lazy(() => import('./components/BookmarkletPage'));
const CreateBookmarkletPage = lazy(() => import('./components/CreateBookmarkletPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

import theme from './theme';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        p: 3,
        textAlign: 'center'
      }}
    >
      <h1>Something went wrong</h1>
      <p>We apologize for the inconvenience.</p>
      <pre style={{ color: '#d32f2f', marginBottom: '16px' }}>{error.message}</pre>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <button 
          onClick={resetErrorBoundary}
          style={{
            padding: '10px 20px',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: theme.palette.grey[300],
            color: 'black',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Reload Page
        </button>
      </Box>
    </Box>
  );
}

function logError(error, info) {
  console.error('Caught an error:', error, info);
  // Placeholder for integrating with error tracking services (e.g., Sentry)
}

function App() {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={() => window.location.reload()}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider 
          maxSnack={3}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <BrowserRouter basename="/bookmarklet-packager">
            <Suspense 
              fallback={
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh' 
                  }}
                >
                  <CircularProgress />
                </Box>
              }
            >
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="bookmarklet/:id" element={<BookmarkletPage />} />
                  <Route path="create" element={<CreateBookmarkletPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;