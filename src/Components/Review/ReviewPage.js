import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from './Review';

const ReviewPage = () => {

const [review] = useReview()
console.log(review)
    return (
        <>
          
          <div className="review-2">
  <h1 style={{marginLeft:"20px"}}>Our All Happy Customers</h1>
      </div>
        <div style={{marginBottom:"20px",marginRight:"10px"}}className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 w-2/3  mx-auto md:w-full">
            { 
            
            review.map(single=> <Review key={single.id}send={single}/> )
             }
     </div>
     </>
    );
};

export default ReviewPage;