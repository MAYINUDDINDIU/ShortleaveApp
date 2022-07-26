import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Signupinfo from './Signupinfo';

const Signup = () => {

    const [empData, SetEmpData] = useState([]);



    const information = (event) => {
        event.preventDefault();
        const emp_id = (event.target.emp_id.value);
        // console.log(emp_id);

        fetch(`http://202.164.213.67/mat/short_leave.php?EMP_CODE=${emp_id}`)
            .then(Response => Response.json())
            .then(data => SetEmpData(data))

    }

    return (
        <div className=''>


            <div className='flex justify-center mt-0 '>

                <div className='p-5 m-3 sm:m-12 sm:h-full shadow-2xl lg:w-3/1 lg:h-full  bordered lg:ml-12 lg:p-12 '>

                    <h1 className='font-bold text-lg text-primary drop-shadow  mb-2'><span className='text-success mb-5 lg:text-xl font-bold'>EMPLOYEE REGISTRATION</span></h1>
                    {/* onSubmit={handleAdded} */}


                    <form onSubmit={information}>
                        <div className='mt-3 flex'>
                            <input type="number" placeholder="Enter Employee ID" name='emp_id' class="input font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                            {/* <input type="submit" value='SUBMIT' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-1/2 ml-1 max-w-lg" required /> */}

                        </div>
                    </form>


                    {
                        empData.length === 0 ? <p className='text-center'></p> :
                            empData.map(d => <Signupinfo key={d.id} d={d}></Signupinfo>)

                    }



                </div>
            </div>
        </div>


    );
};

export default Signup;