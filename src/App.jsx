import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Catagory from './Components/Catagory/Catagory'
import Product from './Components/Product/Product'

function App() {
  

  return (
    <>
      <Header />
      <Carousel />
      <Catagory />
      <Product />
     
    </>
  )
}

export default App
