import React from 'react'
import styles from "./Carousel.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel  } from 'react-responsive-carousel';
import {img} from "./img/data"

const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img?.map((image, index) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
      <div className={styles.hero_imgs}></div>
    </>
  );
}

export default CarouselEffect;