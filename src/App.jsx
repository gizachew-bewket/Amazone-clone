import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Catagory from './Components/Catagory/Catagory'
import Product from './Components/Product/Product'
import Layout from './Components/Layout/Layout'
import Routing from './Router'
import { DataContext } from './Components/DataProvider/DataProvider'
import { auth } from './Utility/firebase'
import { ActionType } from './Utility/ActionType'

function App() {
  const[{user},dispatch]=useContext(DataContext);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      
      if(authUser){
        // the user is logged in
        dispatch({
          type:ActionType.SET_USER,
          user:authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type:ActionType.SET_USER,
          user:null
        })
      }
    })
  },[])
  
  return (
    <>
      
      <Routing />
      
     
    </>
  )
}

export default App
