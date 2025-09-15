
import styles from "./Catagorycard.module.css";

const Catagorycard = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <a href="#" className={styles.card}>
        <h2 className={styles.title}>{data.title}</h2>
        <img src={data.imglink} alt={data.title} className={styles.image} />
        <p className={styles.link}>Shop now</p>
      </a>
    </div>
  );
};

export default Catagorycard;