import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function Auth(props) {

    const [authType, setAuthType] = useState('login');
    const navigate = useNavigate()

    let SchemaObj = {}, intial = {}

    if (authType === 'login') {
        SchemaObj = {
            email: Yup.string().email('Please enter your valid email').required('Please enter your email'),
            password: Yup.string().required('Please enter your Password').min(8, "Must Contain 8 Characters")
        }
        intial = {
            email: '',
            password: ''
        }
    } else if (authType === 'signup') {
        SchemaObj = {
            name: Yup.string().required('Please enter your name'),
            email: Yup.string().email('Please enter your valid email').required('Please enter your email'),
            password: Yup.string().required('Please enter your Password').min(8, "Must Contain 8 Characters")
        }
        intial = {
            name: '',
            email: '',
            password: ''
        }
    } else {
        SchemaObj = {
            email: Yup.string().email('Please enter your valid email').required('Please enter your email')
        }
        intial = {
            email: '',
        }
    }

    let userSchema = Yup.object(SchemaObj)

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: intial,
        validationSchema: userSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            if (authType === "login") {
                handleLogin()
            }
            action.resetForm()
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleLogin = () => {
        let data = localStorage.setItem("Loginredirecting", "true")
        navigate("/")
    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            authType === 'login' ? <h2>Login</h2> :
                                authType === 'signup' ? <h2>Signup</h2> : <h2>Forgot Password?</h2>
                        }
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <form method="post" role="form" onSubmit={handleSubmit} className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                authType === 'signup' ?
                                    <div className="col-md-7 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                        <div className="validate" />
                                        <p className='form-error'>{errors.name && touched.name ? errors.name : null}</p>
                                    </div> : null
                            }
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid Password" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                <div className="validate" />
                                <p className='form-error'>{errors.email && touched.email ? errors.email : null}</p>
                            </div>
                            {
                                authType === 'forgot' ? null :
                                    <div className="col-md-7 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                        <div className="validate" />
                                        <p className='form-error'>{errors.password && touched.password ? errors.password : null}</p>
                                    </div>
                            }

                            {/* <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid Password" />
                                <div className="validate" />
                            </div>
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div> */}
                        </div>
                        <br />
                        <div className="text-center mb-2">
                            {
                                authType === 'login' ? <span>You have already account ?<a href="#" onClick={() => setAuthType('signup')}> Sign up</a></span> :
                                    <span>Create a new account ?<a href="#" onClick={() => setAuthType('login')}> Login</a> </span>
                            }
                        </div>
                        <div className="text-center mb-2">
                            {
                                authType === 'login' ? <span><a href="#" onClick={() => setAuthType('forgot')}>Forget Password?</a> </span> :
                                    null
                            }
                        </div>
                        <div className="text-center">
                            {
                                authType === 'login' ? <button type="submit" onClick={handleLogin}>Login</button> :
                                    authType === 'forgot' ? <button type="submit">Conform</button> : <button type="submit">Signup</button>
                            }
                        </div>
                        <br />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Auth;