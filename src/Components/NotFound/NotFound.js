import React from 'react';
import image from '../../404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <h1 className='not-found'style={{textAlign:'center',fontSize:'50px'}}>The page is Unavailable!!!</h1>
          <img style={{marginLeft:'30%',marginTop:'5%'}}src={image} alt=''/>
        </div>
    );
};

export default NotFound;