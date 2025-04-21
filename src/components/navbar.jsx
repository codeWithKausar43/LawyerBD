import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-md">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                My-Bookings
              </NavLink>
            </li>
            <li>
                <NavLink to="/blogs" className={({isActive}) => isActive ? "text-blue-500 font-bold" : "" }>
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-500 font-bold" : "" }>
                    Contact
                </NavLink>
            </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="size-7" src={logo} alt="" />
            <h3 className="text-2xl font-bold">Law.BD</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                My-Bookings
              </NavLink>
            </li>
            <li>
                <NavLink to="/blogs" className={({isActive}) => isActive ? "text-blue-500 font-bold" : "" }>
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-500 font-bold" : "" }>
                    Contact
                </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-green-500 rounded-xl text-white font-semibold">Contact Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
