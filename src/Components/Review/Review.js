import { faStar, faStarAndCrescent, faStarHalfAlt, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'
const Review = (props) => {
    const {name,rating,img,time,review}=props.send


let myIcon;
if(rating==4){
    myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
     </div>
}
else if(rating==4.8){
    myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStarHalfStroke}></FontAwesomeIcon>   </div>
}
else if(rating==4.5){
    myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStarHalfStroke}></FontAwesomeIcon>   </div>
}
else {
    myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
   </div>
}
    return (
        
        <>
 
        <div className='part-1'>
            <div className='flex items-center'>
            <img  className="w-10 h-10 rounded-full mr-3"src={img} alt=""/>
          <h1>{name}</h1>
                </div>

          <h1 className='opacity-50'>{time}</h1>
        
          <h1 className="mt-10 text-xl">"{review}"</h1>
            <p className="mt-10 text-xl text-center">
           {myIcon}
            &nbsp;
            {rating}
                
                
                </p>
          
        </div>
        </>
    );
};

export default Review;