import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { photos } from '../config';

export const SectionGallery: React.FC = () => {
  // Rotations for the "scattered" look
  const rotations = [
    'rotate-2',
    '-rotate-1',
    'rotate-3',
    '-rotate-2',
    'rotate-1',
    '-rotate-3',
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-ink/10 rounded-tl-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-ink/10 rounded-br-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10">
        
        {/* Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-4">
                <div className="h-[1px] w-12 bg-ink/20"></div>
                <h2 className="text-3xl md:text-4xl font-calligraphy text-ink">拾光剪影</h2>
                <div className="h-[1px] w-12 bg-ink/20"></div>
             </div>
             <p className="mt-4 font-serif text-ink/50 text-sm tracking-widest">點滴回憶 • 歲月靜好</p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto px-2 md:px-0">
          {photos.gallery.map((src, index) => (
            <ScrollReveal key={index} delay={index * 150} className="flex justify-center">
              <div 
                className={`
                  relative bg-white p-2 md:p-3 shadow-lg border border-stone-200/50 
                  transform transition-all duration-500 ease-out hover:scale-110 hover:z-50 hover:rotate-0 hover:shadow-2xl
                  ${rotations[index % rotations.length]}
                  w-full max-w-[280px]
                `}
              >
                {/* Pin/Tape Effect (Alternating) */}
                {index % 2 === 0 ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800/20 shadow-inner z-20"></div>
                ) : (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-sm rotate-2 shadow-sm z-20"></div>
                )}

                <div className="aspect-[4/3] md:aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={src} 
                    alt={`Gallery memory ${index + 1}`} 
                    className="w-full h-full object-cover filter contrast-[1.02] hover:contrast-100"
                  />
                </div>
                
                {/* Handwritten date placeholder - adds to the vibe */}
                <div className="mt-2 h-4 w-full flex justify-end">
                   <div className="w-12 h-[1px] bg-ink/10 mt-2"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};