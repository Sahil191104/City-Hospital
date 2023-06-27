import logo from './logo.svg';
import './App.css';
import Header from './user/components/Header';
import Footer from './user/components/Footer';
import Home from './user/container/Home';
import About from './user/container/About';
import Appointment from './user/container/Appointment';
// import Contact from './user/container/Contact';
import Contact from './admin/container/Contact';
import Contact1 from './user/container/Contact1';
import Slidenav from './user/container/Slidenav';
import Department from './user/container/Department';
import Doctors from './user/container/Doctors';

import { Route, Routes } from 'react-router-dom';
// import Doctor from './user/container/Doctor';
import Doctor from './admin/container/Doctor';
import Medicine from './admin/container/Medicine';
import VisitingDoctor from './user/container/VisitingDoctor';
import Error from './user/components/Error';
import Auth from './user/container/Auth';
import FormValidation from './user/container/FormValidation';
import Layout from './admin/container/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/Doctor' element={<Doctor />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Medicine' element={<Medicine />} />
        </Routes>
      </Layout>
      {/* <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact' element={<Contact1 />} />
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

        <Route path='*' element={<Error />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Auth' element={<Auth />} />
      </Routes>
      <Footer /> */}
    </>
  );
}

export default App;
