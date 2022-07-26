import axios from 'axios';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, Navigate, Link, NavLink } from "react-router-dom";
import logo from '../../assets/filic.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/firebase.init';

const Login = ({ d }) => {

    const { EMP_NAME, DEPT } = d;
    console.log(EMP_NAME);


    const [udata, SetUdata] = useState([]);


    console.log(udata);



    const [emails, setEmails] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // if (googleUser) {
    //     navigate('/ekok');
    // }

    if (user) {
        navigate('/shortleaveform');
    }

    const handleSignIn = (event) => {

        event.preventDefault();
        const username = event.target.emp_name.value + "@gmail.com";
        const password = event.target.password.value;

        signInWithEmailAndPassword(username, password);



        const EMP_ID = event.target.emp_id.value;
        console.log(EMP_ID);

        fetch(`http://202.164.213.67/mat/s_leave_login.php?EMP_CODE=${EMP_ID}`)
            .then(Response => Response.json())
            .then(data => SetUdata(data))


    }

    const handleAdded = (event) => {
        event.preventDefault();


        const test = '6238'
        const pass = "filic"

        //if username or password field is empty, return error message
        if (event.target.emp_id.value === "" || event.target.password.value === "") {

            alert('Empty username/password field')

        } else if (
            event.target.emp_id.value === test &&
            event.target.password.value === pass
        ) {
            //Signin Success
            localStorage.setItem("isAuthenticated", "true");
            window.location.pathname = "/shorleaveform";
        } else {
            //If credentials entered is invalid
            alert("Invalid username/password");
            return;
        }
    };


    // const handleAdded = event => {
    //     event.preventDefault();
    //     const emp_id = (event.target.emp_id.value);
    //     const password = (event.target.password.value);

    //     const test = '6238'
    //     const user = "filic"
    //     console.log(emp_id, password);


    //     if (test === event.target.emp_id.value && user === event.target.password.value) {

    //         event.target.reset()
    //         navigate('/shorleaveform');
    //         // toast(`Successfully Saved Your Application`);

    //     } else {
    //         alert('Please type valid password')
    //     }


    //     // const date = (event.target.date.value);

    //     // console.log(dept_id, date);

    //     // fetch(`http://202.164.213.67/mat/approve_short_leave.php?DEPT_CODE=${type}&& DATE_=${date}`)

    //     // fetch(`http://202.164.213.67/mat/approve_short_leave.php?DEPT_ID=${type}&&PASS=${pass}`)
    //     //     .then(response => response.json())
    //     //     .then(data => setLdata(data))



    // }



    return (


        <div>
            <div className='p-5  mt-10 shadow-2xl lg:w-96  lg:h-full  bordered  lg:p-8  '>
                <form onSubmit={handleSignIn}>

                    <div className='mt-3  flex'>
                        <input type="text" value={EMP_NAME} name='EMP_NAME' class="input  bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                    </div>
                    <div className='mt-3  flex'>
                        <input type="text" name='emp_name' placeholder='UserName' class="form-control rounded-left input input-bordered rounded w-80" required />
                    </div>

                    <div className='mt-3  flex'>
                        <input type="password" name='password' placeholder='Password' class="form-control rounded-left input input-bordered rounded w-80" required />
                    </div>

                    <p className='mt-3'>If you are not registered? <NavLink to={'/signup'}><span className='text-secondary font-bold'>Register now </span > </NavLink>  </p>

                    <div className='flex justify-center mt-4'>
                        <button className='w-64  bg-[#087f23] btn btn-success text-white font-bold lg:w-80 px-12 rounded bold ml-1'>LOGIN</button>
                    </div>
                </form>
            </div>
        </div>





    );
};

export default Login;