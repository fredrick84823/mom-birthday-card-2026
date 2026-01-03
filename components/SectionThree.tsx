import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { photos } from '../config';

export const SectionThree: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-center py-24 md:py-32 overflow-hidden">
      
      {/* Background Graphics: Ink Splashes and Decor */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-[10%] w-[1px] h-full bg-ink/5"></div>
         
         {/* Top Left Decorative Ink Character Background */}
         <div className="absolute -top-10 -left-10 text-[12rem] font-calligraphy text-ink/[0.03] select-none z-0 transform rotate-12">
            家
         </div>

         <div className="absolute top-20 right-[15%] w-[1px] h-32 bg-ink/10"></div>
         
         {/* Water Ripple Effect Positioned near text */}
         <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-ink/5 animate-ripple"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between h-full">
        
        {/* Left: Text Content (The Letter) */}
        <div className="md:w-1/2 order-2 md:order-1 flex gap-6 md:gap-10">
          
          {/* Vertical Title (Like a book spine) - Decorative for desktop */}
          <ScrollReveal delay={200} className="hidden md:block pt-10">
             <div className="w-[1px] h-32 bg-seal mx-auto mb-4"></div>
             <h2 className="text-4xl font-calligraphy text-ink vertical-text tracking-widest opacity-80">
                哲思水木
             </h2>
             <div className="mt-4 flex flex-col gap-2 items-center text-xs font-serif text-ink/40">
                <span>洪</span>
                <span>•</span>
                <span>李</span>
             </div>
          </ScrollReveal>

          {/* Letter Body Wrapper */}
          <div className="flex-1">
             <ScrollReveal>
                {/* Header matching Section One style */}
                <div className="flex items-center space-x-4 mb-6">
                   <span className="h-[1px] w-12 bg-ink/30"></span>
                   <h2 className="text-3xl md:text-4xl font-calligraphy text-ink">哲思靈韻</h2>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 md:p-10 rounded-sm shadow-sm border border-stone-200/50">
                   <div className="font-serif text-ink space-y-6 leading-loose text-justify text-[0.95rem] md:text-base">
                      <p className="font-calligraphy text-xl text-ink/90">Dear 媽：</p>
                      
                      <p className="text-ink/80">
                        隨著年紀的增長，更加意識到生活幸福滿足是件多麼可貴的事情。從小到大感受到來自妳和爸滿滿的愛，以及開朗、自由地教育風格，這樣的環境對我來說是這輩子最大的禮物。
                      </p>

                      <p className="text-ink/80">
                        今年看了更多靈性哲學類的書籍，儘管認為自己越來越理解世界的運作，認為一切都是註定好的，但在面對困難時，仍然很難真正地臣服。
                      </p>

                      <div className="pl-4 border-l-2 border-seal/40 italic text-ink/70">
                         臣服是一輩子的課題，平時我遇到困難、苦痛時，很難真正地臣服，很難相信這一切對我來說都是好的。因此更無法想像妳所面對的課題，難度有多高。
                      </div>

                      <p className="text-ink/80">
                         然而我相信，每個人一定具備著克服這一生所有困境的能力，也因此彼此的課題才會在這個時間點出現。
                      </p>

                      <p className="text-ink/80">
                         因此我覺得最好的祝福，是祝福媽能夠順著自己的心走，能夠相信一切發生的都是好事。即使有時候對這些信念、對於一切的安排，沒那麼有信心的時候，也沒關係，也是好事。更重要的是，這些困難的時刻，我們都會陪著妳。
                      </p>

                      <div className="pt-8 text-right">
                         <p className="font-calligraphy text-2xl text-seal mb-2">祝媽生日快樂！</p>
                         <p className="font-calligraphy text-lg text-ink/60">愛妳的凱</p>
                      </div>

                      {/* New Message Section */}
                      <div className="mt-8 pt-8 border-t border-dashed border-ink/20">
                        <p className="font-calligraphy text-xl text-ink/90 mb-4">興凱媽媽生日快樂 🫶🫶</p>
                        <p className="text-ink/80">
                          很感謝一直費心照顧興凱還有我。
                          <br />
                          祝您身體健康、順心如意、天天開心，焦慮煩惱通通退散！
                        </p>
                      </div>

                   </div>
                </div>
             </ScrollReveal>
          </div>
        </div>

        {/* Right: Images (Overlapping Collage) */}
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center items-center w-full">
           <div className="relative w-full max-w-[340px] md:max-w-md h-auto md:h-[500px] flex flex-col md:block items-center py-10 md:py-0">
             
             {/* Back Image (With Mom) - Adjusted for mobile safe area */}
             <ScrollReveal delay={200} className="relative md:absolute md:top-0 md:right-4 z-10 w-60 md:w-72 self-end mr-2 md:mr-0 mb-[-6rem] md:mb-0">
               <div className="bg-white p-2 shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-700">
                  <div className="aspect-[3/4] overflow-hidden grayscale-[20%] sepia-[10%]">
                    <img 
                      src={photos.withMom} 
                      alt="與媽媽合照" 
                      className="w-full h-full object-cover"
                    />
                  </div>
               </div>
             </ScrollReveal>

             {/* Front Image (Couple) - Adjusted for mobile safe area */}
             <ScrollReveal delay={400} className="relative md:absolute md:bottom-0 md:left-4 z-20 w-56 md:w-64 self-start ml-2 md:ml-0">
               <div className="relative bg-white p-2 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700 border border-gray-100">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={photos.couple} 
                      alt="夫妻合照" 
                      className="w-full h-full object-cover contrast-[1.05]"
                    />
                  </div>
                  
                  {/* Tag Label: Top Left - More Transparent */}
                  <div className="absolute top-4 left-4 z-20 bg-white/60 backdrop-blur-sm px-3 py-1 shadow-sm border border-stone-100/30 rounded-[1px] transform rotate-1">
                    <span className="text-xs font-serif text-ink/90 tracking-widest font-semibold">凱和儀娟</span>
                  </div>
               </div>
             </ScrollReveal>

             {/* Decor: Circle behind */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 border border-ink/10 rounded-full z-0 pointer-events-none"></div>
           </div>
        </div>

      </div>
    </section>
  );
};