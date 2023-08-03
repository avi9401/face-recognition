import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';


const Logo = () => {
	return (
       <div style={{display: 'flex', justifyContent: 'flex-start'}} className='ma4 mt0'>
          <Tilt className="Tilt mt0 br2 shadow-2" options={{ max : 50}} style={{ height: 120, width: 120 }} >
           <div className="Tilt-inner mt0  pa3">
           <img alt ='logo' src={brain}/>
           </div> 
          </Tilt>
       </div>
	);
}

export default Logo;