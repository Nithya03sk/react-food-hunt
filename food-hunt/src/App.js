import React, { lazy, Suspense } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Groceries from "./components/Groceries";

const Grocery = lazy(() => import("./components/Groceries"));

// Define the main layout of the application
const AppLayout = () => {
  return (
    <div className="app">
      <Header /> {/* Header component is common for all the routes */}
      <Outlet /> {/* Outlet is used to render the child routes we need children key for this */} 
    </div>
  );
};

// Set up the application routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
        {
            path: '/',
            element: <Body />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '/contact',
            element: <Contact />,
        },
        {
            path: '/grocery',
            element: <Suspense fallback = {<div>it's a fallback unitll Grocery components this will be shown</div>}><Grocery /></Suspense>,
        },
        {
          path: '/restaurant/:resId',
          element: <RestaurantMenu />
        }
    ]
  },
  
]);

// The main App component that uses RouterProvider to handle routing
const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
