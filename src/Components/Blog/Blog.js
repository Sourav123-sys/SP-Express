import React from 'react';
import image from '../../person 1.png'
import context from '../../react-context-api.jpg'
import image2 from '../../person 2.png'
import semantic from '../../HTML-5-new-semantic-elements.png'
import block from '../../block.jpg'
import image3 from '../../person 3.png'
import './Blog.css'


const Blog = () => {
    
    

    return (
        <>
       <div className="review-card">
  
            <div className="flex items-center mt-10 p-5">
                <img className='w-10 h-10 rounded-full mr-3'src={image} alt=''/>
                <div >
                <h1 style={{color:'white'}}>Will Smith</h1>
                <h1 style={{color:'white'}}>Posted On 20th August,2021</h1>
                  </div>
                
            </div>
            <div>
                <h1 className="blog-post">What is Context API?</h1>
                <img style={{marginLeft:"40%",width:"30%"}}src={context} alt=''/>
                <h1 className='context'>The Context API is a React framework component structure that allows us to share particular types of data across all levels of the application. It is intended to deal with the issue of prop drilling. Context API is helpful for exchanging data that is deemed global, such as the currently authorized user, the application's theme preferences, and so on. When we have this sort of data, we can utilize the Context API without having to use any other modules. In fact, you may use the Context API in any circumstance where you need to send a prop via a component such that it reaches another component further down the tree. We begin by creating a context object using the createContext method.</h1>
            </div>

       </div>

       <div className="review-card">
  
            <div className="flex items-center mt-10 p-5">
                <img className='w-10 h-10 rounded-full mr-3'src={image2} alt=''/>
                <div >
                <h1 style={{color:'white'}}>Chris Hemsworth.</h1>
                <h1 style={{color:'white'}}>Posted On 10th August,2021</h1>
                  </div>
                
            </div>
            <div>
                <h1 className="blog-post">What is HTML Semantics?</h1>
                <img style={{marginLeft:"40%",width:"30%"}}src={semantic} alt=''/>
                <h1 className='context'>Elements like &lt;header&gt;, &lt;footer&gt;, and &lt;article&gt; are all regarded as semantic since they correctly explain the element's function and the sort of material that is included inside them. Elements like &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, and &lt;footer&gt; behave similarly to &lt;div&gt; elements. They organize other items into page parts. Whereas a div&gt; tag might include any kind of information, it is simple to determine what type of content would fit in a semantic &lt;header&gt; section. It is much simpler to read. The simpler it is to read and comprehend the code, the easier your work will be. It is more easily accessible. Search engines may also better grasp the context and content of your website, resulting in a better user experience.</h1>
            </div>

       </div>
       <div className="review-card">
  
            <div className="flex items-center mt-10 p-5">
                <img className='w-10 h-10 rounded-full mr-3'src={image3} alt=''/>
                <div >
                <h1 style={{color:'white'}}>Leonardo DiCaprio.</h1>
                <h1 style={{color:'white'}}>Posted On 10th August,2021</h1>
                  </div>
                
            </div>
            <div>
                <h1 className="blog-post">Inline Vs. Block Vs. Inline-Block Element</h1>
                <img style={{marginLeft:"40%",width:"30%"}}src={block} alt=''/>
                <h1 className='context'>Inline components are actually put in a single line, side by side with other inline or inline-block elements.They will begin on a new line only if there is insufficient space on the current line for any more inline components. When using inline elements, there is one limitation. Specific height and width, as well as margin-top and margin-bottom characteristics, are not supported. As a result, inline elements will be as large as their contents if no paddings or side margins are used. Inline blocks and inline can do everything that lines can do, but they can also have widths, heights, and vertical margins specified! The block components are always separated by a new line. They will also take up a whole row or breadth of space. It signifies that no other HTML elements may be used in conjunction with block level elements. You may also choose the width/height and vertical margins.</h1>
            </div>

       </div>
       
       </>
    );
};

export default Blog;