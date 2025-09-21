import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Order from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import Productdetail from "./Pages/Productdetail/Productdetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51S9PKmDLO8IrcEnSi8fUBiEEnJ06mKDoXWjXOrVjm2OByQvr4U6OsjuuTThRBIn9NUqg6xuZUKvEmCpfY7gRC9ff00s0acij4n"
);
const Routing = () => {
  return (
    <BrowserRouter basename="/Amazone-clone">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/order" element={<Order />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/product/:productid" element={<Productdetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
