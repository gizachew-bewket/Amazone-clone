import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import style from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider.jsx";
import { ActionType } from "../../Utility/ActionType";

const ProductCard = ({ product, flex, renderDetail,renderAdd }) => {
  // Return early if product is null
  if (!product) return <p>Product not found.</p>;

  const { image, title, id, rating, price, description } = product;
  // console.log( product);

  const [state,dispatch]= useContext(DataContext);
  console.log(state);
  const addtocart=()=>{
    dispatch({
      type: ActionType.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  }
  
  
  
  
  
  return (
    <div className={`${style.productCard} ${flex ? style.product_flexed : ""}`}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDetail && <p style={{ maxWidth: "750px" }}>{description}</p>}
        <div className={style.productRating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button className={style.button} addtocart onClick={addtocart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
