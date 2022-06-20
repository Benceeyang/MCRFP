import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import{Button2, Button3, Button4, Button5, Button6, Button7} from '../Button.js'
function DirectoryPage() {
  return (
    <div className = 'background'>

        Directory Page
    <Link to='/'>
    <Button4 />
    </Link>   
    </div>
  )
}

export default DirectoryPage