import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function Projects() {
    return (
        <div className='relative w-full h-fit'>
            {/* Header Sticky Context */}
            <div className='sticky top-0 pt-4 z-[100] bg-neutral-900 w-full h-[160px] flex flex-col justify-center text-[50px] md:text-[90px] font-bold leading-none text-center lg:text-left'>
                <div className='text-white'>PROJECT</div>
                <div className='text-[rgb(54,51,52)]'>SHOWCASE</div>
            </div>

            <div className='relative w-full'>
                <ScrollStack>
                    {/* Project 1 */}
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
                            <a href="#" className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all">GitHub Repo</a>
                            <a href="#" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>

                    {/* Project 2 */}
                    <ScrollStackItem image="/MyMemos.jpeg">
                        <div className="flex justify-between items-start w-full">
                            <span className="text-blue-500 font-mono text-xl md:text-2xl">02</span>
                            <h3 className="text-blue-500 font-bold text-sm md:text-base uppercase tracking-widest">MyMemos</h3>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">NoteMaking App</h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md">MERN Based Easy-to-use Note app</p>
                        </div>
                        <div className="mt-auto flex gap-4">
                            <a href="#" className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all">GitHub Repo</a>
                            <a href="#" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>

                    {/* Project 3 */}
                    <ScrollStackItem image="/NerdDocs.jpeg">
                        <div className="flex justify-between items-start w-full">
                            <span className="text-green-500 font-mono text-xl md:text-2xl">03</span>
                            <h3 className="text-green-500 font-bold text-sm md:text-base uppercase tracking-widest">NerdDocs</h3>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">AI Learning</h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md">MERN based AI-developed Tech Course Site</p>
                        </div>
                        <div className="mt-auto flex gap-4">
                            <a href="#" className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all">GitHub Repo</a>
                            <a href="#" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>

                    <ScrollStackItem image="/VectorJobs.jpeg">
                        <div className="flex justify-between items-start w-full">
                            <span className="text-red-500 font-mono text-xl md:text-2xl">04</span>
                            <h3 className="text-red-500 font-bold text-sm md:text-base uppercase tracking-widest">VectorJobs</h3>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Job Board</h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md">MERN based Client - Freelancer Matchmaking App</p>
                        </div>
                        <div className="mt-auto flex gap-4">
                            <a href="#" className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all">GitHub Repo</a>
                            <a href="#" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">Live Demo</a>
                        </div>
                    </ScrollStackItem>
                </ScrollStack>
                
            </div>
        </div>
    )
}