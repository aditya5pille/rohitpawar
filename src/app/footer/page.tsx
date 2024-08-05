// components/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <> <div className='footer'>
    <Image src="/footer-top.png" alt="Rohit Pawar" className="rounded-lg" width={1800} height={400} />
    </div>
   
    <footer style={{ backgroundColor: 'rgb(54, 54, 54)', color: 'white', padding: '2rem 0' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Address Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="mb-2">
            Srujan House, In front of Teri Tree Hotel, <br />
            Bhosale Nagar, Shivaji Road, <br />
            Magarpatta, Hadapsar - 411028
          </p>
          <p className="mb-2">
            <strong>+91 969 633 0330</strong>
          </p>
          <p>
            <Link href="mailto:rrp@rohitpawar.org" className="text-yellow-500 hover:text-yellow-600">rrp@rohitpawar.org</Link>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center md:items-end">
          <div className="mb-4 md:mb-0 md:mr-8">
            <p className="font-bold">FOLLOW MLA ROHIT PAWAR FOR LIVE UPDATES</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 4.84 3.435 8.854 7.958 9.828v-6.947h-2.4V12h2.4v-1.839c0-2.373 1.424-3.667 3.512-3.667.998 0 2.02.176 2.02.176v2.234h-1.138c-1.122 0-1.47.691-1.47 1.396V12h2.498l-.4 2.881h-2.098v6.947C16.565 20.854 20 16.841 20 12c0-6.627-5.373-12-12-12z" /></svg>
            </Link>
            <Link href="#" className="hover:text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.149 3.451 9.447 8.1 10.858-.112-.693-.213-1.76.044-2.517.229-.668 1.479-4.24 1.479-4.24s-.378-.756-.378-1.874c0-1.754 1.018-3.06 2.287-3.06 1.08 0 1.602.811 1.602 1.782 0 1.085-.692 2.708-1.051 4.214-.297 1.243.621 2.257 1.842 2.257 2.209 0 3.9-2.333 3.9-5.698 0-2.973-2.138-5.055-5.184-5.055-3.53 0-5.605 2.648-5.605 5.391 0 1.065.413 2.21.928 2.83a.373.373 0 01.086.357c-.095.39-.308 1.239-.35 1.411-.053.213-.171.258-.397.156-1.48-.614-2.408-2.543-2.408-4.098 0-3.331 2.421-6.39 6.977-6.39 3.661 0 6.506 2.609 6.506 6.098 0 3.637-2.298 6.557-5.491 6.557-1.073 0-2.083-.568-2.43-1.226l-.66 2.515a11.977 11.977 0 001.414.083C18.627 24 24 18.627 24 12 24 5.373 18.627 0 12 0z" /></svg>
            </Link>
            <Link href="#" className="hover:text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.149 3.451 9.447 8.1 10.858-.112-.693-.213-1.76.044-2.517.229-.668 1.479-4.24 1.479-4.24s-.378-.756-.378-1.874c0-1.754 1.018-3.06 2.287-3.06 1.08 0 1.602.811 1.602 1.782 0 1.085-.692 2.708-1.051 4.214-.297 1.243.621 2.257 1.842 2.257 2.209 0 3.9-2.333 3.9-5.698 0-2.973-2.138-5.055-5.184-5.055-3.53 0-5.605 2.648-5.605 5.391 0 1.065.413 2.21.928 2.83a.373.373 0 01.086.357c-.095.39-.308 1.239-.35 1.411-.053.213-.171.258-.397.156-1.48-.614-2.408-2.543-2.408-4.098 0-3.331 2.421-6.39 6.977-6.39 3.661 0 6.506 2.609 6.506 6.098 0 3.637-2.298 6.557-5.491 6.557-1.073 0-2.083-.568-2.43-1.226l-.66 2.515a11.977 11.977 0 001.414.083C18.627 24 24 18.627 24 12 24 5.373 18.627 0 12 0z" /></svg>
            </Link>
            <Link href="#" className="hover:text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 4.84 3.435 8.854 7.958 9.828v-6.947h-2.4V12h2.4v-1.839c0-2.373 1.424-3.667 3.512-3.667.998 0 2.02.176 2.02.176v2.234h-1.138c-1.122 0-1.47.691-1.47 1.396V12h2.498l-.4 2.881h-2.098v6.947C16.565 20.854 20 16.841 20 12c0-6.627-5.373-12-12-12z" /></svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2024. All rights reserved. Design & Develop By <Link href="https://adityapachpilleportfolio.vercel.app/ " target="_blank" className="text-yellow-500 target:blank">Aditya Pachpille</Link></p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
