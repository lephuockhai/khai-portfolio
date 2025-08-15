'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const cvUrl = '/LePhuocKhai-CV.pdf';

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* CV Download Button */}
      <a
        href={cvUrl}
        download="LePhuocKhai-CV.pdf"
        className="bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="Download CV"
        title="Download CV"
      >
        <Image src="/file.svg" alt="Download CV" width={24} height={24} />
      </a>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold p-4 rounded-full shadow-lg transition-opacity hover:opacity-90 flex items-center justify-center"
          aria-label="Go to top"
          title="Go to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;