import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
       <div>
         <p className='f2 fw6'>
           {'Detect Faces in Your Pictures'}
         </p>
         <div className='center'>
           <div className='w-50 pa4 br3 shadow-3 br4'>
             <input className='f4 pa2 w-70 center br-pill' type='text' placeholder='Paste Image Link Here' onChange={onInputChange} />
             <button style={{margin: '30px'}}className='br-pill w-30 grow f5 link ph3 pv2 dib white bg-light-purple'
             onClick = {onButtonSubmit} >Detect</button>
           </div> 
         </div>
       </div>
	);
}

export default ImageLinkForm;