import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard";
import Loading from "../../Components/Loader/Loading"; 
import { Baseurl } from "../../Api/Endpoints";

const Productdetail = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${Baseurl}/products/${productid}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setIsLoading(false);
      });
  }, [productid]);

  return (
    <Layout>
      {isLoading ? <Loading /> : <ProductCard product={product} 
      flex={true} 
      renderDetail={true}
      renderAdd={true}
      />}
    </Layout>
  );
};

export default Productdetail;
