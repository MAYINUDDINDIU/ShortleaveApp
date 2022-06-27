import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Info = ({ d }) => {

    const { NAME, EMP_CODE, EMP_DESIG, EMP_DEPT, DEPT_CODE } = d;
    // const [] = useState();
    const test = { NAME, EMP_CODE, EMP_DESIG, EMP_DEPT, DEPT_CODE };

    //New Date===========================
    const dd = new Date("03/25/2015");
    console.log(dd);

    var today = new Date();
    var ddd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = ddd + '-' + mm + '-' + yyyy;
    // console.log(today);
    //New Date===========================



    // const notify = () => toast("Successfully Saved Your Application");




    //******Handle post data in database********
    const handleAdded = event => {
        event.preventDefault();
        const EMP_ID = (event.target.EMP_ID.value);
        const NAME = (event.target.EMP_NAME.value);
        const DEPT_CODE = (event.target.DEPT_ID.value);
        const DEPT_NAME = (event.target.DEPT_NAME.value);
        const DESIG = (event.target.DESIG.value);
        const DATE_ = (event.target.DATE_.value);
        const FROM_TIME = (event.target.FROM_TIME.value);
        const END_TIME = (event.target.END_TIME.value);
        const LEAVE_REASON = (event.target.LEAVE_REASON.value);
        const STATUS = 'N';


        // toast("Successfully Saved Your Application");

        // console.log(EMP_NAME, emp_id, emp_designation, emp_dept, l_date, l_from_time, l_to_time, reason);
        console.log(NAME, DEPT_CODE, DEPT_NAME, DESIG, LEAVE_REASON, EMP_ID, STATUS, FROM_TIME, END_TIME, DATE_);

        const addItem = {
            NAME, DEPT_CODE, DEPT_NAME, DESIG, LEAVE_REASON, EMP_ID, STATUS, FROM_TIME, END_TIME, DATE_
        };
        const url = `http://202.164.213.67/mat/short_leave_insert.php`;
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

                    toast(`${NAME} Successfully Saved Your Application`);
                }
                else {
                    toast.error(`${NAME} Don,t Saved Your Application`)
                }

                console.log(result);
                event.target.reset()

                Navigate('/');
            })
    }
    //******Handle post data in database********

    return (
        <div>
            <div className='p-5 sm:h-full shadow-2xl lg:w-4/5 lg:h-full  bordered lg:ml-12 lg:p-8 '>
                <form onSubmit={handleAdded}>
                    <div className='mt-0  flex'>
                        <input type="text" value={NAME} name='EMP_NAME' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        <input type="text" value={EMP_CODE} placeholder='ID' name='EMP_ID' class="input bg-primary w-1/2 ml-1 text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                    </div>

                    <div className='mt-3 flex'>
                        <input type="text" value={EMP_DESIG} placeholder='designation' name='DESIG' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        <input type="text" value={EMP_DEPT} name='DEPT_NAME' class="ml-1 input bg-primary text-white font-bold w-56 h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                    </div>
                    <div className='mt-3'>
                    </div>

                    <div className='mt-2 flex'>
                        <input type="text" value={today} placeholder='Date' name='DATE_' class="input bg-primary   text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        <input type="text" value={DEPT_CODE} placeholder='Department ID' name='DEPT_ID' class="input bg-primary w-56 ml-1  text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                    </div>
                    <div className='mt-3 flex'>

                        <label className='mt-2 pr-1 text-dark font-bold'>FROM:  </label>
                        <input type="time" placeholder='From_ time' name='FROM_TIME' class="input bg-primary w-1/2 text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                        <label className='mt-2 pl-1 text-dark font-bold'>TO:</label>
                        <input type="time" placeholder='to_time' name='END_TIME' class="input bg-primary ml-1 w-1/2 text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                    </div>

                    <div className='mt-2'>
                        <input type="text" placeholder="Reason For Short Leave" name='LEAVE_REASON' class="input w-full input-primary input-bordered rounded input-lg w-full h-20 max-w-lg" required />
                    </div>
                    <div className='flex justify-center mt-1 mb-4'>
                        <input type="reset" value='CANCEL' className='btn btn-error text-white btn-sm mt-5 w-1/2 rounded font-bold' />
                        {/* <input type="submit" value='SUBMIT' className='btn btn-success text-white btn-sm mt-5 w-1/2 rounded font-bold' /> */}
                        <button className='btn btn-primary text-white btn-sm mt-5 w-1/2 rounded font-bold ml-1'>Submit</button>
                    </div>
                </form>

                {/* <button onClick={notify}>Notify !</button> */}
                <ToastContainer />

                {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={`"${NAME},${EMP_CODE},${EMP_DESIG},${EMP_DEPT}"`}
                        viewBox={`0 0 256 256`}
                    />
                </div> */}
            </div>


        </div>
    );
};

export default Info;