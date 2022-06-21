import React from 'react'
import Button from '../Button'
import {Link} from 'react-router-dom'
import{Button2, Button3, Button4} from '../Button.js'
function FourthPage() {
  return (
    <div>
        Fourth
    <Link to='/'>
    <Button4 />
    </Link>   
    </div>
  )
}

export default FourthPage