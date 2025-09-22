import React from "react";
import style from "./Orders.module.css";
import Layout from "../../Components/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setorders] = useState([]);
  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, "users", user.uid, "orders"),
        orderBy("created", "desc")
      );

      onSnapshot(q, (snapshot) => {
        console.log(snapshot);

        setorders(
          snapshot?.docs?.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setorders([]);
    }
  }, []);
  return (
    <Layout>
      <section className={style.container}>
        <div className={style.orders_container}>
          <h2>Your Orders</h2>
          
          {
            orders?.length==0 && <div style={{padding:"20px"}}>You don't have any order yet! </div>
          }


          {/* Ordered Lists */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
