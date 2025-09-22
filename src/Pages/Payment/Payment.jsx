import { React, useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import style from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
// import ProductCard from "./Components/product/ProductCard";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/Axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
import { ActionType } from "../../Utility/ActionType";

const Payment = () => {
  const [{ user, basket },dispatch] = useContext(DataContext);
  console.log(user);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const totalitem = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const [carderror, setcarderror] = useState(null);
  const [paymentProcessing, setpaymentProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handlechange = (e) => {
    // console.log(e);
    e?.error?.message ? setcarderror(e?.error?.message) : setcarderror("");
  };

  const handelpayment = async (e) => {
    e.preventDefault();
    try {
      setpaymentProcessing(true);
      // contact backend to get clientsecret key
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      //  confirmation
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      await setDoc(
        doc(collection(db, "users", user.uid, "orders"), paymentIntent.id),
        {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
//Empty the basket
  dispatch({type:ActionType.EMPTY_BASKET})

      setpaymentProcessing(false);
      navigate("/Order", { state: { msg: "You have a new order" } });
    } catch (error) {
      console.log(error);
      setpaymentProcessing(false);
    }
  };

  return (
    <Layout>
      {/* Headrer */}
      <div className={style.payment_header}> Checkout ({totalitem}) items</div>

      {/* payment methods */}
      <section className={style.payment}>
        {/* address */}
        <div className={style.flex}>
          <h3>Delivery Address</h3>

          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Ethiopia</div>
          </div>
        </div>
        <hr />
        {/* products */}
        <div className={style.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* Card forms */}
        <div className={style.flex}>
          <h3>Payment methods </h3>
          <div className={style.payment_card_container}>
            <div className={style.payment_details}>
              <form onSubmit={handelpayment}>
                {/* error */}
                {carderror && (
                  <small style={{ color: "red" }}>{carderror}</small>
                )}
                {/* card element */}
                <CardElement onChange={handlechange} />
                {/* price */}
                <div className={style.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total order |</p> <CurrencyFormat amount={total} />{" "}
                    </span>
                  </div>
                  <button type="submit">
                    {paymentProcessing ? (
                      <div className={style.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait ...</p>
                      </div>
                    ) : (
                      "Pay now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
