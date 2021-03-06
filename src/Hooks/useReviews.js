import { useEffect, useState } from "react";

     
     
     const useReviews = () => {
        const [review, setReview] = useState([]);
        
        useEffect( () => {
            fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
        }, [])

        return [review]
     };
     
     export default useReviews;