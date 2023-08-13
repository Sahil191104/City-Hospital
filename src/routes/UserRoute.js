import React, { useState, useContext } from 'react';
import Header from '../user/components/Header';
import { Route, Routes } from 'react-router';
import Home from '../user/container/Home';
import About from '../user/container/About';
import Appointment from '../user/container/Appointment';
import Contact from '../user/container/Contact';
import FormValidation from '../user/container/FormValidation';
import Doctors from '../user/container/Doctors';
import Error from '../user/components/Error';
import Slidenav from '../user/container/Slidenav';
import Doctor from '../user/container/Doctor';
import VisitingDoctor from '../user/container/VisitingDoctor';
import Auth from '../user/container/Auth';
import Footer from '../user/components/Footer';
import Medicine from '../user/container/Medicine/Medicine';
import PrivateRoute from '../routes/PrivateRoute';
import CounterRedux from '../user/container/CounterRedux';
import Cart from '../user/container/Cart/Cart';
import Medicine1 from '../user/container/Medicine/Medicine1';
import Cart1 from '../user/container/Cart/Cart1';
import MedicinDetails from '../user/container/MedicinDetails';
import Department from '../user/container/Department/Department';
import Counter from '../user/container/Context/Counter';
import { CounterProvider } from '../user/container/Context/counterContext'
import { ThemeContext } from '../user/container/Context/ThemeContext';

function UserRoute(props) {
    let theme = useContext(ThemeContext);
    console.log(theme.theme);

    const [cartCount, setCartCount] = useState(0);

    return (
        <div className={`${theme.theme}`}>

            <CounterProvider>
                <Header count={cartCount} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/appointment' element={<Appointment />} />
                    <Route path='/contact' element={<Contact />} />

                    {/* <Route element={<PrivateRoute />}> */}
                    {/* <Route exact path='medicine' element={<Medicine1 />} onUpdate={setCartCount} /> */}
                    <Route exact path='medicine' element={<Medicine />} />
                    <Route exact path='department' element={<Department />} />
                    {/* </Route> */}

                    {/* <Route path='/contact' element={<Contact1 />} /> */}
                    <Route path='/form' element={<FormValidation />} />
                    <Route path='/doctors' element={<Doctors />} />
                    <Route path='/slidenav' element={<Slidenav />} />
                    <Route path='/doctor/:id' element={<Doctor />} />
                    <Route path='/medicindetails' element={<MedicinDetails />} />
                    <Route path='/doctor/visiting_doctor' element={<VisitingDoctor />} />

                    <Route path='/doctor/'>
                        <Route path=':id' element={<Doctor />} />
                        <Route path='visiting_doctor' element={<VisitingDoctor />} />
                    </Route>
                    <Route path='/counter' element={<CounterRedux />} />
                    <Route path='*' element={<Error />} />
                    <Route path='/Auth' element={<Auth />} />
                    {/* <Route path='/Cart' element={<Cart />} /> */}
                    <Route path='/Context' element={<Counter />} />
                    <Route path='/Cart' element={<Cart1 />} />
                    {/* <Route path='/Auth' element={<Auth />} /> */}
                </Routes>

                <Footer />
            </CounterProvider>
        </div>
    );
}

export default UserRoute;