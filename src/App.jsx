import React, { useMemo, useEffect } from 'react';
import Background from './components/Background';
import SceneSentence from './components/SceneSentence';
import { getGsap } from './lib/gsapSetup';

export default function App() {
  const sentences = useMemo(() => [
    "Dear Princess of Samagi Mawatha",
    "Dear Dinithi, so clever and bright",
    "Shining light of my darkest times",
    "Best thing ever happened in my life",
    "Deserves the best day and night",
    "From Danida"
  ], []);

  return (
    <main className="relative">
      <Background />
      
      {/* Opening spacer */}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-glow font-elegant text-5xl md:text-7xl lg:text-8xl font-normal tracking-wide opacity-95">
          A Heartscript
        </h1>
      </div>

      {/* Sentences */}
      {sentences.map((s, i) => (
        <SceneSentence key={i} text={s} index={i} />
      ))}

      {/* Finale */}
      <Finale />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="relative py-12 px-6 text-center border-t border-violet/20">
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="text-lavender/80 text-sm md:text-base font-light">
          © 2025 Nerdtastic🧠™ by Danida Jayakody
        </p>
        <p className="text-lavender/60 text-xs md:text-sm font-light">
          Heartscript is a project by Nerdtastic🧠™ | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Finale() {
  const gsap = getGsap();
  const ref = React.useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.92, filter: 'blur(20px)', y: 80 },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 2.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 2.5,
        }
      }
    );
  }, [gsap]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div ref={ref} className="text-center">
        <p className="text-glow font-elegant text-4xl md:text-6xl lg:text-7xl font-normal tracking-wide mb-8">
          Forever yours
        </p>
        <div className="flex justify-center gap-2">
          <span className="text-4xl opacity-80 animate-pulse">💗</span>
        </div>
      </div>
    </section>
  );
}

