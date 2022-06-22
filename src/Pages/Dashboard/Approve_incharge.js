import React from 'react';

const Approve_incharge = ({ leave }) => {

    console.log(leave);
    const { NAME, DEPT_CODE, DEPT_NAME, EMP_ID, DESIG, LEAVE_REASON } = leave;


    return (



        <div class="overflow-x-auto flex justify-center ml-5 mr-5">
            <table class="border-collapse border border-slate-400 ">

                <tbody>
                    <tr className=''>
                        <td class="border border-slate-300 w-48 text-left p-1">{NAME}</td>
                        <td class="border border-slate-300  w-48">{EMP_ID}</td>
                        <td class="border border-slate-300 w-60">{DEPT_NAME}</td>
                        <td class="border border-slate-300 w-48">{DESIG}</td>
                        <td class="border border-slate-300 w-24"></td>
                        <td class="border border-slate-300 w-24"></td>
                        <td class="border border-slate-300 w-24"></td>
                        <td class="border border-slate-300 w-36">{LEAVE_REASON}</td>
                        <td class="border border-slate-300 w-48">
                            <div className='flex justify-center'>
                                <button className='btn btn-error btn-sm text-white rounded'>DECLINE</button>
                                <button className='btn btn-success ml-2 btn-sm text-white rounded'>APPROVE</button>

                            </div>

                        </td>
                    </tr>


                </tbody>
            </table>

        </div>


    );
};

export default Approve_incharge;