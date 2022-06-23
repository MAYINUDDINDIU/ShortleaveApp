import React, { useState } from 'react';
import img from '../../assets/emp.png'
import imgg from '../../assets/agent_login.gif'
import Info from './Info';
const Home = () => {

    const [empData, SetEmpData] = useState([]);
    // console.log(empData);
    // const [{ NAME }[] = empData;
    // console.log(NAME);

    const information = (event) => {
        event.preventDefault();
        const emp_id = (event.target.emp_id.value);
        // console.log(emp_id);

        fetch(`http://202.164.213.67/mat/short_leave.php?EMP_CODE=${emp_id}`)
            .then(Response => Response.json())
            .then(data => SetEmpData(data))

    }


    return (
        <div>
            <h2 className='font-bold lg:text-2xl mt-5 text-secondary drop-shadow'>APPLICATION FOR <span className='text-primary lg:text-3xl'>SHORT LEAVE</span>  </h2>
            <div class="grid lg:grid-cols-2 gap-2 lg:px-20  mt-5 mb-5 place-content-center">

                <div class="">
                    <img src={imgg} class="w-96 h-full md:w-1/4 md:h-full lg:w-full lg:ml-10  lg:h-full rounded shadow-lg" />
                </div>

                <div className='justify-center  mt-0'>

                    <div className='p-5 shadow-lg lg:w-4/5  lg:ml-12 h-36 lg:p-8 '>
                        <h1 className='text-primary text-lg mb-2 font-bold drop-shadow'>SHORT LEAVE FORM</h1>

                        <form onSubmit={information}>
                            <div className='mt-0 flex'>
                                <input type="number" placeholder="Enter Employee ID" name='emp_id' class="input font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                                <input type="submit" value='SUBMIT' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-1/2 ml-1 max-w-lg" required />

                            </div>
                        </form>
                    </div>

                    {
                        empData.length === 0 ? <p className='text-center'></p> :
                            empData.map(d => <Info key={d.id} d={d}></Info>)

                    }

                    {/* <form >
                            <div className='mt-3 flex'>
                                <input type="text" value='' name='emp_name' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                                <input type="text" value='00006238' placeholder='ID' name='emp_id' class="input bg-primary w-1/2 ml-1 text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                            </div>
                            <div className='mt-3'>
                                <input type="text" value='IT DEPARTMENT' name='dept_name' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                            </div>
                            <div className='mt-3'>
                                <input type="text" value='OFFICER' placeholder='designation' name='designation' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                            </div>
                            <div className='mt-3 flex'>
                                <input type="date" placeholder='Date' name='designation' class="input bg-primary w-1/2  text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                                <input type="time" placeholder='Date' name='designation' class="input bg-primary w-1/2 ml-1 text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                            </div>
                            <div className='mt-3'>
                                <input type="text" placeholder="Reason For Short Leave" name='reason' class="input input-primary input-bordered rounded input-lg w-full h-20 max-w-lg" />
                            </div>
                            <div className='flex justify-center mt-3'>
                                <input type="reset" value='CANCEL' className='btn btn-error text-white btn-sm mt-5 px-12 rounded font-bold' />
                                <button className='btn btn-primary text-white btn-sm mt-5 px-20 rounded font-bold ml-1'>Submit</button>

                            </div>
                        </form> */}
                </div>
            </div>


        </div>

    );
};

export default Home;