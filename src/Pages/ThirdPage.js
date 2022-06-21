import React from 'react'
import {Link} from 'react-router-dom'
import{Button2, Button3, Button4} from '../Button.js'
function ThirdPage() {
  return (
    <div>
        ThirdPage
    <Link to='fourth'>
    <Button4 />
    </Link>   
    <Link to ='/ '>
        <Button2 />
        </Link>
    </div>
  )
}

export default ThirdPage