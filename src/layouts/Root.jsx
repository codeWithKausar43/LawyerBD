import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
 

const Root = () => {
    return (
        <div>
             <Navbar></Navbar>
             <div className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-160px)]">
             <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;