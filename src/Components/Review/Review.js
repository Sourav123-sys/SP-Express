import React from 'react';

const Review = (props) => {
    const {name,title,img,time,review}=props.send
    return (
        <div>
            <div className='flex items-center'>
            <img  className="w-10 h-10 rounded-full mr-3"src={img} alt=""/>
          <h1>{name}</h1>
                </div>

          <h1>{time}</h1>
          <h1>{title}</h1>
          <h1>{review}</h1>
      
        </div>
    );
};

export default Review;