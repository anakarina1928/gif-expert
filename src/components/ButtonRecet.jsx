import React from 'react'
import '../assets/gifExpert.css'


const ButtonRecet = ({text,onClick} ) => {
  return (
    
    <nav  className="navbar navbar-light bg-light" onClick={onClick}>
      <div class="container" >
        
          <img  src={"https://raw.githubusercontent.com/anakarina1928/gif-expert/main/risa.png"} alt="" width="50" height="50" className="d-inline-block align-text-top" />
         <p className='reset'>{text}</p> 
       
      </div>
    </nav>
  )
}

export default ButtonRecet;
