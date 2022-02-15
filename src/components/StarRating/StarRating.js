import React, {useState} from 'react';
import {Rating} from 'react-simple-star-rating';

const StarRating = ({rate}) => {

    const [ratingValue, setRatingValue] = useState(rate)

    const handleRating = (rate) => {
        setRatingValue(rate)
    }

    return (
        <div>
            <Rating
                size={22}
                onClick={handleRating}
                ratingValue={ratingValue*10}
                fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
            /></div>
    );
};

export {StarRating};