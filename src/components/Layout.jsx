import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="bg-[#171717]">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;