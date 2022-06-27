import React from 'react';

const Report = ({ leave }) => {

    const { NAME, DEPT_CODE, STATUS, DEPT_NAME, EMP_ID, DESIG, LEAVE_REASON, DATE_, FROM_TIME, END_TIME } = leave;

    return (
        <div>
            <div class="overflow-x-auto flex justify-center ml-5 mr-5">
                <table class="border-collapse border border-slate-400 ">

                    <tbody>
                        <tr className=''>
                            <td class="border border-slate-300 w-48 text-left p-1">{NAME}</td>
                            <td class="border border-slate-300  w-48">{EMP_ID}</td>
                            <td class="border border-slate-300 w-60">{DEPT_NAME}</td>
                            <td class="border border-slate-300 w-48">{DESIG}</td>
                            <td class="border border-slate-300 w-24">{DATE_}</td>
                            <td class="border border-slate-300 w-24">{FROM_TIME}</td>
                            <td class="border border-slate-300 w-24">{END_TIME}</td>
                            <td class="border border-slate-300 w-36">{LEAVE_REASON}</td>
                            <td class="border border-slate-300 w-48">
                                <div className='flex justify-center'>
                                    {/* <button className='btn btn-error btn-sm text-white rounded'>DECLINE</button> */}
                                    {STATUS}
                                    {/* <button onClick={() => handleUPDATE(EMP_ID)} className='btn btn-success ml-2 btn-sm text-white rounded'>APPROVE</button> */}
                                    {/* <button className='btn btn-secondary ml-2 btn-sm text-white rounded'>APPROVE</button> */}

                                </div>

                            </td>
                        </tr>


                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Report;