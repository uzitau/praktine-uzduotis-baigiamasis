import React from 'react'
import './listing.css'

// imported icons ===========>
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillFire} from 'react-icons/ai'
import {AiOutlineFire} from 'react-icons/ai'

// imported Images ===========>
import img from '../../../Assets/image (1).png'
import img1 from '../../../Assets/image (9).png'
import img2 from '../../../Assets/image (8).png'

const Listing = () => {
  return (
    <div className='lisitingSection'>

      <div className="heading flex">
        <h1>Paskutinės siuntos</h1>
        <button className='btn flex'>
          Visos Siuntos <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillFire className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>UAB Blaivita</h3>
          <p>Joniškis - Klaipėda</p>
          <p>Pristatyta per 1 dieną</p>
          <p>360kg</p>
          <p>Talpa: S</p>
        </div>

        <div className="singleItem">
          <AiOutlineFire className="icon"/>
          <img src={img1} alt="Image Name" />
          <h3>UAB Girteka</h3>
          <p>Zabludavas - Skuodas</p>
          <p>Pristatyta per 4 dienas</p>
          <p>122</p>
          <p>Talpa: M</p>
        </div>

        <div className="singleItem">
          <AiOutlineFire className="icon"/>
          <AiOutlineFire className="icon"/>
          <img src={img2} alt="Image Name" />
          <h3>UAB Uosteka</h3>
          <p>Gargždai - Klaipėda</p>
          <p>Pristatyta per 2 valandas</p>
          <p>360kg</p>
          <p>Talpa: L</p>
        </div>

      </div>
    </div>
  )
}

export default Listing