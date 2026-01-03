import React, { useState, useEffect, useRef } from 'react';
import { BackgroundTexture } from './components/BackgroundTexture';
import { Seal } from './components/Seal';
import { SectionOne } from './components/SectionOne';
import { SectionTwo } from './components/SectionTwo';
import { SectionThree } from './components/SectionThree';
import { SectionGallery } from './components/SectionGallery';
import { Finale } from './components/Finale';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isStamping, setIsStamping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setIsStamping(true);
    setTimeout(() => {
      setIsStarted(true);
      // Wait for the slide-up animation to finish before allowing scroll if needed,
      // but standard CSS transition handles the visual part.
    }, 800);
  };

  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-ink min-h-screen relative selection:bg-seal selection:text-paper">
      
      {/* Global Texture Overlay */}
      <BackgroundTexture />

      {/* Prologue Overlay */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center bg-paper transition-transform duration-[1500ms] ease-in-out ${
          isStarted ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className={`flex flex-col items-center gap-8 transition-opacity duration-500 ${isStarted ? 'opacity-0' : 'opacity-100'}`}>
          <Seal 
            onClick={handleStart} 
            active={isStamping} 
            size="lg"
            className="cursor-pointer" 
          />
          <div className="font-serif text-ink/60 tracking-[0.5em] text-sm animate-pulse-slow">
            點擊展卷
          </div>
        </div>
      </div>

      {/* Main Content Content */}
      <main className="relative z-10 w-full">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionGallery />
        <Finale onRestart={handleRestart} />
      </main>

      {/* Fixed Music Control (Mock) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink/40 hover:text-seal hover:border-seal transition-colors bg-paper/80 backdrop-blur-sm">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M9 18V5l12-2v13"></path>
             <circle cx="6" cy="18" r="3"></circle>
             <circle cx="18" cy="16" r="3"></circle>
           </svg>
        </button>
      </div>

    </div>
  );
};

export default App;