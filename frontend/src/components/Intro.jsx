import React from 'react';

export default function Intro() {
    return (
        <div id="home" className='relative w-full h-fit flex flex-col justify-center overflow-hidden lg:mt-10'>
            
            <div className='w-full mx-auto px-7.5 lg:p-10 flex flex-col gap-20'>
                
                <div className='flex flex-col gap-10'>
                    <span className='text-[65px] md:text-[100px] lg:text-[130px] font-serif italic leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]'>
                        Software
                    </span>
                    <span className='text-[80px] md:text-[120px] lg:text-[140px] font-black font-semibold leading-[0.8] text-white uppercase tracking-tighter'>
                        Developer
                    </span>
                </div>

                
                <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    
                    
                    <div className='border-l-2 border-orange-500 pl-6 py-2'>
                        <p className='text-lg md:text-2xl font-light text-neutral-400 italic tracking-wide uppercase'>
                            "GOD IS IN DETAILS"
                        </p>
                    </div>

                    
                    <div className="flex gap-4">
                        <a 
                            href="https://drive.google.com/file/d/1cjOfzY10CSOUHPVucsbnyHYaTASpqiMz/view?usp=drive_link" 
                            download
                            className="px-6 py-3 rounded-full border border-orange-500 text-white text-xs md:text-sm font-medium hover:bg-orange-500 transition-all uppercase tracking-wider"
                        >
                            Download Resume
                        </a>
                        <button 
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:bg-neutral-200 transition-all uppercase tracking-wider"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}