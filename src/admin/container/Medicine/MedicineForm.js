import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

function MedicineForm(props) {
    
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        validationSchema: medicineschema,

        initialValues: {
            name: '',
            date: '',
            price: '',
            desc: ''
        },
        onSubmit: (values, action) => {
            action.resetForm()
            handleClose();
            // handleSubmitData(values)
        },

    });

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

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;


    return (
        <>
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
        </>
    );
}

export default MedicineForm;