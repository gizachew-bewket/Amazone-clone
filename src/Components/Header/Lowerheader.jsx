import React from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "./Lowerheader.module.css";

const Lowerheader = () => {
  return (
    <nav className={styles.lowerHeader}>
      <ul className={styles.lowerHeaderList}>
        <li className={styles.lowerHeaderItem}>
          <IoMdMenu className={styles.lowerHeaderIcon} />
          <span>All</span>
        </li>
        <li className={styles.lowerHeaderItem}>Today's Deals</li>
        <li className={styles.lowerHeaderItem}>Customer Service</li>
        <li className={styles.lowerHeaderItem}>Registry</li>
        <li className={styles.lowerHeaderItem}>Gift Cards</li>
        <li className={styles.lowerHeaderItem}>Sell</li>
      </ul>
    </nav>
  );
};

export default Lowerheader;
