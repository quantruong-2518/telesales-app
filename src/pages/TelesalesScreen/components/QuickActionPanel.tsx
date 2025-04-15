import { Box, IconButton, InputBase, Paper } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/ArrowForward';

const QuickActionPanel = () => {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '32px',
        border: '1.5px solid white',
        p: 0.5,
        bgcolor: 'transparent',
        justifyContent: 'space-between',
      }}
      elevation={0}
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: handle submit
      }}
    >
      {/* File attach icon */}
      <IconButton component="label" sx={{ color: 'primary.main' }}>
        <AttachFileIcon />
        <input type="file" hidden />
      </IconButton>

      <Box
        sx={{
          padding: '0.5rem',
          borderRadius: '50px',
          background: '#fff',
          display: 'flex',
        }}
      >
        {/* Input field */}
        <InputBase
          sx={{
            flex: 1,
            color: 'text.primary',
            padding: '0 0.5rem',
          }}
          placeholder="Ask anything"
          inputProps={{ 'aria-label': 'Ask anything' }}
        />

        {/* Send button */}
        <IconButton
          type="submit"
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            width: 32,
            height: 32,
          }}
        >
          <SendIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default QuickActionPanel;
