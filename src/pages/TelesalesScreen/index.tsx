import { Box } from '@mui/material';
import CustomerInfo from './components/CustomerInfo';
import TranscriptHistory from './components/TranscriptHistory';
import QuickActionPanel from './components/QuickActionPanel';

const TelesalesScreen = () => {
  return (
    <Box
      display="flex"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      gap={2}
      width="100%"
      padding={'3rem 1.5rem 0 1.5rem'}
    >
      {/* Left column */}
      <Box flex={{ xs: '1 1 100%', md: '0 0 25%' }}>
        <CustomerInfo />
      </Box>

      {/* Middle column */}
      <Box flex={{ xs: '1 1 100%', md: '1 1 auto' }}>
        <TranscriptHistory />
      </Box>

      {/* Right column */}
      <Box flex={{ xs: '1 1 100%', md: '0 0 15%' }}>
        <QuickActionPanel />
      </Box>
    </Box>
  );
};

export default TelesalesScreen;
