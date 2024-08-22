'use client';

import React, { useRef, useEffect, useState } from 'react';
import "@/app/Scrollable.css";
import Image from 'next/image';

const ScrollableComponent = ({ content, images }) => {
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageScrollable, setIsImageScrollable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        
        // Change image based on scroll position
        const newIndex = Math.floor(scrollPercentage * images.length);
        setCurrentImageIndex(Math.min(newIndex, images.length - 1));

        // Make image scrollable when reaching the bottom
        setIsImageScrollable(scrollTop + clientHeight >= scrollHeight);
      }
    };

    const contentContainer = contentRef.current;
    contentContainer.addEventListener('scroll', handleScroll);

    return () => {
      contentContainer.removeEventListener('scroll', handleScroll);
    };
  }, [images.length]);

    return (
        <div className="scrollable-container px-14" ref={containerRef}>
          <div className="text-container" ref={contentRef}>
            {content}
          </div>
          <div className={`image-container ${isImageScrollable ? 'scrollable' : ''} pb-10`}>
            <Image src={images[currentImageIndex]} width={600} height={600} alt="hero" className='mx-auto'/>
          </div>
        </div>
      );
};

export default ScrollableComponent;