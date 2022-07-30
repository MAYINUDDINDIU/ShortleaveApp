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



        <div className="row lg:px-60  justify-center  lg:flex">
            <div className="col-md-4 shadow-xl lg:flex shadow-xl p-0 mr-1">
                <img className='w-100 md:w-1/5 lg:w-1/2 rounded' src={imgg} alt="" />


                <div class="card-body ml-12 w-4/5 mb-12 flex justify-center">
                    <div className='flex justify-center mt-0 '>

                        <div className='p-5 m-3 sm:m-12 sm:h-full shadow-2xl lg:w-full lg:h-full  bordered lg:ml-12 lg:p-8 '>

                            <h1 className='font-bold text-lg text-primary drop-shadow  mb-2'><span className='text-success mb-5 text-2xl font-bold'>EMPLOYEE LOGIN</span></h1>
                            {/* onSubmit={handleAdded} */}

                            <form onSubmit={information}>
                                <div className='mt-0 flex'>
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




        </div>


    );
};

export default Log;