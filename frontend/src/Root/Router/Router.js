import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Services from "../../Pages/Services/Services";
import Contact from "../../Pages/Contact/Contact";
import NotFound from "../../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/services',
                element : <Services></Services>
            },
            {
                path : '/contact',
                element : <Contact></Contact>
            },
        ]
    },
    {
        path : '*',
        element : <NotFound></NotFound>
    },
])