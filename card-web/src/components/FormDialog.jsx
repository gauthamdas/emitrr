import * as React from 'react';
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { setUserName } from '../features/user/userSlice';
import axios from 'axios';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    let data = document.getElementById("username").value;
    if (!data) { return }
    dispatch(setUserName(data))
    localStorage.setItem('username',data)
    axios.post(import.meta.env.VITE_APP_API_URL+'/api/users/new', {
      username: data
    })
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.buttonTitle}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Username</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="success" onClick={handleLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

FormDialog.propTypes = {
  buttonTitle: PropTypes.string
}