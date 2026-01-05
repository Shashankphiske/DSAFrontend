import React from "react"
import logo from "/logo.png"
import transparentlogo from "/transparentlogo.png"
import { Link } from "react-router-dom";

function Navbar(){
    return <div className="w-screen z-50 fixed flex flex-col items-center justify-center">
        <div className="w-[95vw] bg-black h-22 rounded-3xl border-2 border-sky-950 mt-10 flex flex-row justify-between items-center px-10 text-[1.2vw]">
            <Link to="/">
                <div className="flex flex-row items-center justify-center">
                    <p className="text-[1.6vw] text-white font-bold">Algo</p>
                    <p className="text-[1.6vw] text-blue-600 font-bold">Fy</p>
                </div>
            </Link>
            <div className="flex flex-row gap-15">
                <Link to="/"><p className="text-white">Home</p></Link>
                <Link to="/features"><p className="text-white">Features</p></Link>
                <Link to="/about"><p className="text-white">About</p></Link>
                <Link to="/algo"><p className="text-white">Algorithms</p></Link>
            </div>
            <Link to="/faq"><p className="text-white">FAQ</p></Link>
        </div>
    </div>
}

export default Navbar;