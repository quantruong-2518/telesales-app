import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)',
        borderBottomRightRadius: '1rem',
        borderBottomLeftRadius: '1rem',
        padding: '0.5rem 1rem',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left section: Logo and title */}
        <img
          src="/wire-logo.png"
          alt="Wire Logo"
          style={{ height: 32, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />

        {/* Right section: Notification icon + Avatar + Name */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton size="large" color="default">
            <Badge variant="dot" color="primary">
              <NotificationsOutlined color="primary" />
            </Badge>
          </IconButton>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: '40px', height: '40px', bgcolor: 'primary.main' }}
            >
              {'Elena'.charAt(0)}
            </Avatar>
            <Typography variant="h6" fontWeight={500}>
              Elena
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
