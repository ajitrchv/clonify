import React from 'react'
import './Login.css'
import { loginUrl } from './Spotify';
function Login() {
  return (
    <div className='login'>
    
    <img src='https://i.ibb.co/F68818f/clonifylogo.png' alt='Spotifuy logo' />

    <a href={loginUrl}>LOGIN WITH SPOTIFY</a> 

    </div>
  )
}

export default Login