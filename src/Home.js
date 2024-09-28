import React from 'react'
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="login">Login</Link>
            </li>
        </ul>
    </nav>

 
    </>
  )
}

export default Home