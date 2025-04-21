import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Root from "../layouts/Root";
import Bookings from "../pages/Bookings";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
 
 
 
export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home},
        {path: 'booking', Component: Bookings},
        {path: 'blogs', Component: Blogs},
        {path: 'contact', Component: Contact},
         ],
    }])