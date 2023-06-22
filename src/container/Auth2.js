import React, { useState } from 'react';

function Auth2(props) {

    const [authType, setAuthType] = useState('login');
    const [forgotPassword, setForgotPassword] = useState(false);

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            // authType === 'login' ? <h2>Login</h2> :
                            //     authType === 'signup' ? <h2>Signup</h2> : <h2>Forgot Password?</h2>
                            forgotPassword ? <h2>Forgot Password?</h2> :
                                authType === 'login' ? <h2>Login</h2> : <h2>Signup</h2>
                        }
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <form action method="post" role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                authType === 'signup' ?
                                    <div className="col-md-7 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div> : null
                            }
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid Password" />
                                <div className="validate" />
                            </div>
                            {
                                authType === 'forgot' ? null :
                                    <div className="col-md-7 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
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
                                authType === 'login' ? <span>You have already account ?<a href="#" onClick={() => {setAuthType('signup'); setForgotPassword(true)}}> Sign up</a></span> :
                                    <span>Create a new account ?<a href="#" onClick={() => {setAuthType('login'); setForgotPassword(true)}}> Login</a> </span>
                            }
                        </div>
                        <div className="text-center mb-2">
                            {
                                authType === 'login' ? <span><a href="#" onClick={() => {setAuthType('forgot'); setForgotPassword(true)}}>Forget Password?</a> </span> :
                                    null
                            }
                        </div>
                        <div className="text-center">
                            {
                                authType === 'login' ? <button type="submit">Login</button> :
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

export default Auth2;