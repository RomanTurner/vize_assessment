import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='dialog-alert feedback sent'>
        <DialogTitle>{'Your feedback has been sent! '}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            We take our students seriously, and we definitely will NOT delete
            this email.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back to Home</Button>
          <Button onClick={handleClose}>More Feedback</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
