import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from './Review';

const ReviewPage = () => {

const [review] = useReview()
console.log(review)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-2/3 mx-auto md:w-full">
            { 
            
            review.map(single=> <Review key={single.id}send={single}/> )
             }
     </div>
    );
};

export default ReviewPage;