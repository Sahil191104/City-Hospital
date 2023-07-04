import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../admin/container/Layout';
import Doctor from '../admin/container/Doctor';
import Contact from '../admin/container/Contact';
import Medicine from '../admin/container/Medicine/MedicineForm';

function AdminRoute(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/Doctor' element={<Doctor />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Medicine' element={<Medicine />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoute;