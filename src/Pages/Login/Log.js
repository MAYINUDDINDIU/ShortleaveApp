import React, { useState } from 'react';
import Login from './Login';
import imgg from '../../assets/agent_login.gif'
const Log = () => {

    const [empData, SetEmpData] = useState([]);

    console.log(empData);


    const information = (event) => {
        event.preventDefault();
        const emp_id = (event.target.emp_id.value);
        console.log(emp_id);

        fetch(`http://202.164.213.67/mat/s_leave_login.php?EMP_CODE=${emp_id}`)
            .then(Response => Response.json())
            .then(data => SetEmpData(data))

    }

    return (
        <div className=''>


            <div className='flex justify-center mt-0 '>
                <div class="grid lg:grid-cols-2 gap-2 lg:px-48  mt-5 mb-5 place-content-center">
                    <div class="">
                        <img src={imgg} class="w-96 h-full md:w-1/4 md:h-full lg:w-full lg:ml-10  lg:h-full rounded shadow-lg" />
                    </div>
                    <div className='p-5 shadow-lg lg:w-96  lg:ml-10 h-36 lg:p-8'>


                        <h1 className='font-bold text-lg text-primary drop-shadow  mb-2'><span className='text-success mb-5 lg:text-xl font-bold'>EMPLOYEE LOGIN </span></h1>
                        {/* onSubmit={handleAdded} */}


                        <form onSubmit={information}>
                            <div className='mt-3 flex'>
                                <input type="number" placeholder="Enter Employee ID" name='emp_id' class="input font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                                {/* <input type="submit" value='SUBMIT' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-1/2 ml-1 max-w-lg" required /> */}

                            </div>
                        </form>


                        {
                            empData.length === 0 ? <p className='text-center'></p> :
                                empData.map(d => <Login key={d.id} d={d}></Login>)

                        }


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Log;