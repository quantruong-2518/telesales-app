import { Stack } from '@mui/material';
import CustomerSentimentBox from './components/CustomerSentimentBox';
import CustomerBasicInfo from './components/CustomerBasicInfo';
import CustomerPolicies from './components/CustomerPolicies';
import CustomerActivities from './components/CustomerActivities';

const CustomerInfo = () => {
  return (
    <Stack spacing={2}>
      {/* Highlight box - not collapsible */}
      <CustomerSentimentBox />

      {/* Collapsible sections */}
      <CustomerBasicInfo />
      <CustomerPolicies />
      <CustomerActivities />
    </Stack>
  );
};

export default CustomerInfo;
