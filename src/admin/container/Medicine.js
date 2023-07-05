import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MedicineForm from './Medicine/MedicineForm';

export default function FormDialog() {
    const [items, setItems] = React.useState([]);
    const [update, setUpadate] = React.useState(null);

    const handleSubmitData = (data) => {
        console.log(data);

        let rno = Math.floor(Math.random() * 1000);

        let newData = { id: rno, ...data };

        let localdata = JSON.parse(localStorage.getItem("medicines"));

        console.log(localdata);

        if (localdata === null) {
            localStorage.setItem("medicines", JSON.stringify([newData]))
            setItems([newData])
        } else {
            if (update) {
                let Udata = localdata.map((v) => {
                    if (v.id === data.id) {
                        return data;
                    } else {
                        return v;
                    }
                })
                localStorage.setItem("medicines", JSON.stringify(Udata))
                setItems(Udata)
            } else {
                localdata.push(newData)
                localStorage.setItem("medicines", JSON.stringify(localdata))
                setItems(localdata)
            }
        }

        setUpadate(null)
    };

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fdata = localData.filter((v, i) => v.id !== id)

        localStorage.setItem("medicines", JSON.stringify(fdata))

        setItems(fdata)
    }

    useEffect (() => {
        let localdata = JSON.parse(localStorage.getItem("medicines"));

        if (localdata !== null) {
            setItems(localdata)
        }

    }, []);

    const handleUpdate = (va) => {
        // formik.setValues(va);
        // handleClickOpen();
        setUpadate(va)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'date', headerName: 'ExpiryDate', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'desc', headerName: 'Description', width: 130 },
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
    ];

    return (
        <>
            <center>
                <MedicineForm onGetdata={handleSubmitData} onUpdate={update} />

                <div style={{ height: 400, width: '60%' }}>
                    <DataGrid
                        rows={items}
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
    );
}