import React from 'react'
import './activity.css'

// Imported Icons =========>
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Images =========>
import user1 from '../../../Assets/user (1).png'
import user2 from '../../../Assets/user (2).png'
import user3 from '../../../Assets/user (3).png'
import user4 from '../../../Assets/user (4).png'
import user5 from '../../../Assets/user (5).png'

const Activity = () => {
  return (
    <div className='activitySection'>
       <div className="heading flex">
        <h1>Klientų prisijungimai</h1>
        <button className='btn flex'>
          Visi
          <BsArrowRightShort className="icon"/>
        </button>
       </div>

       <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Marija T.</span>
            <small>UAB Blaivita</small>
          </div>
          <div className="duration">
            Prisijungta: prieš 3 dienas
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Jona A</span>
            <small>MB Jonusta</small>
          </div>
          <div className="duration">
          Prisijungta: prieš 1 dieną
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Viktorija Ž</span>
            <small>Privatus asmuo</small>
          </div>
          <div className="duration">
          Prisijungta: prieš 5 valandas
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kazys M</span>
            <small>AB Kasmalva</small>
          </div>
          <div className="duration">
          Prisijungta: prieš 1 valandą
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kasparas L</span>
            <small>VŠĮ Joniškio murziečiai</small>
          </div>
          <div className="duration">
          Prisijungta: prieš 2 minutes
          </div>
        </div>
       </div>

        
    </div>
  )
}

export default Activity