import React from 'react';
import logo from '../../assets/filic.png'
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div class="navbar bg-green-600 lg:px-48">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=' rounded font-bold'><NavLink to='/'><AiOutlineHome />HOME</NavLink></li>
                        <li><NavLink to='/dept_head'>APPROVE</NavLink ></li>
                        <li><NavLink to='/final_approve'>ADMIN</NavLink ></li>
                        <li><a to='/contact_us'>CONTACT US</a></li>

                    </ul>
                </div>
                <img className='w-14  shadow-lg bg-white rounded-full p-1 hidden lg:block' src={logo} />
                <a class="btn btn-ghost normal-case text-xl text-white font-bold">FAREAST ISLAMI LIFE</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal tex-white p-0">
                    <li className='rounded font-bold text-white'><NavLink className='text-white p-2 px-8 rounded bordered' to='/'><AiOutlineHome />HOME</NavLink></li>
                    <li className=' pl-1 rounded  text-white  '><NavLink className='text-white' to='/dept_head'>APPROVE</NavLink></li>
                    <li className=' pl-1 rounded  text-white  '><NavLink className='text-white' to='/final_approve'>ADMIN</NavLink></li>
                    <li className=' pl-1 rounded  text-white  '><a className='text-white' to='/about'>CONTACT US</a ></li>

                </ul>
            </div>

        </div>
    );
};

export default Navbar;