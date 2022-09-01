import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
       <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
         <p onClick={() => onRouteChange('signin')}className='bg-animate hover-bg-red f6 ma4 ml4 dib white bg-purple mt4 link fw6 black ba pa3  grow pointer'>Sign Out</p>
       </nav>
    );
  } else {
     return (
       <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
         <p onClick={() => onRouteChange('signin')}className='bg-animate hover-bg-green f6 ma4 ml4 dib white bg-purple mt4 link fw6 black ba pa3  grow pointer'>Sign In</p>
         <p onClick={() => onRouteChange('register')}className='bg-animate hover-bg-green f6 ma4 ml4 dib white bg-purple mt4 link fw6 black ba pa3  grow pointer'>Register</p>
       </nav>
     );
   }
};

export default Navigation;