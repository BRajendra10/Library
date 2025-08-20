import React from 'react'
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    return (
        <nav className="w-full h-[4rem] flex justify-between items-center bg-stone-100 shadow-lg px-4 py-3">
            <span className="text-lg font-semibold">Books gallery</span>

            <button className="lg:hidden text-xl font-bold hover:text-2xl"><AiOutlineMenu /></button>

            <ul className="hidden lg:flex">
                <NavLink className="p-2 text-sm uppercase text-stone-600 hover:text-stone-950" to={"/"}>Gallery</NavLink>
                <NavLink className="p-2 text-sm uppercase text-stone-600 hover:text-stone-950" to={"/overview"}>Overview</NavLink>
                <NavLink className="p-2 text-sm uppercase text-stone-600 hover:text-stone-950" to={"/members"}>Members</NavLink>
                <NavLink className="p-2 text-sm uppercase text-stone-600 hover:text-stone-950" to={"/login"}>Login</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar