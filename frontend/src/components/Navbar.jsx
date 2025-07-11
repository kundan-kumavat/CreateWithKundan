import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar(){
    return(
        <div className="w-full flex flex-row items-center justify-between items-center px-[50px] py-[10px] border-[#474747] border-b-[0.5px] border-solid">
            <div className="flex flex-row items-center justify-center gap-[40px] text-[16px]">
                <NavLink to={'/'} >
                <img className="w-[50px] h-auto" src={logo} alt="logo" />
                </NavLink>
                <div className="flex flex-row items-center justify-center gap-[30px] mt-[8px]">
                    <NavLink
                    className={({isActive}) => (isActive ? 'text-[#fff]': 'text-[#a1a1a1]')}
                    to={'/'}>
                        Home
                    </NavLink>

                    <NavLink
                    className={({isActive}) => `${isActive} ? text-[#fff]: text-[#a1a1a1]`} 
                    to={'/about'}>
                        About
                    </NavLink>

                    <NavLink
                    className={({isActive}) => (`${isActive} ? text-[#fff]: text-[#a1a1a1]`)}
                    to={'/projects'}>
                        Projects
                    </NavLink>

                    <NavLink
                    className={({isActive}) => `${isActive ? "text-[#fff]": "text-[#a1a1a1]"}`}
                    to={'/contact-us'}>
                        Contact
                    </NavLink>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-[40px] text-[16px] mt-[8px]">
                <NavLink to={'/sign-up'}>
                    Sign up
                </NavLink>
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            </div>
            
        </div>
    )
}

export default Navbar;