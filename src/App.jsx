import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import productsData from "./api/Api"; // Import ProductsData component
import Product from "./components/Product";
import Login from "./pages/Login";
// import { useState, useEffect } from "react"; // Import useState and useEffect hooks

function App() {
  const Layout = () => {
    return (
      <div>
        <Header />
        {/* Pass productsData as prop to Outlet */}
        <Outlet productsData={productsData} />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: productsData,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className=" w-full h-[100dvh]">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
