import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import Clockerr from './Clockerr.js'
import{Button2, Button3, Button4, Button5, Button6, Button7} from '../Button.js'


function SecondPage() {
  return (
    <div className='background'>
      .
        <Clockerr className='clocker' />
        <Link to ='/third'>
        <Button4 />
        </Link>
        <Link to ='/ '>
        <Button2 />
        </Link>
        <Link to ='fourth'>
        <Button3 />
        </Link>
        <Link to ='dir'>
        <Button5 />
        </Link>
        <Link to ='/'>
        <Button6 />
        </Link>
        <Link to ='/'>
        <Button7 />
        </Link>
    </div>
  )
}

export default SecondPage