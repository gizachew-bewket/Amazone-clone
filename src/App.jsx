import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Catagory from './Components/Catagory/Catagory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Carousel />
      <Catagory />
     
    </>
  )
}

export default App
