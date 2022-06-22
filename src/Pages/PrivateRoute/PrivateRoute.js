import React from 'react';


import { useLocation, Navigate } from "react-router-dom";
// import auth from '../../Firebase/firebase.init';
// import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {
    // const [user, loading] = useAuthState(auth);
    let location = useLocation();
    const user = 'IT'
    const pass = '123456'
    // if (loading) {
    //     return <Loading></Loading>
    // }
    if (user && pass) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;