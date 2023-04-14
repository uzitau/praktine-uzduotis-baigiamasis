import React from 'react'
import './top.css'

// Imported Icons ===========>
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'

// Imported Image =========>
import img from '../../../Assets/user (3).png'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        
      <div className="adminDiv flex">
        <div className="adminImage">
            <img src={img} alt="Admin Image" />
        </div>
              <MdOutlineNotificationsNone className="icon"/>
          <div className="title">
            <h1>SENDAS</h1>
            <p>Aciū, kad naudojatės mūsų paslaugomis</p>
          </div>
        </div>

        
      <div className="searchBar flex">
           <input type="text"  placeholder='Paieška'/>
           <BiSearchAlt className="icon"/>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex bg-1">
          <h1>Sukurkite siuntą greičiau nei per 1 minutę</h1>
          <p>Pristatysime tiek smulkiąjam verslui, tiek didelėms įmonėms</p>

          <div className="buttons flex">
                <button className='btn'>Nauja siunta</button>
                <button className='btn transparent'>Kviesti kurjerį</button>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

             <div className="textDiv">
              <h1>Siuntų informacijos</h1>

              <div className="flex">
                <span>
                  Sukurtos <br /> <small>410 siuntos</small>
                </span>
                <span>
                  Išsiųstos <br /> <small>240 siuntos</small>
                </span>
                <span>
                  Pristatytos <br /> <small>230 siuntų</small>
                </span>
                <span>
                  Gražintos <br /> <small>5 siuntos</small>
                </span>
              </div>

               <span className="flex link">
                  Daugiau siuntų <BsArrowRightShort className="icon"/>
               </span>

             </div>

            {/* <div className="imgDiv">
              <img src={img2} alt="Image Name" />
            </div> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top