import React from 'react';
import Slider from 'react-slick';
import { urlFor } from '../lib/client';

const ProductSlider = ({ image }) => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <Slider {...settings}>
              <div>
                <img src={urlFor(image[0])}/>
              </div>
              <div>
                <img src={urlFor(image[0])}/>
              </div>
            </Slider>
        </>

    );
};

export default ProductSlider;