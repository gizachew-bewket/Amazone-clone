import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import style from "./Product.module.css";
import Loading from "../Loader/Loading";
const Product = () => {
  const [products, setproducts] = useState();
const[isLoading, setIsLoading] = useState(false);
  useEffect(() => { 
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
      //  console.log(res.data);
       setproducts(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
        

  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={style.productcontainer}>
          {products?.map((singleproduct) => (
            <ProductCard product={singleproduct} key={singleproduct?.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Product;
