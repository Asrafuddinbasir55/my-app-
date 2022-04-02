    import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from './SingleReview';
    
    const Reviews = () => {
       const [review ] = useReviews()
       
        //  console.log(review);
        return (
            <div>
              {
                review?.map(rev => <SingleReview rev = {rev}
                key={rev.id}></SingleReview>)   
              }
            </div>
        );
    };
    
    export default Reviews;