import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

function DepartmentForm({ onGetdata, onUpdate }) {

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

        image: yup.string().required("Please entre a Image")
    });

    const formik = useFormik({
        validationSchema: medicineschema,

        initialValues: {
            name: '',
            desc: '',
            image: ''
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
                Add Department
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
                                id="image"
                                label="image"
                                name='image'
                                type="file"
                                fullWidth
                                variant="standard"
                                value={values.image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span style={{ color: 'red' }}>{errors.image && touched.image ? errors.image : null} </span>
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

export default DepartmentForm;