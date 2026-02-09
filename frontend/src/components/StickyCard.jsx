import joint2 from '../assets/joint2.svg'
import joint1 from '../assets/joint.svg'
import Photo from '../assets/Photo.jpg'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";


export default function StickyCard(){
    return(
        <div className=" lg:sticky lg:top-[30px] relative lg:h-160 lg:w-86 md:h-135 sm:h-115.25 w-full h-115.25 bg-white rounded-2xl overflow-hidden ease-in-out transition-all duration-300 lg:flex-none">
            <img src={joint2} alt="joint2" className='absolute lg:top-0 lg:left-0 md:left-32 md:-top-8 sm:left-2 sm:-top-6 left-2 -top-6 w-48.5 h-25' />
            <img src={joint1} alt="joint1" className='absolute lg:bottom-33 lg:-left-35 md:bottom-16 md:-left-32 sm:-left-50 sm:bottom-43 -left-50 bottom-43 w-67.5 h-41.5 ' />
            <div className='w-full h-full flex flex-col items-center ease-in-out transition-all duration-300 py-7.5 px-5 gap-6'>
                <div className='w-full h-1/2 lg:h-1/2 md:h-3/5 flex items-center'>
                    <img src={Photo} alt='photo' className='h-[210px] pt-2 sm:h-50 md:h-71 mx-auto rounded-2xl ease-in-out transition-all duration-300'/>
                </div>
                <div className='w-full h-1/2 lg:h-1/2 md:h-2/5 px-5 pb-6 flex flex-col lg:justify-between'>
                    <h1 className='w-full h-18 font-bold font-sans text-neutral-900 text-[36px] text-center'>Om Govindani</h1>
                    <div className='flex-col items-center'>
                        <h1 className='w-full max-w-sm text-neutral-500 font-semibold text-center mx-auto'>A Software Engineer who has developed countless innovative solutions.</h1>
                        <div className="flex justify-center gap-6 mt-5 text-orange-500/90">
                            <button className="hover:scale-110 transition" title='Github'><FaGithub size={28} /></button>
                            <button className="hover:scale-110 transition" title='Linkedin'><FaLinkedin size={28} /></button>
                            <button className="hover:scale-110 transition" title="Leetcode"><SiLeetcode size={28} /></button>
                            <button className="hover:scale-110 transition" title="CodeForces"><SiCodeforces size={28} /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}