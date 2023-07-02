import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [items, setItems] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (data) => {
        console.log(data);

        let rno = Math.floor(Math.random() * 1000);

        let newData = { id: rno, ...data };

        let localdata = JSON.parse(localStorage.getItem("medicines"));

        console.log(localdata);

        if (localdata === null) {
            localStorage.setItem("medicines", JSON.stringify([newData]))
            setItems([newData])
        } else {
            localdata.push(newData)
            localStorage.setItem("medicines", JSON.stringify(localdata))
            setItems(localdata)
        }

        handleClose();
    };

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        if (localData !== null) {
            setItems(localData)
        }

    }, []);

    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1))

    let medicineschema = yup.object({
        name: yup.string().required("Please entre a Name"),
        date: yup.date().min(nd, "Please entre a valid Date").required("Please entre a Date"),
        price: yup.number().required("Please entre a Price"),
        desc: yup.string().required("Please entre a Description")
            .test('desc', 'maxmium 3 word allowed.',
                function (val) {
                    let arr = val.split(" ")

                    if (arr.length > 3) {
                        return false
                    } else {
                        return true
                    }
                })
    });

    const formik = useFormik({
        validationSchema: medicineschema,

        initialValues: {
            name: '',
            date: '',
            price: '',
            desc: ''
        },
        onSubmit: (values, action) => {
            handleAdd(values)
            action.resetForm()
        },

    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fdata = localData.filter((v, i) => v.id !== id)

        localStorage.setItem("medicines", JSON.stringify(fdata))

        setItems(fdata)
    }

    const handleEdit = (data) => {
        setOpen(true);

        formik.setValues(data);
        console.log(data);
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
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            ),
        }
    ];

    return (
        <>
            <center>
                <Button variant="outlined" onClick={handleClickOpen} sx={{ marginBottom: "20px" }}>
                    Add Medicine
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                        <Formik value={values} >
                            <form onSubmit={handleSubmit}>
                                <TextField

                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    name='name'
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
                                <TextField

                                    margin="dense"
                                    id="date"
                                    name='date'
                                    type="date"
                                    fullWidth
                                    variant="standard"
                                    value={values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null} </span>
                                <TextField

                                    margin="dense"
                                    id="price"
                                    label="Price"
                                    name='price'
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color: 'red' }}>{errors.price && touched.price ? errors.price : null} </span>
                                <TextField

                                    margin="dense"
                                    id="desc"
                                    label="Description"
                                    name='desc'
                                    multiline
                                    rows={4}
                                    type="address"
                                    fullWidth
                                    variant="standard"
                                    value={values.desc}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>

                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit' >submit</Button>
                                </DialogActions>
                            </form>
                        </Formik>
                    </DialogContent>
                </Dialog>

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