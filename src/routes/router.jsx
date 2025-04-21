import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Root from "../layouts/Root";
 
 
 
export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home  },
         ],
    }])