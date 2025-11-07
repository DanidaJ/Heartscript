import React, { useEffect, useRef } from 'react';
import { getGsap } from '../lib/gsapSetup';

export default function SceneSentence({ text, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const gsap = getGsap();
    const el = ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top -15%',
        scrub: 2.5,
      }
    });

    // Longer, smoother fade in from below
    tl.fromTo(
      el, 
      { opacity: 0, y: 120, filter: 'blur(12px)', scale: 0.95 }, 
      { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, ease: 'power1.out', duration: 1 }
    );

    // Hold visible in center
    tl.to(el, { opacity: 1, duration: 0.8 });

    // Smoother fade out at top
    tl.to(
      el, 
      { opacity: 0, y: -100, filter: 'blur(10px)', scale: 0.98, ease: 'power1.in', duration: 1 }
    );

    return () => tl.scrollTrigger && tl.scrollTrigger.kill();
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <p className="text-glow font-serif text-2xl md:text-4xl lg:text-5xl leading-relaxed text-center max-w-4xl font-light">
        {text}
      </p>
    </section>
  );
}

