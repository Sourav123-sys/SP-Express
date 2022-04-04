import React from 'react';
import useReview from '../../Hooks/useReview';
import image from '../../punjabi.png'
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const [review,setReview] = useReview()
    
const navigate=useNavigate()


    return (
        <>
        <div className="flex  items-center mt-10 flex-col-reverse md:flex-row">
            <div className="px-10">
            <h1 className="text-5xl text-emerald-800 "style={{fontFamily:'Times New Roman'}}>Make This Eid Charming</h1>
            <h1 className="text-4xl text-cyan-800 mt-10" style={{fontFamily:'Times New Roman'}}>By Wearing This Punjabi</h1>
            <p className="text-sm para-edit">Our Punjabi is made of very good quality fabric. We have our own factory. After a lot of experimentation, we have brought for you the best Punjabi of this Eid</p>
            <button className='button-edit mt-10'>Live demo</button>
            </div>
            <img src={image} className='image-edit'alt=""/>
            
       
      
        </div>
  <div className="review-1">
  <h1 style={{marginLeft:"20px"}}>Our Top Customers Review</h1>
      </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-2/3 mx-auto  md:w-full">

{
    
review.slice(0,3).map(half=><Review  
 key={half.id}
 send={half}></Review>)

}
</div>
<button className="happy"onClick={() =>navigate('/review')}>
Happy Clients
</button>
        </>

    );
};

export default Home;