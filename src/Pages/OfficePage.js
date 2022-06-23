import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Buttonpublicsaftey,Buttonparks,Buttonhealth,Buttonarts,Buttonchildren,Buttonhousing, Buttonreturndir, Buttontransportation,Buttondirback, Buttonparkback, Buttondirmenu,Buttondirreturnmenu} from '../Button.js'
function OfficePage() {
  return (
    <div className = 'background'>

        Office Page
        <Link to='/'>
    <Buttondirreturnmenu />
    </Link>   
    
    </div>
  )
}

export default OfficePage