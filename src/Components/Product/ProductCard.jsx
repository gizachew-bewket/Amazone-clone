import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import style from "./Product.module.css";

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;
  return (
    <div className={style.productCard}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>

        <div className={style.productRating}>
          <Rating value={rating.rate} precision={0.1} />

          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button className={style.button}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
