"use client"
import { useEffect } from 'react';

export default function TwitterFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='pl-40 shadow-2xl'>
      <a 
        className="twitter-timeline" 
        data-width="400" 
        data-height="500" 
        href="https://twitter.com/RRPSpeaks?ref_src=twsrc%5Etfw"
      >
        Tweets by RRPSpeaks
      </a>
    </div>
  );
}
