     import React from 'react';
     
     const SingleReview = ({rev}) => {
        console.log(rev) 

         const {name, ratings, reviews } = rev;
          console.log(name);
         return (
             <div>
                 <h1>Name: {name}</h1>
                 <p>Ratings: {ratings}</p> 
                 <p>Reviews: {reviews}</p>
             </div> 
         );
     };
     
     export default SingleReview;