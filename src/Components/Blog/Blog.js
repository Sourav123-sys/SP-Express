import React from 'react';

const Blog = () => {
    return (
        <div>
             <h1 className='text-4xl text-center mt-5 chart-1'>Q1: What is Context API ?</h1>
             <p>It is a hook a react. Context api react as a global variable. Beause it provide us to access data from any component. Before use it at first we need to wrap whole components and export it. It a best alternative to props drilling system. And it is easier method if we compare with redux.</p>
             <h1 className='text-4xl text-center mt-5 chart-1'>Q2: What is Semantic key ?</h1>
             <p>Semantic keys are meaning full keyword which is easy to understant both browser and developer. Before we used div to make data container. But in HTML5 version, there are many Semantic key which is useable for different different taks. As example, Article tag make combile articles, header tag use to make heading, footer tag use to make footer. It makes code easy to understand. There are also Nav, Section , Main, Figure etc Semantic key which is useable for different different purpose..</p>


        </div>
    );
};

export default Blog;