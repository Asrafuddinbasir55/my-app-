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
                <p>Product design is the process designers use to blend user needs with business goals to help brands make consistently successful products. Product designers work to optimize the user experience in the solutions they make for their users—and help their brands by making products sustainable for longer-term business needs. </p>

                <button className='btn-content'>Live Demo</button>
                
            </div>

            <div>
           <h1>This is Camara</h1>
            <img src="https://i.ibb.co/F3WVtY0/camara.jpg"  alt="" />
          </div>
             

           </div>
{/*          
           {
             selectedReview.slice(0, 3)
           } */}
         
           
           </>
        );
    };
    
    export default Home;