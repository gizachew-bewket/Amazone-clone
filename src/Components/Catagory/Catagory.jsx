import React from "react";
import Catagorycard from "./Catagorycard";
import { CatagoryInfo } from "./CatagoryInfo";
import styles from "./Catagorycard.module.css";
const Catagory = () => {
  return (
    <>
      <section className={styles.catagorySection}>
        {CatagoryInfo?.map((item) => {
          return <Catagorycard data={item} />;
        })}
      </section>
    </>
  );
};

export default Catagory;
