import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/system';
import { FormControl } from '@mui/base';
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from 'styled-components';

export default function Doctor() {
    const [open, setOpen] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Btn = styled.button`
        margin-left: 25px;
        background: #FF6337;
        color: #fff;
        margin: 30px;
        border-radius: 50px;
        padding: 8px 25px;
        white-space: nowrap;
        transition: 0.3s;
        font-size: 14px;
        display: inline-block;
        border:none;
      
        &:hover {
            background: #166ab5;
            color: #fff;
        }
    `

    return (
        <div>
            <center>
                <Btn variant="outlined" onClick={handleClickOpen} sx={{ justifyContent: "center" }}>
                    Email id
                </Btn>
            </center>
            <Dialog open={open} onClose={handleClickOpen}>
                <DialogTitle>Doctor Email id</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </DialogContentText>
                    <TextField
                        id="demo-helper-text-aligned-no-helper"
                        label="Name"
                        sx={{ marginTop: "20px" }}
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit'>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}