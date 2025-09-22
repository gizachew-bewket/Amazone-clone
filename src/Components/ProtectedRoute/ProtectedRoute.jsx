import React from 'react'
import { useContext,useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { DataContext } from '../DataProvider/DataProvider'
const ProtectedRoute = ({children,msg,redirect}) => {
    const navigate=useNavigate();
    const [{user},dispatch]=useContext(DataContext)

    useEffect(()=>{
        if(!user){
            navigate("/auth",{state:{msg,redirect}})
        }

    },[user])
  return (
   children
  )
}

export default ProtectedRoute