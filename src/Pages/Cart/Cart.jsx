import React, { useContext } from "react";
import style from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import Productcard from "../../Components/Product/Productcard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom"; // ✅ should be react-router-dom
import { ActionType } from "../../Utility/ActionType";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: ActionType.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: ActionType.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={style.container}>
        <div className={style.cart_container}>
          <h2>Hello {user?.name || "Guest"}</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item) => (
              <section key={item.id} className={style.cart_product}>
                <Productcard
                  product={item}
                  renderDetail={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={style.btn_container}>
                  <button className={style.btn} onClick={() => increment(item)}>
                    <IoIosArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={style.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={30} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length > 0 && (
          <div className={style.subtotal}>
            <div>
              <h3>
                Subtotal ({basket?.length} item{basket?.length > 1 ? "s" : ""})
              </h3>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />{" "}
              <small>This order contains a gift</small>
            </span>
            <br />
            <Link to="/payment">
              <button>Proceed to checkout</button>
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
