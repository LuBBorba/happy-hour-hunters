import React, { useEffect } from 'react';
import './ScrollButton.scss'; 
import Arrow from '../../assets/images/up-arrow2.png';

export default function ScrollButton() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('scrollButton');
      if (window.scrollY > 500) {
        scrollButton.style.display = 'flex';
      } else {
        scrollButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button id="scrollButton" className="scroll" onClick={scrollToTop}>
      <img src={Arrow} alt='Scroll Up icon'/>
    </button>
  );
}
