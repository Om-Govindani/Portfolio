export default function ConnectionForm(){
    return(
        <div className='h-fit w-full flex flex-col gap-12.5'>
            <div className='w-full h-fit flex flex-col text-[50px] md:text-[90px] font-bold leading-[50px] md:leading-[90px] gap-0 text-center lg:text-left'>
              <div className='text-white'>LET'S WORK</div>
              <div className='text-[rgb(54,51,52)]'>TOGETHER</div>
            </div>
            <form className='flex flex-col w-full h-fit gap-5 text-[rgb(136,136,136)]'>
                <div className="w-full">
                    <div className="w-full flex-1 flex flex-col gap-2.5 text-[12px]">
                        <div>Subject</div>
                        <input id="subject" 
                            autoComplete="Subject" 
                            placeholder="Can we connect ?" 
                            className="w-full h-10 text-[14px] rounded-lg bg-[rgb(54,51,52)] text-white p-3 outline-none focus:ring focus:ring-[rgb(244 , 108 , 56)] disabled:cursor-not-allowed"
                            type="text"
                            name="subject"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex-1 flex flex-col gap-2.5 text-[12px]">
                        <div>Message</div>
                        <textarea id="Message" 
                            autoComplete="Message" 
                            placeholder="Message" 
                            className="w-full min-h-[145px] text-[14px] rounded-lg bg-[rgb(54,51,52)] text-white p-3 outline-none focus:ring focus:ring-[rgb(244 , 108 , 56)] disabled:cursor-not-allowed resize-none"
                            type="text"
                            name="Message"
                        ></textarea>
                    </div>
                </div>
                <button type="submit" class="w-full h-10 bg-[rgb(244,108,56)] rounded-lg text-white flex items-center justify-center text-[14px] font-semibold hover:bg-[rgb(222,98,49)] hover:cursor-pointer disabled:cursor-not-allowed">Submit</button>
            </form>
        </div>
    )
}