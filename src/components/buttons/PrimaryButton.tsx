import { Button, ButtonProps } from '@mui/material';

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: '4px',
        fontWeight: 600,
        width: '17rem',
        padding: '0.75rem 1.5rem',
      }}
      {...props}
    />
  );
};

export default PrimaryButton;
