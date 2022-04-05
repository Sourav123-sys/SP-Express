import { faStar, faStarAndCrescent, faStarHalfAlt, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = (props) => {
    const {name,rating,img,time,review}=props.send




    return (
        <div className='part-1'>
            <div className='flex items-center'>
            <img  className="w-10 h-10 rounded-full mr-3"src={img} alt=""/>
          <h1>{name}</h1>
                </div>

          <h1 className='opacity-50'>{time}</h1>
        
          <h1 className="mt-10 text-xl">"{review}"</h1>
            <p className="mt-10 text-xl text-center">
            <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon-color'icon={faStarHalfStroke}></FontAwesomeIcon>   
            &nbsp;
            {rating}
                
                
                </p>
          
        </div>
    );
};

export default Review;