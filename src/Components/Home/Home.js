    import React from 'react';
import useReviews from '../../Hooks/useReviews';
     import  './Home.css';
    const Home = () => {
      const [review ] = useReviews()
        return (
     <>
           <div className='img-content'>

             <div>
                <h2>Your Best Camara</h2>
                <h2>welcome to my webpage</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam deleniti sequi possimus mollitia ipsum pariatur consequatur alias dolores? Tenetur, sequi voluptatum dolorem eaque rem sit aliquid temporibus omnis doloremque expedita dolores praesentium quas ducimus culpa! Ad veritatis iure esse nam voluptatibus magni deleniti laborum deserunt! Aspernatur aperiam libero quia iusto ut, accusantium fugiat non.</p>

                <button className='btn-content'>Live Demo</button>
                
            </div>

            <div>
           <h1>This is Camara</h1>
            <img src="https://i.ibb.co/F3WVtY0/camara.jpg"  alt="" />
          </div>
             

           </div>
         
           
         
           
           </>
        );
    };
    
    export default Home;