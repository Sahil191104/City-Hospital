import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from 'styled-components';

export default function Contact() {
    const [open, setOpen] = React.useState(false);

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
                <Btn variant="outlined" onClick={handleClickOpen}>
                    Contact Number
                </Btn>
                <Dialog open={open} onClose={handleClickOpen}>
                    <DialogTitle>Doctor Contact Number</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Contact Number"
                            type="number"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </center>
        </div>
    );
}