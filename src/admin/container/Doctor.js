import React, { useEffect, useState } from 'react';
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
import Button from '../../user/container/UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { adddata, fetchdata } from '../../redux/action/doctor.action';
import { DataGrid } from '@mui/x-data-grid';
import DoctorForm from './Doctor/DoctorForm';

export default function Doctor() {
    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctor)

    useEffect(() => {
        dispatch(fetchdata())
    }, [])

    const handleSubmitData = (data) => {
        dispatch(adddata(data))
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 }
    ]

    return (
        <div>
            <center>
                <h1>Doctor</h1>
            </center>

            <DoctorForm onGetdata={handleSubmitData} />

            <div style={{ height: 400, width: '60%' }}>
                <DataGrid
                    rows={doctors.doctor}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}