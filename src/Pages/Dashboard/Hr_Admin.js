import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

import Showall_hr from './Showall_hr';

const Hr_Admin = () => {



    const [type, setOption] = useState('');
    const [l_data, setLdata] = useState([]);

    // console.log(l_data);


    console.log(type);
    function handleChange(event) {
        setOption(event.target.value)
    }

    const handleAdded = event => {
        event.preventDefault();
        const dept_id = (event.target.dept_id.value);
        const date = (event.target.date.value);

        console.log(dept_id, date);

        fetch(`http://202.164.213.67/mat/show_all_data_hr.php?DEPT_CODE=${type}`)
            .then(response => response.json())
            .then(data => setLdata(data))


    }





    return (

        <div>
            <div className='flex justify-center mt-4 '>
                <div className='p-5 sm:h-full shadow-2xl lg:w-3/1 lg:h-full  bordered lg:ml-12 lg:p-8 '>
                    <h3 className='font-bold text-md text-secondary drop-shadow mb-2'>APPROVE EMPLOYEE SHORT LEAVE REQUEST FROM DEPARTMENT</h3>

                    <form onSubmit={handleAdded}>
                        <div className='mt-0  flex'>
                            <input type="number" name='dept_id' placeholder='Department ID' class="input  font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        </div>

                        <div className='mt-3 flex'>
                            <select class="select select-bordered rounded select-md w-full max-w-lg" name='option' onChange={handleChange} >
                                <option>Select Department</option>
                                <option value='1021'>IT Department</option>
                                <option value='1009'>Finance & Accounts(EKOK) </option>
                                <option value='1010'>Finance & Accounts(SB) </option>
                                1010
                                <option value='M'>Maturity</option>

                            </select>
                        </div>
                        <div className='mt-2  flex'>
                            <input type="date" name='date' placeholder='Select Date' class="input bg-secondary text-white  font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        </div>

                        <div className='flex justify-center mt-1'>
                            <input type="reset" value='CANCEL' className='btn btn-error text-white btn-sm mt-5 px-12 rounded font-bold' />
                            <button className='btn btn-secondary text-white btn-sm mt-5 px-20 rounded font-bold ml-1'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>




            {
                l_data.length === 0 ?
                    <p className='text-center'></p>
                    :
                    <div class="overflow-x-auto flex justify-center mt-5 ml-5 mr-5">
                        <table class="border-collapse border border-slate-400">
                            <thead>
                                <tr className='bg-secondary text-white font-bold'>
                                    <th class="border border-slate-300 w-48 p-2">NAME</th>
                                    <th class="border border-slate-300 w-48 ">EMP ID</th>
                                    <th class="border border-slate-300 w-60">DEPARTMENT</th>
                                    <th class="border border-slate-300 w-48">DESIGNATION</th>
                                    <th class="border border-slate-300 w-24 ">DATE</th>
                                    <th class="border border-slate-300 w-24 ">FROM</th>
                                    <th class="border border-slate-300 w-24">TO</th>
                                    <th class="border border-slate-300 w-36">REASON</th>
                                    <th class="border border-slate-300 w-48 ">APPROVE</th>
                                </tr>
                            </thead>

                        </table>
                    </div>
            }





            {
                l_data.length === 0 ?
                    <p className='text-center'><Loading /></p>
                    :
                    l_data.map(leave => <Showall_hr key={leave.id} leave={leave}></Showall_hr>)

            }




        </div>
    );
};

export default Hr_Admin;