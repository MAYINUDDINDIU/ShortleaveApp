import React from 'react';

const Requisitionpaper = () => {




    return (
        <div class="overflow-x-auto mt-5">
            <table class="table table-compact  w-full">
                <thead >
                    <tr className='text-white'>
                        <th className='bg-primary'></th>
                        <th className='bg-primary'>ITEM DETAILS</th>
                        <th className='bg-primary'>QUANTITY</th>
                        <th className='bg-primary'>COMMENTS</th>
                        <th className='bg-primary'>location</th>
                        <th className='bg-primary'>Last Login</th>
                        <th className='bg-primary'>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Tissue</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td>Blue</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Pen</td>
                        <td>Desktop Support Technician</td>
                        <td>Zemlak, Daniel and Leannon</td>
                        <td>United States</td>
                        <td>12/5/2020</td>
                        <td>Purple</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>A4 Paper</td>
                        <td>Tax Accountant</td>
                        <td>Carroll Group</td>
                        <td>China</td>
                        <td>8/15/2020</td>
                        <td>Red</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>Marjy Ferencz</td>
                        <td>Office Assistant I</td>
                        <td>Rowe-Schoen</td>
                        <td>Russia</td>
                        <td>3/25/2021</td>
                        <td>Crimson</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>Yancy Tear</td>
                        <td>Community Outreach Specialist</td>
                        <td>Wyman-Ledner</td>
                        <td>Brazil</td>
                        <td>5/22/2020</td>
                        <td>Indigo</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>Irma Vasilik</td>
                        <td>Editor</td>
                        <td>Wiza, Bins and Emard</td>
                        <td>Venezuela</td>
                        <td>12/8/2020</td>
                        <td>Purple</td>
                    </tr>


                </tbody>
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </tfoot> */}
            </table>
        </div>
    );
};

export default Requisitionpaper;