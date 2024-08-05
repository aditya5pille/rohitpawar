"use client";
import { useState } from "react";

const Gallery = () => {
  const allImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    // Add more image paths as needed
  ];

  const [visibleImages, setVisibleImages] = useState(5);

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 5);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {allImages.slice(0, visibleImages).map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className={`w-full h-full object-cover ${
                index >= 5 ? "h-32 w-32" : "h-48 w-48"
              }`}
            />
          </div>
        ))}
      </div>
      {visibleImages < allImages.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreImages}
            className="inline-block text-green-500 border border-green-500 rounded-full px-6 py-2 font-bold hover:bg-yellow-500 hover:text-white transition"
          >
            READ MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
