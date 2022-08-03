import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { useAuth } from './Auth'

const Require = ({children}) => {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const data = window.localStorage.getItem("isLoggedIn")
  useEffect(() => {
    if(data === "true" || auth.user){
      navigate('/profile')
    } else {
      navigate('/login')
    }
  },[])
  return (
   children
  )
}

export default Require
///state={{path: location.pathname}}