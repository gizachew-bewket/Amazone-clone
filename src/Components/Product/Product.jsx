import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import style from "./Product.module.css";

const Product = () => {
  const [products, setproducts] = useState();

  useEffect(() => { 
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
      //  console.log(res.data);
       setproducts(res.data);
      }).catch((err) => {
        console.log(err);
      });
        

  }, []);
  return (
    <>
      <section className={style.productcontainer}>
        {products?.map((singleproduct) => (
          <ProductCard product={singleproduct} key={singleproduct.id} />
        ))}
      </section>
    </>
  );
};

export default Product;
