import React from 'react';

const Info = ({ d }) => {

    const { NAME, EMP_CODE, EMP_DESIG, EMP_DEPT } = d;

    return (
        <div>
            <div className='p-5 shadow-2xl lg:w-4/5   bordered lg:ml-12 lg:p-8 '>
                <form >
                    <div className='mt-0  flex'>
                        <input type="text" value={NAME} name='emp_name' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        <input type="text" value={EMP_CODE} placeholder='ID' name='emp_id' class="input bg-primary w-1/2 ml-1 text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                    </div>
                    <div className='mt-3'>
                        <input type="text" value={EMP_DEPT} name='dept_name' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                    </div>
                    <div className='mt-3'>
                        <input type="text" value={EMP_DESIG} placeholder='designation' name='designation' class="input bg-primary text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                    </div>
                    <div className='mt-2 flex'>
                        <input type="date" placeholder='Date' name='designation' class="input bg-primary w-1/2  text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />
                        <input type="time" placeholder='Date' name='designation' class="input bg-primary w-1/2 ml-1 text-white font-bold h-10 input-bordered rounded input-primary w-full max-w-lg" required />

                    </div>
                    <div className='mt-2'>
                        <input type="text" placeholder="Reason For Short Leave" name='reason' class="input input-primary input-bordered rounded input-lg w-full h-20 max-w-lg" />
                    </div>
                    <div className='flex justify-center mt-1'>
                        <input type="reset" value='CANCEL' className='btn btn-error text-white btn-sm mt-5 px-12 rounded font-bold' />
                        <button className='btn btn-primary text-white btn-sm mt-5 px-20 rounded font-bold ml-1'>Submit</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Info;