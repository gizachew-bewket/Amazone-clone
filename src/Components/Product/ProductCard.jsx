import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import style from "./Product.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product, flex, renderDetail }) => {
  // Return early if product is null
  if (!product) return <p>Product not found.</p>;

  const { image, title, id, rating, price, description } = product;
  // console.log( product);

  return (
    <div className={`${style.productCard} ${flex ? style.product_flexed : ""}`}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
         {renderDetail && <p style={{maxWidth:"750px"}}>{description}</p>}
        <div className={style.productRating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0}</small>
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
