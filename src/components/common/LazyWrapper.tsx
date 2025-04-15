import { Suspense, ReactNode } from 'react';
import { Box, CircularProgress } from '@mui/material';

const LazyWrapper = ({ children }: { children: ReactNode }) => (
  <Suspense
    fallback={
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    }
  >
    {children}
  </Suspense>
);

export default LazyWrapper;
