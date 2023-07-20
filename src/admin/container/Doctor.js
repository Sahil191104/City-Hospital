import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, deletedoctors, fetchdata, updatedoctors } from '../../redux/action/doctor.action';
import { DataGrid } from '@mui/x-data-grid';
import DoctorForm from './Doctor/DoctorForm';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Doctor() {
    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctor)
    const [update, setUpadate] = useState(null);

    useEffect(() => {
        dispatch(fetchdata())
    }, [])

    const handleSubmitData = (data) => {
        if (update) {
            dispatch(updatedoctors(data))
        } else {
            dispatch(adddata(data))
        }

        setUpadate(null)
    }

    const handleUpdate = (data) => {
        setUpadate(data)
    }

    const handleDelete = (id) => {
        dispatch(deletedoctors(id))
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleUpdate(params.row)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        }
    ]

    return (
        <div>
            <center>
                <h1>Doctor</h1>

                <DoctorForm onGetdata={handleSubmitData} onUpdate={update} />

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
            </center>
        </div>
    );
}