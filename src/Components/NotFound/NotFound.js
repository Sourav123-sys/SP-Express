import React from 'react';
import image from '../../404.jpg'
import './NotFound.css'
import { useSpring, animated } from 'react-spring'

const NotFound = () => {
    
    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: 'red' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
      })
    return (
        <>
        <animated.div style={styles}><h1 className='not-found'>ERROR!!!</h1></animated.div>
        <div>
     
          <img style={{marginLeft:'30%',marginTop:'5%'}}src={image} alt=''/>
        </div>
        </>
    );
};

export default NotFound;