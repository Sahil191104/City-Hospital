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
import Doctor from '../user/container/Doctor';
import Auth from '../user/container/Auth';
import Footer from '../user/components/Footer';
import Medicine from '../user/container/Medicine/Medicine';
import Cart from '../user/container/Cart/Cart';
import MedicinDetails from '../user/container/MedicinDetails';
import Department from '../user/container/Department/Department';
import { ThemeContext } from '../user/container/Context/ThemeContext';
import Counter from '../user/container/Counter';
import Other from '../user/container/Other';
import ListData from '../user/container/ListData';
import UseRefExample from '../user/container/UseRefExample';

function UserRoute(props) {
    let theme = useContext(ThemeContext);
    console.log(theme.theme);

    const [cartCount, setCartCount] = useState(0);

    return (
        <div className={`${theme.theme}`}>

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
                    <Route path='/doctor/:id' element={<Doctor />} />
                    <Route path='/medicindetails' element={<MedicinDetails />} />

                    <Route path='/doctor/'>
                        <Route path=':id' element={<Doctor />} />
                    </Route>
                    <Route path='*' element={<Error />} />
                    <Route path='/Auth' element={<Auth />} />
                    <Route path='/Cart' element={<Cart />} />
                    {/* <Route path='/Auth' element={<Auth />} /> */}


                    {/* Example Nakami */}
                    <Route path='/Counter' element={<Counter />} />
                    <Route path='/Other' element={<Other />} />
                    <Route path='/List' element={<ListData />} />
                    <Route path='/UseRefExample' element={<UseRefExample />} />
                </Routes>

                <Footer />
        </div>
    );
}

export default UserRoute;