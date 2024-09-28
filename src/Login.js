import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

const Login = () => {
    const {fname} = useParams();
    console.log(fname)
  return (
    <>
    <Header/>
    <h1>Login Page is Here !</h1>
    <h1>Hello To {fname}</h1>
    </>
  )
}

export default Login