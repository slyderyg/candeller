'use client';
import React, { useState } from 'react';

const ReviewSlider = () => {
    const [review, setReview] = useState(1);

    const handleNextButton = () => {
        review < 3? (setReview(review + 1)) : (null);
    };

    const handlePrevButton = () => {
        review > 1? (setReview(review - 1)) : (null);
    };

  return (
    <div className='review__slider'>
        <p className='review__slider__header'>WHAT OUR CUSTOMERS SAYS</p>
        <p className='review__slider__text'>{reviews[review as keyof ReviewType]}</p>
        <p className='review__slider__name'>{reviewAutor[review as keyof ReviewAutor]}</p>
        <div className='review__slider__buttons'>
            <button className={review > 1 ? 'review__slider__buttons__prev' : 'review__slider__buttons__prev__not__active'} onClick={handlePrevButton}></button>
            <img className='review__slider__buttons__rectangle' src="/rectangle.png" alt="rectangle" />
            <button className={review < 3 ? 'review__slider__buttons__next' : 'review__slider__buttons__next__not__active'} onClick={handleNextButton}></button>
        </div>
    </div>
  )
}

export default ReviewSlider;

type ReviewType = {
    1: string;
    2: string;
    3: string
};

const reviews: ReviewType = {
    1: '“A pellen tesque pretium feugiat vel morbi sagittis lorem habi tasse cursus. Suspen dise tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittishabi mattis.”',
    2: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.”',
    3: '“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.”'
};

type ReviewAutor = {
    1: string;
    2: string;
    3: string;
};

const reviewAutor: ReviewAutor = {
    1: 'ANNA GARCIA',
    2: 'JOHN DOE',
    3: 'ARTHUR SMITH'
}