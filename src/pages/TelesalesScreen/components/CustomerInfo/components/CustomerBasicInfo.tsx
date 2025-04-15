import CollapsibleSection from '@/components/common/CollapsibleSection';
import { Stack, Typography } from '@mui/material';

const CustomerInfo = () => {
  return (
    <CollapsibleSection title="Cian Doe">
      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">
          📍 Thong Lo, Bangkok
        </Typography>
        <Typography variant="body2">📞 085 678 9101</Typography>
        <Typography variant="body2">🗓️ Since: 01 May 2021</Typography>
      </Stack>
    </CollapsibleSection>
  );
};

export default CustomerInfo;
