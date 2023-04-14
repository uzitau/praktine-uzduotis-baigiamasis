import React, {useEffect, useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.svg'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'



const Login = () => {
 
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

 
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setstatusHolder] = useState('message')

   const loginUser = (e)=>{

    e.preventDefault();
    
    Axios.post('http://localhost:3002/login', {
      
      LoginUserName: loginUserName, 
      LoginPassword: loginPassword
    }).then((response)=>{
     if(response.data.message || loginUserName == '' || loginPassword == ''){
      navigateTo('/')
      setLoginStatus(`Susikurkite paskyrą`)
     }
     else{
      navigateTo('/dashboard')
     }
    })
  }

  useEffect(()=>{
  if(loginStatus !== ''){
    setstatusHolder('showMessage') 
    setTimeout(() => {
      setstatusHolder('message')
    }, 4000);
  }
  }, [loginStatus])


  const onSubmit = ()=>{
    setLoginUserName('')
    setLoginPassword('')
  }


  return (
    <div className='loginPage flex'>
      <div className="container flex">

        <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>

        <div className="textDiv">
          <h2 className='title'>Siuntų pristatymas visoje Lietuvoje</h2>
          <p>Mes Jūsų Ateitis</p>
        </div>

        <div className="footerDiv flex">
          <span className="text">Neturite paskyros?</span>
          <Link to={'/register'}>
          <button className='btn'>Registruotis</button>
          </Link>
        </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Prisijungimas</h3>
          </div>

          <form className='form grid' onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Vardas</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="text" id='username' placeholder='Jūsų vardas'
                onChange={(event)=>{
                  setLoginUserName(event.target.value)
                }}/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Slaptažodis</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Įveskite slaptažodį' onChange={(event)=>{
                  setLoginPassword(event.target.value)
                }}/>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Prisijungti</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <span className='forgotPassword'>
              Pamiršote slaptažodį ? <a href="">Gauti naują slaptažodį</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login