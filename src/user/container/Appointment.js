import React from 'react';
import CustButton from './UI/Button/CustButton';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

function Appointment(props) {

    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1))

    let appointment = yup.object({
        name: yup.string().required("Please entre a Name"),
        email: yup.string().email('Please enter your valid email').required('Please enter your email'),
        phone: yup.string().min(10, 'Must Contain 8 Characters').required('Please enter your Phone'),
        expiry: yup.date().min(nd, "Please entre a valid Date").required("Please entre a Date"),
        // select: yup.string().required("Please entre a Description"),
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
            // select: '',
            desc: ''
        },
        onSubmit: (values, action) => {
            action.resetForm()
            console.log(values);
            // onGetdata(values)
            // handleClose();
            // handleSubmitData(values)
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <form action method="post" role="form" onSubmit={handleSubmit} className="php-email-form" >
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
                            <select name="department" id="select" required="required" className="form-select">
                                <option value="">Select Department</option>
                                <option value="Department 1">Department 1</option>
                                <option value="Department 2">Department 2</option>
                                <option value="Department 3">Department 3</option>
                            </select>
                            {/* <span style={{ color: 'red' }}>{errors.select && touched.select ? errors.select : null} </span> */}
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="desc" value={values.desc} onChange={handleChange} onBlur={handleBlur} rows={5} placeholder="Message (Optional)" defaultValue={""} />
                        <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>
                    </div>
                    {/* <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div> */}
                    <div className="text-center"><CustButton type="submit">Make an Appointment</CustButton></div>
                </form>
            </div>
        </section>
    );
}

export default Appointment;