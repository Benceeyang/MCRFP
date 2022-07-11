import React from 'react';
//import{Buttondirmenu,Buttondirreturnmenu,  Buttoncardback} from './buttons/buttons'
import './buttons/button.css'
  import {Link} from 'react-router-dom'
import "./card-style.css";

const Card = props =>{
    const ButtonFunction= () =>{
        return (
          <div className='Cardback'>
              <button1>
                 Back
              </button1>
              
          </div>
        )
      }
    return(
<div class="d-flex align-items-center">
<div>
        <Link to='/dir'><ButtonFunction/></Link>
       </div>
    <div className="card text-center shadow">
                <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
                </div>
            
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-white">{props.paragraph}
                    
                </p>
                <a href='bot' className="btn btn-outline-light" >View more</a>
            </div>

    </div>
</div>
                 
    ); 
}
//Buttoncardback
// const ButtonFunction= () =>{
//     return (
//       <div className='Cardback'>
//           <button1>
//              Back
//           </button1>
//           <Link to='/'>ackTest</Link>
//       </div>
//     )
//   }

export default Card;  