import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { internalIpV4 } from 'internal-ip';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Await, Pending, Rejected, Resolved } from "react-await";
import auth from '../Firebase/firebase.init';
const Signupinfo = ({ d }) => {

    const { NAME, EMP_CODE, EMP_DESIG, EMP_DEPT, DEPT_CODE } = d;

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        Error,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });


    if (user) {
        navigate('/shortleaveform');
    }


    // const os = require('os');

    // const localIpAddress = require("local-ip-address")

    // console.log(localIpAddress())

    // const localIpUrl = require('local-ip-url');
    // // localIpUrl() // => 192.168.31.69
    // console.log(localIpUrl());
    // const localIpAddress = require("local-ip-address")

    // console.log(localIpAddress())
    // const localIpAddress = require("local-ip-address")
    // console.log(localIpAddress())

    const [ip, setIP] = useState('');

    // creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        // console.log(res.data);
        setIP(res.data.IPv4)
    }

    useEffect(() => {
        //passing getData method to the lifecycle method
        getData()


    }, [])


    // const myip = internalIpV4();
    // var promise = Promise.resolve(myip);
    // promise.then(function (val) {
    //     const my_ip = val;
    //     setIP(my_ip);
    //     console.log(my_ip);

    // });
    // console.log(myip);
    // console.log(await internalIpV4());
    //=> '10.0.0.79'

    //******Handle post data in database********
    const handleAdded = event => {
        event.preventDefault();
        const EMP_CODE = (event.target.EMP_CODE.value);
        const EMP_NAME = (event.target.EMP_NAME.value);
        const DESIG = (event.target.DESIG.value);
        const DEPT = (event.target.DEPT.value);
        const USER_NAME = (event.target.USER_NAME.value) + "@gmail.com";
        const PASSWORD = (event.target.PASSWORD.value);
        const CONF_PASSWORD = (event.target.CONF_PASS.value);
        // const END_TIME = (event.target.END_TIME.value);
        // const LEAVE_REASON = (event.target.LEAVE_REASON.value);
        // const STATUS = 'N';


        // toast("Successfully Saved Your Application");

        // console.log(EMP_NAME, emp_id, emp_designation, emp_dept, l_date, l_from_time, l_to_time, reason);
        console.log(EMP_CODE, EMP_NAME, DESIG, DEPT, USER_NAME, PASSWORD, CONF_PASSWORD);

        const addItem = {
            EMP_CODE, EMP_NAME, DESIG, DEPT, PASSWORD
        };
        console.log(addItem);
        const url = `http://202.164.213.67/mat/s_leave_reg.php`;
        fetch(url, {
            method: "POST",

            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(result => {

                if (result.status = true) {

                    toast(`${EMP_NAME} Successfully Registered`);
                }
                else {
                    console.log("no saved data");
                }

                console.log(result);
                event.target.reset()


                if (PASSWORD < 5) {

                    setError('Password no longer than 5 character')
                    return;
                }
                else if (PASSWORD !== CONF_PASSWORD) {
                    setError('Password did not matched')
                    return;
                }

                createUserWithEmailAndPassword(USER_NAME, PASSWORD)

                // Navigate('/');
            })

    }
    //******Handle post data in database********


    return (
        <div>
            <div className='mt-3 '>
                <form onSubmit={handleAdded}>
                    <div className='mt-0  flex'>

                        <input type="text" value={NAME} name='EMP_NAME' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        <input type="text" value={EMP_CODE} placeholder='ID' name='EMP_CODE' class="input bg-primary w-1/2 ml-1 text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                    </div>

                    <div className='mt-3 flex'>
                        <input type="text" value={EMP_DESIG} placeholder='designation' name='DESIG' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        <input type="text" value={EMP_DEPT} name='DEPT' class="ml-1 input bg-primary text-white font-bold w-56 h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                    </div>

                    <div className='mt-3  flex'>
                        <input type="text" name='USER_NAME' placeholder='User Name' class="input  w-full ml-1  font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                    </div>
                    <div className='mt-3  flex'>
                        <input type="password" minLength={5} name='PASSWORD' placeholder='Password' class="input  w-full ml-1  font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                    </div>
                    <div className='mt-3  flex'>
                        <input type="password" name='CONF_PASS' placeholder='Confirm Password' class="input  w-full ml-1  font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                    </div>

                    <p className='mt-3'>If you are  registered? <NavLink to={'/'}><span className='text-secondary font-bold'>Login now </span > </NavLink>  </p>

                    <h2>{ip}</h2>


                    <p className='mt-3 text-error'>{error}</p>
                    {/* <p className='mt-3 text-error'>{Error.message}</p> */}

                    <div className='flex justify-center mt-5 mb-4'>
                        <button className='w-full  bg-[#087f23] btn btn-success text-white font-bold lg:w-full px-12 rounded bold ml-1'>REGISTER</button>
                    </div>

                </form>

                {/* <button onClick={notify}>Notify !</button> */}
                <ToastContainer />


            </div>


        </div>
    );
};

export default Signupinfo;