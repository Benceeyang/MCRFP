import React from "react";
import close from "./images/icon-remove.svg";
import {Link} from 'react-router-dom'
const Header = ({ keywords, removeKeywords, clearAll }) => {

  return (
    
             
    <div className="header-container">
      
      <ul>
        
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <div>
        
       </div>
        <a href="#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
   
  );
};

export default Header;
