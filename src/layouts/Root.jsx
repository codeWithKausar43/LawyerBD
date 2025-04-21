import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
 

const Root = () => {
    return (
        <div>
             <Navbar></Navbar>
             <div className="max-w-7xl mx-auto px-4">
             <Outlet></Outlet>
             </div>
            
        </div>
    );
};

export default Root;