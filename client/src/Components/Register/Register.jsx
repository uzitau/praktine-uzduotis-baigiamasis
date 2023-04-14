import React, {useState}from 'react'
import './Register.css'
import '../../App.css'
import { Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.svg'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'



const Register = () => {
 
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate()

 
  const createUser = (e)=>{
    e.preventDefault()
  
    Axios.post('http://localhost:3002/register', {
      
      Email: email,
      UserName: userName, 
      Password: password
    }).then(()=>{
     
      navigateTo('/')

      
      setEmail('')
      setUserName('')
      setUserName('')

    })
  }


  return (
    <div className='registerPage flex'>
      <div className="container flex">

        <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>

        <div className="textDiv">
          <h2 className='title'>Siuntų pristatymas visoje Lietuvoje</h2>
          <p>Būkite Mūsų Dalimi</p>
        </div>

        <div className="footerDiv flex">
          <span className="text">Esate užsiregistrave?</span>
          <Link to={'/'}>
          <button className='btn'>Prisijungti</button>
          </Link>
        </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Registracija</h3>
          </div>

          <form action="" className='form grid'>

            <div className="inputDiv">
              <label htmlFor="email">El. paštas</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'/>
                <input type="email" id='email' placeholder='Įveskite El.paštą' onChange={(event)=>{
                  setEmail(event.target.value)
                }}/>
              </div>
            </div>


            <div className="inputDiv">
              <label htmlFor="username">Vardas</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="text" id='username' placeholder='Įveskite Vardą'  onChange={(event)=>{
                  setUserName(event.target.value)
                }}/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Slaptažodis</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Įveskite Slaptažodį'   onChange={(event)=>{
                  setPassword(event.target.value)
                }}/>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={createUser}>
              <span>Registruokitės</span>
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

export default Register