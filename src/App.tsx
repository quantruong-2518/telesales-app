import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(180deg, #FAE4D3 0%, #FFF6D9 40%, #ffffff 100%)',
        height: '100vh',
      }}
    >
      <Header />

      {/* Push main content below fixed header */}
      <Box component="main" sx={{ px: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
