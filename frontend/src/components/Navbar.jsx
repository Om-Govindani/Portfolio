import React from 'react';
import { Home, Wrench, Trophy, Briefcase, Mail } from 'lucide-react'; 

export default function Navbar() {
    const navLinks = [
        { name: 'Home', target: 'home', icon: <Home size={20} /> },
        { name: 'Toolbox', target: 'toolbox', icon: <Wrench size={20} /> },
        { name: 'Achievements', target: 'achievements', icon: <Trophy size={20} /> },
        { name: 'Projects', target: 'projects', icon: <Briefcase size={20} /> },
        { name: 'Contact', target: 'contact', icon: <Mail size={20} /> },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className='fixed top-4 left-1/2 -translate-x-1/2 z-[200] bg-neutral-900/40 backdrop-blur-xl border border-white/10 px-2 rounded-2xl flex gap-4 md:gap-6 items-center shadow-2xl'>
            {navLinks.map((link) => (
                <button
                    key={link.name}
                    onClick={() => scrollToSection(link.target)}
                    className='group relative p-3 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-300'
                >
                    {link.icon}
                    
                    
                    <span className='absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter'>
                        {link.name}
                    </span>
                </button>
            ))}
        </nav>
    );
}