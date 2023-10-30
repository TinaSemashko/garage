import * as React from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar as StyledSnackbar } from '@mui/material';

type SnackbarProps = {
  open: boolean;
  message: string;
  variant: 'success' | 'error' | 'info' | undefined;
  onClose: () => void;
};

const Snackbar: React.FC<SnackbarProps> = ({ open, onClose, message, variant }) => (
  <StyledSnackbar
    sx={{ height: '100%' }}
    message={message}
    open={open}
    onClose={onClose}
    autoHideDuration={4000}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}>
    <Alert severity={variant} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </StyledSnackbar>
);
export default Snackbar;
