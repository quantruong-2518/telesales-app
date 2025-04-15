import { Box, Typography } from '@mui/material';

const CustomerSentimentBox = () => {
  return (
    <Box
      sx={{
        background: '#E6F4EA',
        border: '1px solid #B7E0C0',
        borderRadius: 2,
        p: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Last call on 1 Dec
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        color="success.main"
        sx={{ mt: 0.5 }}
      >
        Overall: Interested
      </Typography>
    </Box>
  );
};

export default CustomerSentimentBox;
