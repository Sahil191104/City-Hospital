import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import CustButton from '../container/UI/Button/CustButton';
import Input from './UI/Input/Input';
import Htag from './UI/H1toH6/Htag';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

function Auth(props) {
    const [authType, setAuthType] = useState('login');
    const [data, setData] = useState([])
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

    const handleLogin = (values) => {
        let data = localStorage.setItem("Loginredirecting", "true")
        navigate("/")

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                if (user.emailVerified) {
                    console.log("Email Login Successfully");
                } else {
                    console.log("Please Enter the valid Email");
                }
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const handleRegister = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            // Email verification sent!
                            // ...
                            console.log("Email Verification in Successfully");
                        });
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    }
    const handleForget = () => {
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                console.log("Password reset link sent to your email id.");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: intial,
        validationSchema: userSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            if (authType === "login") {
                handleLogin(values)
            } else if (authType === 'signup') {
                handleRegister(values)
            } else if (authType === 'forgot') {
                handleForget(values)
            }
            action.resetForm()
            alert(JSON.stringify(values, null, 2));
        },
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlesend = () => {

    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            authType === 'login' ? <Htag name="h2tag1">Login</Htag> :
                                authType === 'signup' ? <Htag name="h2tag1">Signup</Htag> : <Htag name="h2tag1">Forgot Password?</Htag>
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
                                        <Input type="text" name="name" id="name" placeholder="Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={values.name} onChange={handleChange} onBlur={handleBlur}
                                            errorText={errors.name && touched.name ? errors.name : null}
                                        />
                                        <div className="validate" />
                                    </div> : null
                            }
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <Input type="email" name="email" id="email" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur}
                                    errorText={errors.email && touched.email ? errors.email : null}
                                />
                                <div className="validate" />
                            </div>
                            {
                                authType === 'forgot' ? null :
                                    <div className="col-md-7 form-group mt-3 mt-md-0">
                                        <Input type="password" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={values.password} onChange={handleChange} onBlur={handleBlur}
                                            errorText={errors.password && touched.password ? errors.password : null}
                                        />
                                        <div className="validate" />
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
                                authType === 'login' ? <CustButton type="primary" onClick={handleLogin}>Login</CustButton> :
                                    authType === 'forgot' ?
                                        <>
                                            <CustButton class='btncolor'>Conform</CustButton>
                                            {/* <Dialog open={open}>
                                                <DialogTitle>Choose a new password</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        Create a new password that is at least 6 characters long. A strong password has a combination of letters, digits and punctuation marks.
                                                    </DialogContentText>
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="password"
                                                        label="password"
                                                        type="password"
                                                        fullWidth
                                                        variant="standard"
                                                    />
                                                </DialogContent>
                                                <DialogActions>
                                                    <CustButton onClick={handleClose}>Cancel</CustButton>
                                                    <CustButton onClick={handleClose}>Continue</CustButton>
                                                </DialogActions>
                                            </Dialog> */}
                                        </> :
                                        <CustButton type="outlined">Signup</CustButton>
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