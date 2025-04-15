import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import { Box, Paper, Typography } from '@mui/material';

const TranscriptHistory = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'center',
      position: 'relative',
      height: '80vh',
    }}
  >
    <Typography variant="subtitle1">Transcript history</Typography>

    <Box
      sx={{ position: 'absolute', bottom: '-0.5rem', display: 'flex', gap: 1 }}
    >
      <SecondaryButton>Try a Practice Call</SecondaryButton>
      <PrimaryButton>Call</PrimaryButton>
    </Box>
  </Box>
);

export default TranscriptHistory;
