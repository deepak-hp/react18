import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import About from "./components/About"
import Error from "./components/Error"
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import ContactUs from "./components/ContactUs";
import Shimmer from "./components/Shimmer";

// import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart")); // import() is a promise explore more!
// on demand loading - upon render - suspend loading

const About = lazy(() => import("./components/About"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<div>Loading..!!!!</div>}>
                    <About />
                </Suspense>
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
