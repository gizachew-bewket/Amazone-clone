import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Catagory from "../../Components/Catagory/Catagory";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/Layout/Layout";
// import style from "landing.module.css";

const Landing = () => {
  return (
    <Layout>
      <Carousel />
      <Catagory />
      <Product />
    </Layout>
  );
};

export default Landing;
