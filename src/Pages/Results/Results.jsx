import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import { Baseurl } from "../../Api/Endpoints";
import style from "./Results.module.css";
// import ProductCard from "../../Components/Product/ProductCard";
import ProductCard from "../../Components/Product/ProductCard";

const Results = () => {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`${Baseurl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category: {categoryName}</p>
        <div className={style.products_container}>
          {results.length > 0 ? (
            results.map((product) => (
              <ProductCard key={product.id} 
              product={product}
              renderDetail={false} 
              renderAdd={true}/>
            ))
          ) : (
            <p style={{ padding: "30px" }}>No products found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Results;
