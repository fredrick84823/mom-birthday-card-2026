import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { photos } from '../config';

export const SectionTwo: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden">
      
      {/* Background: Diamond Sutra (Faint) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none flex flex-col justify-between overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap font-serif text-sm vertical-text h-full leading-8">
            一切有為法 如夢幻泡影 如露亦如電 應作如是觀 信心清淨 則生實相
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Left: Photos Area (Paper Style) */}
        <div className="md:w-3/5 w-full flex flex-col md:block relative h-[50vh] md:h-auto mb-12 md:mb-0">
          
          {/* Photo 1: Landscape (Main) */}
          <ScrollReveal delay={200} className="relative md:absolute md:top-0 md:left-10 z-10 max-w-[80%] md:max-w-[60%] self-start">
             <div className="relative bg-white p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] transform -rotate-2 hover:rotate-0 transition-transform duration-700 border border-stone-100">
               <div className="aspect-[4/3] overflow-hidden">
                 <img 
                   src={photos.fatherAndBrother}
                   alt="爸爸與弟弟" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                 />
               </div>
               {/* Optional: Tape effect */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-1"></div>
               
               {/* Tag Label: Top Right - More Transparent */}
               <div className="absolute top-5 right-5 z-20 bg-white/60 backdrop-blur-sm px-3 py-1 shadow-sm border border-stone-100/30 rounded-[1px] transform -rotate-1">
                  <span className="text-xs font-serif text-ink/90 tracking-widest font-semibold">爸和達</span>
               </div>
             </div>
          </ScrollReveal>

          {/* Photo 2: Square (Secondary, overlapping) */}
          <ScrollReveal delay={400} className="relative md:absolute md:top-40 md:right-10 z-20 max-w-[60%] md:max-w-[45%] self-end -mt-10 md:mt-0">
             <div className="bg-white p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transform rotate-3 hover:rotate-0 transition-transform duration-700 border border-stone-100">
               <div className="aspect-square overflow-hidden">
                 <img 
                   src={photos.fatherAndBrotherSquare}
                   alt="生活日常" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                 />
               </div>
             </div>
          </ScrollReveal>

        </div>

        {/* Right: Vertical Text */}
        <div className="md:w-2/5 w-full flex justify-center md:justify-end h-[50vh] md:h-[60vh]">
          <ScrollReveal delay={600}>
            <div className="flex flex-row-reverse gap-8 h-full items-start pt-10">
              <h2 className="text-4xl md:text-5xl font-calligraphy text-ink vertical-text border-l-2 border-seal pl-4">
                墨舞禪心
              </h2>
              <div className="h-full pt-12">
                 <p className="font-serif text-lg leading-loose text-ink/80 vertical-text text-justify h-[80%]">
                    一人健康，全家幸福。
                 </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Decorative Connector to next section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-0 opacity-20 pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <span className="font-calligraphy text-4xl">傳承</span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-ink/0 via-ink to-ink/0"></div>
        </div>
      </div>

    </section>
  );
};