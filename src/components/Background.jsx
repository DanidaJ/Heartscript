import React, { useEffect, useRef, useState } from 'react';
import { getGsap } from '../lib/gsapSetup';

const random = (min, max) => Math.random() * (max - min) + min;

export default function Background() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const gsap = getGsap();

    // Custom cursor follow
    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Generate floating hearts periodically
    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: random(0, 100),
        animationDuration: random(8, 15),
        delay: random(0, 3),
        size: random(16, 32),
      };
      
      setHearts(prev => [...prev.slice(-20), newHeart]);
    }, 800);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearInterval(heartInterval);
    };
  }, []);

  return (
    <>
      {/* Animated gradient background */}
      <div className="animated-gradient fixed inset-0 -z-20" />
      
      {/* Floating hearts container */}
      <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="heart-icon"
            style={{
              left: `${heart.left}%`,
              bottom: '-50px',
              fontSize: `${heart.size}px`,
              animation: `floatUp ${heart.animationDuration}s linear forwards`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            💗
          </div>
        ))}
      </div>

      {/* Custom cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />
    </>
  );
}


