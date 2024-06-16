import React, { useState } from "react";
//import "./App.css";
import UserNavbar from "./Components/UserNavbar";
import InrBalancePage from "./Pages/InrBalancePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserCart from "./Pages/Cart";
import ExploreStockSection from "./Pages/Explore-stock-section";
import BellowNav from "./Components/UserBanner";
import InvestmentMutalFunds from "./Pages/Investment-mutaul-funds";
import ErrorPage from "./Pages/ErrorPage";
import InvestmentStockSection from "./Pages/Investment-stock-section";
import ExploreMutalFunds from "./Pages/Explore-mutaul-funds";
import UnKnowNavbar from "./Components/UnknownUser";
import UnknownUserBanner from "./Components/UnknownUserBanner";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      //element: <UserNavbar />,
      Component: Home,
      errorElement: <ErrorPage />,
      children: [
        { path: "/user/balance/inr", element: <InrBalancePage /> },
        { path: "/user/cart", element: <UserCart /> },
        { path: "/stocks/user/explore", element: <ExploreStockSection /> },
        { path: "/mutual-funds/user/explore", element: <ExploreMutalFunds /> },
        {
          path: "/stocks/user/investments",
          element: <InvestmentStockSection />,
        },
        {
          path: "/mutal-funds/user/investments",
          element: <InvestmentMutalFunds />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

const Home = () => {
  return (
    <>
      {/* <UserNavbar />
      <ExploreStockSection /> */}
      <UnKnowNavbar />
      <UnknownUserBanner />
    </>
  );
};

export default App;
