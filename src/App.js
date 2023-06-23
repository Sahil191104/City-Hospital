import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './container/Home';
import About from './container/About';
import Appointment from './container/Appointment';
import Contact from './container/Contact';
import Contact1 from './container/Contact1';
import Department from './container/Department';
import Doctors from './container/Doctors';

import { Route, Routes } from 'react-router-dom';
import Doctor from './container/Doctor';
import VisitingDoctor from './container/VisitingDoctor';
import Error from './components/Error';
import Auth from './container/Auth';
import Auth2 from './container/Auth2';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/contact' element={<Contact1 />} />
        <Route path='/department' element={<Department />} />
        <Route path='/doctors' element={<Doctors />} />
        {/* <Route path='/doctor/:id' element={<Doctor />} />
        <Route path='/doctor/visiting_doctor' element={<VisitingDoctor />} /> */}

        <Route path='/doctor/'>
          <Route path=':id' element={<Doctor />} />
          <Route path='visiting_doctor' element={<VisitingDoctor />} />
        </Route>

        <Route path='*' element={<Error />} />
        {/* <Route path='/Auth' element={<Auth />} /> */}
        <Route path='/Auth' element={<Auth2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
