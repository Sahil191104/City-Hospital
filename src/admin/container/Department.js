import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, AlertTitle, Box, CircularProgress, Stack, TextField } from '@mui/material';
import DepartmentForm from './Department/DepartmentForm';
// import { adddata, deletedepartment, fetchdata, updatedepartment } from '../../redux/action/department.action';
import { addDepartment, deleteDepartment, fetchDepartment, updateDepartment } from '../../redux/slice/departmentSlice';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';

export default function Department() {
    console.log("cdsvc");
    const dispatch = useDispatch();
    const departmentsdata = useSelector(state => state.department);

    console.log(departmentsdata);
    const [open, setOpen] = useState(false);
    const [update, setUpadate] = useState(false);

    useEffect(() => {
        console.log("oooijoij");
        dispatch(fetchDepartment())
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1))
// 
    let medicineschema = yup.object({
        name: yup.string().required("Please entre a Name"),
        desc: yup.string().required("Please entre a Description")
            .test('desc', 'maxmium 3 word allowed.',
                function (val) {
                    let arr = val.split(" ")

                    if (arr.length > 100) {
                        return false
                    } else {
                        return true
                    }
                }),
        file: yup.mixed().required("Please Upload to File")
    });

    const formik = useFormik({
        validationSchema: medicineschema,

        initialValues: {
            name: '',
            desc: '',
            file: ''
        },
        onSubmit: (values, action) => {
            if (update) {
                dispatch(updateDepartment(values))
            } else {
                dispatch(addDepartment(values))
            }
            action.resetForm()
            setUpadate(false)
            // onGetdata(values)
            handleClose();
            // handleSubmitData(values)
        },
    });

    const handleUpdate = (data) => {
        console.log(data);
        setOpen(true);
        setUpadate(true)
        setValues(data)
    }

    const handleDelete = (data) => {
        dispatch(deleteDepartment(data))
    }

    const columns = [
        { field: 'name', headerName: 'Name', flex: 0.3, minWidth: 100 },
        { field: 'desc', headerName: 'Description', flex: 1, minWidth: 100 },
        {
            field: 'file', headerName: 'Image', width: 200, height: 80,
            renderCell: (params) => {
                console.log(params.row);
                return (
                    <div>
                        <img src={params.row.file} alt='' class="img-thumbnail" />
                    </div>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            flex: 0.3,
            minWidth: 10,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleUpdate(params.row)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        }
    ]

    const { values, errors, touched, handleBlur, handleChange, setValues, handleSubmit, setFieldValue } = formik;

    return (
        <div>
            {
                // departmentsdata.loading ?
                //     <Box className="d-flex justify-content-center" >
                //         <CircularProgress sx={{ color: '#FF6337', margin: "300px auto" }} />
                //     </Box> :
                //     departmentsdata.error ?
                //         <Stack sx={{ width: '100%' }} spacing={2}>
                //             <Alert severity="error">
                //                 <AlertTitle>Error</AlertTitle>
                //                 This is an error alert — <strong>check it out!</strong>
                //             </Alert>
                //         </Stack> :
                <>
                    <center>
                        <Button variant="outlined" onClick={handleClickOpen} sx={{ marginBottom: "20px" }}>
                            Add Doctor
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
                                            id="desc"
                                            label="desc"
                                            name='desc'
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                            value={values.desc}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>

                                        <TextField
                                            margin="dense"
                                            label="file"
                                            name='file'
                                            type="file"
                                            fullWidth
                                            variant="standard"
                                            onChange={(e) => setFieldValue('file', e.target.files[0])}
                                        />
                                        <img
                                            src={typeof values.file === 'string' ? values.file : URL.createObjectURL(values.file)}
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <span style={{ color: 'red' }}>{errors.file && touched.file ? errors.file : null} </span>

                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type='submit' >submit</Button>
                                        </DialogActions>
                                    </form>
                                </Formik>
                            </DialogContent>
                        </Dialog>

                        <h1>Department</h1>
                    </center>


                    <div style={{ height: '100%', width: '100%' }}>
                        <DataGrid
                            getRowHeight={() => 'auto'}
                            rows={departmentsdata.department}
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
                </>
            }
        </div>
    );
}