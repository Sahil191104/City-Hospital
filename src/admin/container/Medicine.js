import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

export default function Medicine() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [medilist, setMedilist] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMedilist(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Medicine Name List
            </Button>
            <Dialog
                fullWidth={fullWidth}
                medilist={medilist}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>List Out</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <FormControl sx={{ mt: 2, minWidth: 120 }}>
                            <InputLabel htmlFor="max-width">List</InputLabel>
                            <Select
                                autoFocus
                                value={medilist}
                                onChange={handleMaxWidthChange}
                                label="medilist"
                                inputProps={{
                                    name: 'max-width',
                                    id: 'max-width',
                                }}
                            >
                                <MenuItem value={false}>false</MenuItem>
                                <MenuItem value="xs">Augmentin 625 Duo Tablet</MenuItem>
                                <MenuItem value="sm">Aricep 5 Tablet</MenuItem>
                                <MenuItem value="md">Avil 25 Tablet</MenuItem>
                                <MenuItem value="lg">Azithral 500 Tablet</MenuItem>
                                <MenuItem value="xl">Aciloc 150 Tablet</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}