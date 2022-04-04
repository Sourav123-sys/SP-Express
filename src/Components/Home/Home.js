import React from 'react';
import useReview from '../../Hooks/useReview';
import image from '../../404.jpg'
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [review,setReview] = useReview()
    
const navigate=useNavigate()


    return (
        <>
        <div className="flex  items-center mt-10 flex-col-reverse md:flex-row">
            <div className="px-10">
            <h1 className="text-4xl">Your next phone</h1>
            <h1 className="text-4xl">Your next phone</h1>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aut. Odio assumenda ipsam ratione dolor qui magnam sint amet harum velit nobis a necessitatibus, repellat asperiores quam fugit voluptate vitae deserunt. Consequatur aliquid laudantium eos deleniti reprehenderit dolor maxime amet quos fuga praesentium placeat tenetur eveniet, fugiat explicabo distinctio. Accusamus?</p>
            <button>Live demo</button>
            </div>
            <img src={image} alt=""/>
        </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-2/3 mx-auto md:w-full">
{

review.slice(0,3).map(half=><Review  
 key={half.id}
 send={half}></Review>)

}
</div>
<button onClick={() =>navigate('/review')}>
Show
</button>
        </>

    );
};

export default Home;