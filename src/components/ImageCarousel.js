// components/ImageCarousel.js

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        <div>
          <Image src="/path-to-your-image1.jpg" alt="Image 1" width={1600} height={600} />
        </div>
        <div>
          <Image src="/path-to-your-image2.jpg" alt="Image 2" width={1600} height={600} />
        </div>
        <div>
          <Image src="/path-to-your-image3.jpg" alt="Image 3" width={1600} height={600} />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
