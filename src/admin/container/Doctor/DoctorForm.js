import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

function DoctorForm({ onGetdata, onUpdate }) {

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (onUpdate) {
            formik.setValues(onUpdate);
            handleClickOpen();
        }
    }, [onUpdate])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1))

    let medicineschema = yup.object({
        name: yup.string().required("Please entre a Name"),
        price: yup.number().required("Please entre a Price"),
    });

    const formik = useFormik({
        validationSchema: medicineschema,

        initialValues: {
            name: '',
            price: ''
        },
        onSubmit: (values, action) => {
            action.resetForm()
            onGetdata(values)
            handleClose();
            // handleSubmitData(values)
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <>
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
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit' >submit</Button>
                            </DialogActions>
                        </form>
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default DoctorForm;