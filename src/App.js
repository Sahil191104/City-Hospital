import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './container/Home';
import About from './container/About';
import Appointment from './container/Appointment';
import Contact from './container/Contact';
import Department from './container/Department';
import Doctors from './container/Doctors';

import { Route, Routes } from 'react-router-dom';
import Doctor from './container/Doctor';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/department' element={<Department />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctor/:id' element={<Doctor />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
