'use client';
import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isRendered, setIsRendered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [childrenToRender, setChildrenToRender] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setChildrenToRender(children);
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 50); // Small delay to trigger animation
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen, children]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsRendered(false);
    }
  };

  if (!isRendered) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex justify-center items-center p-4 transition-opacity duration-300 ${showContent ? 'bg-opacity-75' : 'bg-opacity-0'}`}
      onClick={onClose}
      onTransitionEnd={handleAnimationEnd}
    >
      <div
        className={`bg-gray-900 rounded-lg p-6 shadow-xl max-w-3xl w-full relative border border-green-700 transition-all duration-300 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {childrenToRender}
      </div>
    </div>
  );
};

export default Modal;
