import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import Approve_incharge from './Approve_incharge';
import img from '../../assets/emp.jpg'


const Dept_incharge = () => {

    const [type, setOption] = useState('');
    const [l_data, setLdata] = useState([]);

    // console.log(l_data);


    console.log(type);
    function handleChange(event) {
        setOption(event.target.value)
    }

    const handleAdded = event => {
        event.preventDefault();
        const pass = (event.target.dept_id.value);
        // const date = (event.target.date.value);

        // console.log(dept_id, date);

        // fetch(`http://202.164.213.67/mat/approve_short_leave.php?DEPT_CODE=${type}&& DATE_=${date}`)

        fetch(`http://202.164.213.67/mat/approve_short_leave.php?DEPT_ID=${type}&&PASS=${pass}`)
            .then(response => response.json())
            .then(data => setLdata(data))



    }


    return (

        <div>


            <div className='flex justify-center mt-4 '>

                <div className='p-5 sm:h-full shadow-2xl lg:w-3/1 lg:h-full  bordered lg:ml-12 lg:p-8 '>

                    <h3 className='font-bold text-md text-primary drop-shadow mb-2'>APPROVE EMPLOYEE<span className='text-secondary text-lg font-bold'> SHORT LEAVE </span> REQUEST</h3>

                    <form onSubmit={handleAdded}>
                        <div className='mt-0  flex'>
                            <input type="password" name='dept_id' placeholder='Secret Key' class="input  font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        </div>

                        <div className='mt-3 flex'>
                            <select class="select select-bordered rounded select-md w-full max-w-lg" name='option' onChange={handleChange} >
                                <option>Select Department</option>
                                <option value='1004'>Human Resources Department</option>
                                <option value='1021'>IT Department</option>
                                <option value='1028'>DMD (OPERATIONS)</option>
                                <option value='1003'>Company Secretariat</option>
                                <option value='1019'>Acturial Department</option>
                                <option value='1009'>Finance & Accounts(EKOK) </option>
                                <option value='1010'>Finance & Accounts(SB) </option>
                                <option value='1016'>Real Estate Department</option>
                                <option value='1005'>General Service Department</option>
                                <option value='1005'>General Service Department</option>
                                <option value='1005'>ICCD Department</option>
                                <option value='1014'>General Service Department</option>
                                <option value='1023'>Share Department</option>
                                <option value='1011'>PF Department</option>
                                <option value='1006'>Shariah Department</option>
                                <option value='1007'>PRD Department</option>
                                <option value='1007'>PRD Department</option>
                                <option value='1018'>Policy Service Department </option>
                                <option value='1012'>Dev Admin Department (EKOK) </option>
                                <option value='1013'>Dev Admin Department (SB) </option>
                                <option value='1020'>Group Insurance </option>
                                <option value='1025'>Development</option>
                            </select>
                        </div>
                        {/* <div className='mt-2  flex'>
                            <input type="date" name='date' placeholder='Select Date' class="input bg-primary text-white  font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        </div> */}

                        <div className='flex justify-center mt-1'>
                            <input type="reset" value='CANCEL' className='btn btn-error text-white btn-sm mt-5 px-12 rounded font-bold' />
                            <button className='btn btn-primary text-white btn-sm mt-5 px-20 rounded font-bold ml-1'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>




            {
                l_data.length === 0 ? <p className='text-center'></p> :

                    <div class="overflow-x-auto flex justify-center mt-5 ml-5 mr-5">
                        <table class="border-collapse border border-slate-400">
                            <thead>
                                <tr className='bg-primary text-white font-bold'>
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
                l_data.length === 0 ? <p className='text-center'><Loading /></p> :
                    l_data.map(leave => <Approve_incharge key={leave.id} leave={leave}></Approve_incharge>)

            }

        </div>

    );
};

export default Dept_incharge;