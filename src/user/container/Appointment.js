import React, { useEffect, useState } from 'react';
import CustButton from './UI/Button/CustButton';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment, deleteAppointment, getAppointment, updateAppointment } from '../../redux/slice/appointmentSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { storage } from '../../firebase';

function Appointment(props) {
    const [update, setUpdate] = useState(false)
    const [value, setValue] = useState(0);
    const dispatch = useDispatch()
    const apt = useSelector(state => state.apt)

    useEffect(() => {
        dispatch(getAppointment())
    }, [])

    const handleChanges = (event, newValue) => {
        setValue(newValue);
    };

    const [image, setImage] = useState('');

    const upload = () => {
        if (image == null)
            return;
        storage.ref(`/images/${image.name}`).put(image)
            .on("state_changed", alert("success"), alert);
            console.log(image);
    }

    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1))

    let appointment = yup.object({
        name: yup.string().required("Please entre a Name"),
        email: yup.string().email('Please enter your valid email').required('Please enter your email'),
        phone: yup.string().min(10, 'Must Contain 8 Characters').required('Please enter your Phone'),
        expiry: yup.date().min(nd, "Please entre a valid Date").required("Please entre a Date"),
        select: yup.string().required("Please select your Department"),
        desc: yup.string().required("Please entre a Description")
            .test('desc', 'maxmium 3 word allowed.',
                function (val) {
                    let arr = val.split(" ")

                    if (arr.length > 100) {
                        return false
                    } else {
                        return true
                    }
                })
    });

    const formik = useFormik({
        validationSchema: appointment,

        initialValues: {
            name: '',
            email: '',
            phone: '',
            expiry: '',
            select: '',
            desc: ''
        },
        onSubmit: (values, action) => {
            console.log(values);
            setValue(1)
            if (update) {
                dispatch(updateAppointment(values))
            } else {
                dispatch(addAppointment(values))
            }
            action.resetForm()
            setUpdate(false)
            // onGetdata(values)
            // handleClose();
            // handleSubmitData(values)
        },
    });

    const handleUpdate = (data) => {
        console.log(data);
        setValue(0)
        setUpdate(true);
        setValues(data)
    }

    const handleDelete = (id) => {
        dispatch(deleteAppointment(id))
    }

    const columns = [
        { field: 'id', headerName: 'Id', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'expiry', headerName: 'Date', width: 130 },
        { field: 'select', headerName: 'Department', width: 130 },
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
    ]

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    <div className='justify-content-center'>
                        <Tabs className='m-0' value={value} onChange={handleChanges} aria-label="icon label tabs example">
                            <Tab icon={<PhoneIcon />} label="Book Appointment" />
                            <Tab icon={<FavoriteIcon />} label="List Appointment" />
                        </Tabs>
                    </div>
                </div>
                {
                    value === 0 &&
                    <div>
                        <div className="section-title">
                            <h2>Book Appointment</h2>
                        </div>
                        <form action method="post" value="1" role="form" onSubmit={handleSubmit} className="php-email-form" >
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null} </span>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <span style={{ color: 'red' }}>{errors.phone && touched.phone ? errors.phone : null} </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="date" name="expiry" value={values.expiry} onChange={handleChange} onBlur={handleBlur} className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <span style={{ color: 'red' }}>{errors.expiry && touched.expiry ? errors.expiry : null} </span>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="select" id="select" value={values.select} onChange={handleChange} onBlur={handleBlur} required="required" className="form-select">
                                        <option value="">Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    <span style={{ color: 'red' }}>{errors.select && touched.select ? errors.select : null} </span>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <input type="file" name="file" className="form-control datepicker" onChange={(e) => { setImage(e.target.files[0]) }} id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="desc" value={values.desc} onChange={handleChange} onBlur={handleBlur} rows={5} placeholder="Message (Optional)" defaultValue={""} />
                                <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>
                            </div>
                            <div className="text-center"><CustButton onClick={upload} type="submit">Make an Appointment</CustButton></div>
                        </form>
                    </div>
                }
                {
                    value === 1 &&
                    <div>
                        <div className="section-title">
                            <h2>List Appointment</h2>
                        </div>
                        <div className='row'>

                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={apt.apt}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 7 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section >
    );
}

export default Appointment;