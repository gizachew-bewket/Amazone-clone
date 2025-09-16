import { Link } from "react-router";
import styles from "./Catagorycard.module.css";

const Catagorycard = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <Link to= {`/category/${data.name}`} className={styles.card}>
        <h2 className={styles.title}>{data.title}</h2>
        <img src={data.imglink} alt={data.title} className={styles.image} />
        <p className={styles.link}>Shop now</p>
      </Link>
    </div>
  );
};

export default Catagorycard;