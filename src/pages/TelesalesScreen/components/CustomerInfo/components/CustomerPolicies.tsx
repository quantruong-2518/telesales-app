import CollapsibleSection from '@/components/common/CollapsibleSection';
import { List, ListItem, ListItemText } from '@mui/material';

const CustomerPolicies = () => {
  return (
    <CollapsibleSection title="Policies (3)">
      <List dense disablePadding>
        <ListItem disableGutters>
          <ListItemText
            primary="CI All-in-One"
            secondary="Active • Since Jan 2023"
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="Easy E-SAVE 10/5" secondary="Pending" />
        </ListItem>
      </List>
    </CollapsibleSection>
  );
};

export default CustomerPolicies;
