"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // Time interval in milliseconds (5 seconds)

  const images = [
    { src: '/banner-desktop-1.jpg', alt: 'Description of image 1' },
    { src: '/banner-desktop-2.jpg', alt: 'Description of image 2' },
    { src: '/banner-desktop-3.jpg', alt: 'Description of image 3' },
    { src: '/banner-desktop-1.jpg', alt: 'Description of image 4' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <>
      <header className="relative z-10 border-b border-gray-200 shadow-md pt-10 hidden sm:block">
        <div className="absolute inset-0 object-cover z-10">
          {/* Full-screen carousel */}
          <Carousel className="w-full h-screen relative">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className={`${index === currentIndex ? 'block' : 'hidden'}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Arrows positioned within the carousel */}
            <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
            </div>
          </Carousel>
        </div>

        {/* Header content */}
        <nav className="flex justify-center items-center bg-white py-2 px-4 rounded-full shadow-lg space-x-8 relative z-10 mx-20">
          <ul className="flex items-center space-x-8 text-black text-lg font-bold">
            <li>
              <Link href="/" className="hover:text-green-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500 transition duration-300">
                News & Media
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500 transition duration-300">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500 transition duration-300">
                Gallery
              </Link>
            </li>
          </ul>
          <div className="relative w-24 h-10">
            {/* Logo image */}
          </div>
          <ul className="flex items-center space-x-8 text-black text-lg font-bold">
            <li>
              <Link href="/header" className="hover:text-green-500 transition duration-300">
                Focus Areas
              </Link>
            </li>
            <li>
              <Link href="/header" className="hover:text-green-500 transition duration-300">
                Initiatives
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500 transition duration-300">
                In Assembly
              </Link>
            </li>
          </ul>
          <div className="flex items-center ml-8">
            <span className="text-gray-500 mr-2">LIVE</span>
            <div className="bg-gray-200 p-1 rounded-full">
              <span className="text-gray-500">Live</span>
            </div>
          </div>
        </nav>

        <section className="pl-96 z-10">
          <div className="pl-80">
            <div className="relative w-28 h-28">
              <Image
                src="/header-logo.png" // Update the path to your image
                alt="Profile Picture"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
         <section>
          <Link
            href="https://wa.me/9763714046"
            className="fixed bottom-4 right-4 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/whatsapp.png" alt="Rohit Pawar" className="rounded-lg" width={50} height={30} />
          </Link>
        </section>
      </header>
    </>
  );
};

export default Header;
