import React from 'react'
import './sidebar.css'

import logo from '../../Assets/logo.svg'

import {BsQuestionCircle} from 'react-icons/bs'
import {BsBox2} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';


const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Sendas</h2>
        
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          SIUNTIMAS
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BsBox2 className="icon"/>
                <span className="smallText">
                  Nauja siunta
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BsBox2 className="icon"/>
                <span className="smallText">
                  Kviesti kurjerį
                </span>
            </a>
          </li>
        </ul>
      </div>

  
      <div className="menuDiv">
        <h3 className="divTitle">
          UŽSAKYMAI
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BsBox2 className="icon"/>
                <span className="smallText">
                  Sekite siuntą
                </span>
            </a>
          </li>
          <li className="listItem logOutBtn">
            <a href="/" className='menuLink flex'>
                <BsFillArrowLeftCircleFill className="icon"/>
                <span className="smallText">
                  Atsijungti
                </span>
            </a>
          </li>
        </ul>
        
      </div>

    
      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Pagalbos Centras</h3>
          <p>Pagalba klientams visą parą. Atsakysime į visus Jūsų klausimus</p>
          <button className='btn'>Kreipkitės</button>
        </div>
    
      </div>
    </div>
  )
}

export default Sidebar