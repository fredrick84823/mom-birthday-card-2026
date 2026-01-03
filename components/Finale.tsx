import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Seal } from './Seal';
import { photos } from '../config';

interface FinaleProps {
  onRestart: () => void;
}

export const Finale: React.FC<FinaleProps> = ({ onRestart }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20">
      
      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-calligraphy text-ink mb-2">水木家</h2>
            <div className="w-16 h-1 bg-seal mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Core Photo: Family */}
        <ScrollReveal delay={300} className="w-full max-w-4xl mb-12">
          <div className="relative p-4 bg-white/50 backdrop-blur-sm shadow-2xl rounded-sm border border-white/60">
            <div className="aspect-video w-full overflow-hidden relative">
              <img 
                src={photos.familyFinale}
                alt="全家大合照" 
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] hover:grayscale-0 transition-all duration-1000"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="font-calligraphy text-2xl md:text-3xl text-ink leading-relaxed mb-16">
            這卷長書，因為有妳，才有了溫度。<br/>
            <span className="text-seal mt-4 block text-4xl">媽媽，生日快樂。</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={900}>
          <div className="flex flex-col items-center gap-4">
             <Seal size="sm" onClick={onRestart} className="hover:scale-110 active:scale-95 transition-transform" />
             <span className="text-xs font-serif text-ink/40 tracking-widest">回到卷首</span>
          </div>
        </ScrollReveal>

      </div>
      
    </section>
  );
};