import React from 'react';
import Header from '../user/components/Header';
import { Route, Routes } from 'react-router';
import Home from '../user/container/Home';
import About from '../user/container/About';
import Appointment from '../user/container/Appointment';
import Contact from '../user/container/Contact';
import Department from '../user/container/Department';
import FormValidation from '../user/container/FormValidation';
import Doctors from '../user/container/Doctors';
import Error from '../user/components/Error';
import Slidenav from '../user/container/Slidenav';
import Doctor from '../user/container/Doctor';
import VisitingDoctor from '../user/container/VisitingDoctor';
import Auth from '../user/container/Auth';
import Footer from '../user/components/Footer';
// import Medicine from '../user/container/Medicine/Medicine';
import PrivateRoute from '../routes/PrivateRoute';
import CounterRedux from '../user/container/CounterRedux';
import Cart from '../user/container/Cart/Cart';
import Medicine1 from '../user/container/Medicine/Medicine1';

function UserRoute(props) {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/appointment' element={<Appointment />} />
                <Route path='/contact' element={<Contact />} />

                <Route element={<PrivateRoute />}>
                    <Route exact path='medicine' element={<Medicine1 />} />
                    {/* <Route exact path='medicine' element={<Medicine />} /> */}
                </Route>

                {/* <Route path='/contact' element={<Contact1 />} /> */}
                <Route path='/department' element={<Department />} />
                <Route path='/form' element={<FormValidation />} />
                <Route path='/doctors' element={<Doctors />} />
                <Route path='/slidenav' element={<Slidenav />} />
                <Route path='/doctor/:id' element={<Doctor />} />
                <Route path='/doctor/visiting_doctor' element={<VisitingDoctor />} />

                <Route path='/doctor/'>
                    <Route path=':id' element={<Doctor />} />
                    <Route path='visiting_doctor' element={<VisitingDoctor />} />
                </Route>
                <Route path='/counter' element={<CounterRedux />} />
                <Route path='*' element={<Error />} />
                <Route path='/Auth' element={<Auth />} />
                <Route path='/Cart' element={<Cart />} />
                {/* <Route path='/Auth' element={<Auth />} /> */}
            </Routes>

            <Footer />
        </>
    );
}

export default UserRoute;