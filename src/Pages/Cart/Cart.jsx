import React, { useContext } from "react";
// import style from "cart.module.css"
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import Productcard from "../../Components/Product/Productcard";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  return (
    <Layout>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item) => (
              <Productcard
                key={item.id}
                product={item}
                renderDetail={true}
                renderAdd={false}
                flex={true}
              />
            ))
          )}
        </div>
        <div></div>
      </section>
    </Layout>
  );
};

export default Cart;
