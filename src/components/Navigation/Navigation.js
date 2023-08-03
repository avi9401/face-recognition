import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
       <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
         <p onClick={() => onRouteChange('signout')}className='bg-animate hover-bg-light-silver f6 nav-signout mr4 mt4 link fw6 black pa3 grow pointer'>Sign Out</p>
       </nav>
    );
  } else {
     return (
       <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
         <p onClick={() => onRouteChange('signin')}className='bg-animate hover-bg-green f6 nav-signin ma4 mr0 mt4 link fw6 black pa3 grow pointer'>Sign In</p>
         <p onClick={() => onRouteChange('register')}className='bg-animate hover-bg-green f6 nav-register ma4 ml4 mt4 link fw6 black pa3 grow pointer'>Register</p>
       </nav>
     );
   }
};

export default Navigation;