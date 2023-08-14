import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../admin/container/Layout';
import Doctor from '../admin/container/Doctor';
import Medicine from '../admin/container/Medicine';
import DashBoard from '../admin/container/DashBoard/DashBoard';
import Department from '../admin/container/Department';
import { ThemeContext } from '../user/container/Context/ThemeContext';

function AdminRoute(props) {
    let theme = useContext(ThemeContext);
console.log(ThemeContext);
    return (
        <div className={`${theme.theme}`}>
            <Layout>
                <Routes>
                    <Route path='/Doctor' element={<Doctor />} />
                    <Route path='/' element={<DashBoard />} />
                    <Route path='/Medicine' element={<Medicine />} />
                    <Route path='/Department' element={<Department />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default AdminRoute;