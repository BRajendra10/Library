 import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    return (
        <nav className="w-full h-[4rem] flex justify-between items-center bg-stone-100 shadow-lg px-4 py-3">
            <span className="text-lg font-semibold">Books gallery</span>

            <button className="lg:hidden text-xl font-bold hover:text-2xl"><AiOutlineMenu /></button>

            <ul className="hidden lg:flex">
                <li>
                    <a className="p-2 uppercase text-stone-600 hover:text-stone-950" href="#">gallery</a>
                </li>
                <li>
                    <a className="p-2 uppercase text-stone-600 hover:text-stone-950" href="#">contact</a>
                </li>
                <li>
                    <a className="p-2 uppercase text-stone-600 hover:text-stone-950" href="#">login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar