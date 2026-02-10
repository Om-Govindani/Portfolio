import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function Projects() {
    return (
        <div className='relative w-full h-fit gap-8'>
            
            <div className='sticky top-0 pt-4 z-[100] bg-neutral-900 shadow-none w-full h-[176px] flex flex-col justify-center text-[50px] md:text-[90px] font-bold leading-none text-center lg:text-left'>
                <div className='text-white'>PROJECT</div>
                <div className='text-[rgb(54,51,52)]'>SHOWCASE</div>
            </div>

            <div className='relative w-full'>
                <ScrollStack>
                    
                    <ScrollStackItem image="/GurkiBani.jpeg">
                        <div className="flex justify-between items-start w-full">
                            <span className="text-yellow-500 font-mono text-xl md:text-2xl">01</span>
                            <h3 className="text-yellow-500 font-bold text-sm md:text-base uppercase tracking-widest">GurKiBani</h3>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Gurbani Searcher</h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md">React based PWA to explore Gurbani</p>
                        </div>
                        {/* Buttons Section */}
                        <div className="mt-auto flex gap-4">
                            <a href="https://github.com/Om-Govindani/GurKiBani" className="px-3 py-1 md:px-5 md:py-2 lg:px-5 lg:py-2 rounded-full border border-yellow-500 text-white text-sm hover:bg-yellow-500 hover:text-black transition-all">GitHub Repo</a>
                            <a href="https://gurkibani.govindani.me" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>
                    <ScrollStackItem image="/Dichotomyofame.jpeg">
                        <div className="flex justify-between items-start w-full">
                            <span className="text-orange-500 font-mono text-xl md:text-2xl">02</span>
                            <h3 className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-widest">Dichotomyofame</h3>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Personal Portfolio</h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md">React based portfolio website</p>
                        </div>
                        <div className="mt-auto flex gap-4">
                            <a href="https://github.com/Om-Govindani/portfolio" className="px-5 py-2 rounded-full border border-orange-500 text-white text-sm hover:bg-orange-500 hover:text-black transition-all">GitHub Repo</a>
                            <a href="https://om.govindani.me/" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>
                    <ScrollStackItem image="/MyMemos.jpeg">
                        <div className="flex justify-between items-start w-full">
                            <span className="text-blue-500 font-mono text-xl md:text-2xl">03</span>
                            <h3 className="text-blue-500 font-bold text-sm md:text-base uppercase tracking-widest">MyMemos</h3>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">NoteMaking App</h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md">MERN Based Easy-to-use Note app</p>
                        </div>
                        <div className="mt-auto flex gap-4">
                            <a href="https://github.com/Om-Govindani/Notes" className="px-5 py-2 rounded-full border border-blue-500 text-white text-sm hover:bg-blue-500 hover:text-black transition-all">GitHub Repo</a>
                            <a href="" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>

                    
                    <ScrollStackItem image="/NerdDocs.jpeg">
                        <div className="flex justify-between items-start w-full">
                            <span className="text-green-500 font-mono text-xl md:text-2xl">04</span>
                            <h3 className="text-green-500 font-bold text-sm md:text-base uppercase tracking-widest">NerdDocs</h3>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">AI Learning</h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md">MERN based AI-developed Tech Course Site</p>
                        </div>
                        <div className="mt-auto flex gap-4">
                            <a href="https://github.com/Om-Govindani/NerdDocs" className="px-5 py-2 rounded-full border border-green-500 text-white text-sm hover:bg-green-500 hover:text-black transition-all">GitHub Repo</a>
                            <a href="https://nerddocs.vercel.app" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>

                    <ScrollStackItem image="/VectorJobs.jpeg">
                        <div className="flex justify-between items-start w-full">
                            <span className="text-purple-500 font-mono text-xl md:text-2xl">05</span>
                            <h3 className="text-purple-500 font-bold text-sm md:text-base uppercase tracking-widest">VectorJobs</h3>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Job Board</h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md">MERN based Client - Freelancer Matchmaking App</p>
                        </div>
                        <div className="mt-auto flex gap-4">
                            <a href="https://github.com/Om-Govindani/VectorJobs-SKITM" className="px-5 py-2 rounded-full border border-purple-500 text-white text-sm hover:bg-purple-500 hover:text-black transition-all">GitHub Repo</a>
                            <a href="https://vectorjobs.netlify.app/" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>
                </ScrollStack>
                
            </div>
        </div>
    )
}