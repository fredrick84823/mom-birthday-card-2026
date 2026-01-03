import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { photos } from '../config';

export const SectionOne: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center py-20 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-10 left-10 opacity-[0.03] text-[15rem] font-calligraphy pointer-events-none select-none text-ink transform -rotate-12 z-0">
        川棠
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        
        {/* Left: Text Area (Styled as a Letter) */}
        <div className="md:w-1/2 flex flex-col space-y-8 order-2 md:order-1">
          <ScrollReveal>
            <div className="flex items-center space-x-4 mb-6">
               <span className="h-[1px] w-12 bg-ink/30"></span>
               <h2 className="text-3xl md:text-4xl font-calligraphy text-ink">川棠韻律</h2>
            </div>
            
            {/* Stationery Card Design */}
            <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 rounded-sm transform rotate-1 md:hover:rotate-0 transition-transform duration-700">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-seal/5 to-transparent pointer-events-none"></div>
              
              <article className="font-serif text-ink space-y-6 leading-loose text-justify relative z-10">
                <h1 className="text-2xl font-calligraphy text-ink/90 mb-4 tracking-widest">Dear 媽媽：</h1>
                
                <p className="text-ink/80">
                  媽媽～謝謝妳來當我們的媽媽，教會我體會很多事物，讓我學會好奇然後努力持之以恆的練習～
                </p>
                
                <p className="text-ink/80">
                  最近逐漸開始體會到，對於一個身分的想像與雛形都來自妳跟爸爸，我們家，想要建立溫馨的家庭關係、或是作為多重身份的母親、心靈陪伴者、家長…等等的角色。
                </p>
                
                {/* Highlighted Quote Block */}
                <blockquote className="my-6 pl-4 border-l-4 border-seal bg-paper/60 p-4 italic text-ink/70 text-sm md:text-base rounded-r-lg">
                  「有時候，我會默默開始用妳的方式收塑膠帶、會把流理台一起在下廚之間收拾乾淨、丟吸管之前把吸管減一半……即使有別的方式，但這樣也挺好的，在生活之中還是能常常想妳」
                </blockquote>
                
                <p className="text-ink/80">
                  很開心媽媽在退休之後，身邊依舊有許多好友相伴，很多活動豐富著妳的生活，希望今年在課堂減少或是退出學校之後，還能保有活力的探索世界、也能找到讓自己可以放鬆平靜的平衡～
                </p>
                
                <p className="text-ink/80 font-medium">
                  希望今年我們可以再一起旅行：）
                </p>
                
                <div className="pt-6 border-t border-ink/10 mt-6 text-right">
                  <p className="font-calligraphy text-xl text-seal">最後祝福最親愛的媽媽，生日快樂！</p>
                  <p className="text-ink/60 text-sm mt-2 tracking-widest">身體健康、平安幸福</p>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Polaroid Photo Area */}
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center items-center">
           <ScrollReveal delay={400} className="relative">
             {/* Decorative tape */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-stone-200/60 backdrop-blur-sm transform -rotate-2 z-20 shadow-sm mix-blend-multiply"></div>
             
             {/* Polaroid Frame */}
             <div className="relative bg-white p-3 md:p-4 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out w-80 md:w-96 border border-gray-100">
                {/* Photo Placeholder A - Adjusted to portrait aspect ratio to fill space */}
                <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative grayscale-[10%] contrast-[1.05]">
                   <img 
                     src={photos.sister}
                     alt="姊姊一家" 
                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                   />
                   {/* Subtle vignette */}
                   <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none"></div>
                </div>

                {/* Tag Label: Top Right - More Transparent */}
                <div className="absolute top-6 right-6 z-20 bg-white/60 backdrop-blur-sm px-3 py-1 shadow-sm border border-stone-100/30 rounded-[1px] transform rotate-1">
                  <span className="text-xs font-serif text-ink/90 tracking-widest font-semibold">真和政恩</span>
                </div>
             </div>
             
             {/* Background decorative element for photo */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 border-2 border-ink/5 rounded-full z-0 pointer-events-none"></div>
           </ScrollReveal>
        </div>

      </div>
    </section>
  );
};