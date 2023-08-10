import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const signupAPI = (values) => {
    console.log(values);
    try {
        return new Promise((resolve, rejecte) => {
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
                                resolve({ message: "Email Verification in Successfully", user: user });
                            });
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;

                    if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                        rejecte({message :"Please check your internet Conection."});
                    } else if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                        rejecte({message :"Email id is already used."});
                    } else if (errorCode.localeCompare("auth/wrong-password") === 0) {
                        rejecte({message :"Wrong Password! Please check your Password."});
                    }

                    // rejecte(errorCode, errorMessage);
                });
        })
    } catch (error) {
        console.log(error);
    }
}

export const loginAPI = (values) => {
    console.log(values);
    try {
        return new Promise((resolve, rejecte) => {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    if (user.emailVerified) {
                        resolve({ message: "Email Login Successfully" });
                        // localStorage.setItem("Loginredirecting", "true")
                        // navigate("/")
                    } else {
                        resolve({ message: "Please Enter the valid Email" });
                    }
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;

                    if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                        rejecte({message :"Please check your internet Conection."});
                    } else if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                        rejecte({message :"Email id is already used."});
                    } else if (errorCode.localeCompare("auth/wrong-password") === 0) {
                        rejecte({message :"Wrong Password! Please check your Password."});
                    }

                    // console.log(errorCode, errorMessage);
                });
        })
    } catch (error) {
        console.log(error);
    }
}

export const forgotAPI = (values) => {
    console.log(values);
    try {
        return new Promise((resolve, rejecte) => {
            sendPasswordResetEmail(auth, values.email)
                .then(() => {
                    resolve({message :"Password reset email sent!."});
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;

                    if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                        rejecte({message :"Please check your internet Conection."});
                    }

                    // console.log(errorCode, errorMessage);
                });
        })
    } catch (error) {
        console.log(error);
    }
}