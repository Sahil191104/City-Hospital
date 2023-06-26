import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function FormValidation(props) {

    let userSchema = Yup.object({
        name: Yup.string().required('Please enter your name').min(2).test('name', 'atlist maximum 3 words to name', function (value) {
            let ans = value.split(" ");

            if (ans.length > 3) {
                return false
            } else {
                return true
            }
        }),
        email: Yup.string().email('Please enter your valid email').required('Please enter your email'),
        password: Yup.string().required('Please enter your Password').min(8, "Must Contain 8 Characters")
            .matches(
                /^(?=.*[a-z])/,
                " Must Contain One Lowercase Character"
            )
            .matches(
                /^(?=.*[A-Z])/,
                "  Must Contain One Uppercase Character"
            )
            .matches(
                /^(?=.*[0-9])/,
                "  Must Contain One Number Character"
            )
            .matches(
                /^(?=.*[!@#\$%\^&\*])/,
                "  Must Contain  One Special Case Character"
            ),
        conformpassword: Yup.string().required('Please enter your Password')
            .min(8, "Must Contain 8 Characters").
            oneOf([Yup.ref("password"), null], "Passwords must match"),
        mobilenumber: Yup.string().min(10, "Must Contain 10 Characters")
            .max(10, "Maximum Contain 10 Characters")
            .required('Please enter your Mobile Number'),
        age: Yup.string()
            .min(0)
            .max(150)
            .required('Please enter your Age'),
        gender: Yup.string().min(10, "Must Contain 10 Characters").required('Please enter your Gender'),
        country: Yup.string().min(10, "Must Contain 10 Characters").required('Please enter your Country'),
        hobby: Yup.string().min(10, "Must Contain 10 Characters").required('Please enter your Hobby'),
        address: Yup.string().required('Please enter your message')
            .min(2)
            .test('address', 'atlist maximum 100 words message', function (value) {
                let ans1 = value.split(" ");

                if (ans1.length > 100) {
                    return false
                } else {
                    return true
                }
            }),
        dob: Yup.string()
            .max(new Date(), "Please Enter in DOB")
            .required(),
        check: Yup.string().required('Please enter your Check'),
    });

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            conformpassword: '',
            mobilenumber: '',
            age: '',
            gender: '',
            country: '',
            hobby: '',
            address: '',
            dob: '',
            check: '',
        },
        validationSchema: userSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="main" style={{ margin: "0 auto", marginTop: "30px", marginBottom: "30px" }}>
            <div className="container" style={{ width: "400px" }}>
                <form name="form" method="post" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" c name='name' id="exampleInputEmail1" aria-describedby="emailHelp" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                        <p className='form-error'>{errors.name && touched.name ? errors.name : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="text" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        <p className='form-error'>{errors.email && touched.email ? errors.email : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                        <input type="text" className="form-control" name='password' id="exampleInputEmail1" aria-describedby="emailHelp" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        <p className='form-error'>{errors.password && touched.password ? errors.password : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Conform Password</label>
                        <input type="text" className="form-control" name='conformpassword' id="exampleInputEmail1" aria-describedby="emailHelp" value={values.conformpassword} onChange={handleChange} onBlur={handleBlur} />
                        <p className='form-error'>{errors.conformpassword && touched.conformpassword ? errors.conformpassword : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Mobile number</label>
                        <input type="number" className="form-control" name='mobilenumber' id="exampleInputEmail1" aria-describedby="emailHelp" value={values.mobilenumber} onChange={handleChange} onBlur={handleBlur} />
                        <p className='form-error'>{errors.mobilenumber && touched.mobilenumber ? errors.mobilenumber : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                        <input type="number" className="form-control" name='age' id="exampleInputEmail1" aria-describedby="emailHelp" value={values.age} onChange={handleChange} onBlur={handleBlur} />
                        <p className='form-error'>{errors.age && touched.age ? errors.age : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
                        <div className="form-inline">
                            <p><input type="radio" name="gender" /> Male</p>
                            <p><input type="radio" name="gender" /> Female</p>
                        </div>
                        <p className='form-error'>{errors.gender && touched.gender ? errors.gender : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                        <select name="country">
                            <option value={0}>Select</option>
                            <option value="au">Australia</option>
                            <option value="in">India</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                        </select>

                        <p className='form-error'>{errors.country && touched.country ? errors.country : null}</p>
                    </div>
                    <div className="mb-3">
                        <p>Hobby</p>
                        <div>
                            <label><input type="checkbox" name="hobby" defaultValue="Music" placeholder=" " /> Music</label><br />
                            <label><input type="checkbox" name="hobby" defaultValue="Criket" placeholder=" " /> Cricket</label><br />
                            <label><input type="checkbox" name="hobby" defaultValue="Sleeping" placeholder=" " />
                                Sleeping</label><br />
                        </div>
                        <p className='form-error'>{errors.hobby && touched.hobby ? errors.hobby : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" name='address' id="inputAddress" placeholder="1234 Main St" value={values.address} onChange={handleChange} onBlur={handleBlur} />
                        <p className='form-error'>{errors.address && touched.address ? errors.address : null}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">DOB</label>
                        <input type="date" className="form-control" name='dob' id="exampleInputPassword1" value={values.dob} onChange={handleChange} onBlur={handleBlur} />
                        <p className='form-error'>{errors.dob && touched.dob ? errors.dob : null}</p>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" name="check" id="exampleCheck1" value={values.check} onChange={handleChange} onBlur={handleBlur} />
                        <label className="form-check-label" htmlFor="exampleCheck1">Terms &amp; Condition</label>
                        <p className='form-error'>{errors.check && touched.check ? errors.check : null}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default FormValidation;