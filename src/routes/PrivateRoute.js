import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    let localSatus = localStorage.getItem("Loginredirecting").
        return(
            <>
                {
                    localSatus ? <Outlet /> : <Navigate to={"/auth"} replace />
                }
            </>
        )
}

export default PrivateRoute;