import React from 'react';
import logo from '../../assets/filic.png'
import { AiOutlineHome } from "react-icons/ai";
import { Navigate, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {


    const [user] = useAuthState(auth);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth);
        if (signOut) {
            Navigate('/');
        }
    }


    return (
        <div class="navbar bg-green-600 lg:px-32">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=' rounded font-bold'><NavLink to='/shortleaveform'><AiOutlineHome />HOME</NavLink></li>
                        <li><NavLink to='/dept_head'>APPROVE</NavLink ></li>
                        <li><NavLink to='/final_approve'>ADMIN</NavLink ></li>
                        <li className=' pl-1 rounded '><NavLink className='' to='/requisition'>REQUISITION</NavLink></li>
                        <li><a to='/contact_us'>CONTACT US</a></li>
                    </ul>
                </div>
                <img className='w-14  shadow-lg bg-white rounded-full p-1 hidden lg:block' src={logo} />
                <a class="btn btn-ghost normal-case text-xl text-white font-bold">FAREAST ISLAMI LIFE</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal tex-white p-0">

                    {

                        user ?
                            <>
                                <li className='rounded font-bold text-white'><NavLink className='text-white p-2 px-6 rounded bordered' to='/shortleaveform:id'><AiOutlineHome />HOME</NavLink></li>
                                <li className=' pl-1 rounded  text-white  '><NavLink className='text-white' to='/dept_head'>DEPARTMENT APPROVE</NavLink></li>
                                <li className=' pl-1 rounded  text-white  '><NavLink className='text-white' to='/final_approve'>ADMIN</NavLink></li>
                                <li className=' pl-1 rounded  text-white  '><NavLink className='text-white' to='/requisition'>REQUISITION</NavLink></li>
                                <li className=' pl-1 rounded  text-white  '><a className='text-white' to='/about'>CONTACT US</a ></li>

                                <button className='btn btn-success bg-[#087f23] text-white ml-2 rounded px-6' onClick={handleSignOut}>logout</button></> :
                            <NavLink to={'/'}>
                                {/* <button className='btn btn-success bg-[#087f23] text-white rounded px-12 '>Login</button> */}
                            </NavLink>


                    }

                    {
                        !user ?
                            <>  <li className='text-white mt-3 mr-4'>If you are not registered?  </li>
                                < li className=' pl-1 rounded  text-white bg-primary  '><NavLink className='text-white' to='/signup'>REGISTER NOW</NavLink></li> </> :
                            < li className=' pl-1 rounded  text-white  '><NavLink className='text-white' to='/signup'></NavLink></li>

                    }




                </ul>
            </div>

        </div >
    );
};

export default Navbar;