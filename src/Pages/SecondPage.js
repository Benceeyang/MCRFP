import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import Clockerr from './Clockerr.js'
import{Button2, Button3, Button4, Button5, Button6, Button7} from '../Button.js'
=======
import Clocker from '../Clocker.js'
import Button from '../Button.js
>>>>>>> 513ee7595a28be36b85548e8c49e17d068c72e14


function SecondPage() {
  return (
    <div className='background'>
<<<<<<< HEAD
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
=======
        <Clocker className='clocker' />
        <Link to ='/third'>
        <Button />
>>>>>>> 513ee7595a28be36b85548e8c49e17d068c72e14
        </Link>
    </div>
  )
}

export default SecondPage