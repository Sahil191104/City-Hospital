import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import MedicineForm from './Medicine/MedicineForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, AlertTitle, Box, CircularProgress, Stack } from '@mui/material';
import { fetchdata, updatemedicine, adddata, deletemedicine } from '../../redux/action/medicine.action';

export default function Medicine() {
    const dispatch = useDispatch();
    const medicines = useSelector(state => state.medicine)
    const [update, setUpadate] = useState(null);

    useEffect(() => {
        dispatch(fetchdata())
    }, [])

    const handleSubmitData = (data) => {
        if (update) {
            dispatch(updatemedicine(data))
        } else {
            dispatch(adddata(data))
        }

        setUpadate(null)
    }

    const handleUpdate = (data) => {
        setUpadate(data)
    }

    const handleDelete = (id) => {
        console.log("Error");
        dispatch(deletemedicine(id))
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
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
            {
                medicines.loading ?
                    <Box className="d-flex justify-content-center" >
                        <CircularProgress sx={{ color: '#FF6337' }} />
                    </Box> :
                    medicines.error ?
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                This is an error alert — <strong>check it out!</strong>
                            </Alert>
                        </Stack> :
                        <>
                            <center>
                                <h1>Medicine</h1>

                                <MedicineForm onGetdata={handleSubmitData} onUpdate={update} />

                                <div style={{ height: 400, width: '60%' }}>
                                    <DataGrid
                                        rows={medicines.medicine}
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
                        </>
            }
        </div>
    );
}