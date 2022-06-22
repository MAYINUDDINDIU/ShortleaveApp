import axios from 'axios';
import React from 'react';
import { useLocation, Navigate } from "react-router-dom";

const Login = () => {



    const submit = () => {
        axios({
            method: 'post',
            url: 'http://172.17.11.192/apii/register.php',
            data: {
                EMP_NAME: 'Fred',
                DEPT_NAME: 'Flintstone'
            }
        });
    }

    return (
        <div className='flex justify-center mt-4'>

            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default Login;