import { Button, ButtonProps } from '@mui/material';

const SecondaryButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: '4px',
        fontWeight: 600,
        borderColor: '#E87722',
        width: '17rem',
        padding: '0.75rem 1.5rem',
      }}
      {...props}
    />
  );
};

export default SecondaryButton;
