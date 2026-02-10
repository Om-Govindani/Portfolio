import React from 'react';

export default function Achievements() {
    return (
        <div className='w-full flex flex-col gap-10 py-10'>
            <div className='w-full h-fit flex flex-col text-[50px] md:text-[90px] font-bold leading-none text-center lg:text-left'>
                <div className='text-white'>MILESTONES &</div>
                <div className='text-[rgb(54,51,52)]'>RECOGNITIONS</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-4 h-fit">
                <div className="md:col-span-2 bg-[#1a1a1a] border border-white/5 rounded-[30px] p-8 flex flex-col justify-between hover:border-orange-500/30 transition-all duration-500 group">
                    <div className="flex justify-between items-start">
                        <span className="text-orange-500 font-mono text-sm">2022-23</span>
                        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Competitive Programming Lead</h3>
                        <p className="text-gray-500 font-medium">Google Developer Student Clubs (GDSC)</p>
                    </div>
                </div>

                <div className="md:row-span-3 bg-[#1e1e1e] border border-white/5 rounded-[30px] pt-10 p-8 flex flex-col justify-between hover:border-yellow-500/30 transition-all duration-500">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">LeetCode Stats</h3>
                        <div className="space-y-6">
                            <StatBar label="Easy" count={88} total={211} color="bg-green-500" />
                            <StatBar label="Medium" count={107} total={211} color="bg-yellow-500" />
                            <StatBar label="Hard" count={16} total={211} color="bg-red-500" />
                        </div>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                        <span className="text-4xl font-bold text-white">211</span>
                        <p className="text-gray-500 text-sm">Questions Solved</p>
                    </div>
                </div>

                <div className="bg-[#141414] border border-white/5 rounded-[30px] p-6 flex items-center gap-4 hover:border-blue-500/30 transition-all group">
                    <div className="text-blue-500 text-2xl font-bold">
                        <img width="50" height="50" src="https://img.icons8.com/3d-fluency/500/meta.png" alt="meta"/>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">CP Lead - META</h4>
                        <p className="text-gray-500 text-[10px]">Cohort 2022-23</p>
                    </div>
                </div>

                <div className="bg-[#141414] border border-white/5 rounded-[30px] p-6 flex items-center gap-4 hover:border-cyan-500/30 transition-all">
                    <div className="text-cyan-500 text-2xl font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">CP Lead - MLSA</h4>
                        <p className="text-gray-500 text-[10px]">Microsoft Student Ambassador</p>
                    </div>
                </div>

                <div className="md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/5 rounded-[30px] p-8 flex justify-between items-center hover:border-purple-500/30 transition-all duration-500">
                    <div>
                        <p className="text-purple-500 font-mono text-xs mb-2">PLATFORM RANKING</p>
                        <h3 className="text-2xl font-bold text-white">Codeforces</h3>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-white">1032</div>
                        <p className="text-gray-500 text-xs">Max Rating: 1132</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

function StatBar({ label, count, total, color }) {
    const width = (count / total) * 100;
    return (
        <div className="w-full">
            <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">{label}</span>
                <span className="text-white font-mono">{count}</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full`} style={{ width: `${width}%` }} />
            </div>
        </div>
    );
}