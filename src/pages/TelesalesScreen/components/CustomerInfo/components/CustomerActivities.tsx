import CollapsibleSection from '@/components/common/CollapsibleSection';
import { List, ListItem, ListItemText } from '@mui/material';

const CustomerActivities = () => {
  return (
    <CollapsibleSection title="Activities">
      <List dense disablePadding>
        <ListItem disableGutters>
          <ListItemText
            primary="📞 Last call: CI plan discussed"
            secondary="2 days ago"
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="📱 App downloaded" secondary="5 days ago" />
        </ListItem>
      </List>
    </CollapsibleSection>
  );
};

export default CustomerActivities;
