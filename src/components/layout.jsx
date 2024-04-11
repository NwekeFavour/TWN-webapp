import React from 'react';
import './layout.css';
import Image from './twn.jpg';
import ImageTwo from './canva.jpg';


function layout(props) {
    return (
        <div className='bdy'>
            <div className='flex justify-start space-x-3'>
                <img className='size-10' src={Image}></img>
                <p className='nav  text-white capitalize pt-2'>tech with nf</p>
                <div className='absolute top-8 end-10 '>
                    <img className='size-10 rotate-45 skew-y-6' src={Image}/>
                </div>
            </div>
            <div className=''>
                <div className='typo font-bold text-md md:text-8xl lg:text-8xl xl:text-6xl relative w-full'>
                    <div className='absolute  inset-x-0 top-0 h-16'>
                        <h1 id='head' className='w-full ml-7 overflow-hidden text-white uppercase'>tech with nf</h1>
                    </div>
                    <div className='uppercase   -z-40 text-white text-md md:text-8xl lg:text-3xl xl:text-6xl absolute p-10 inset-0'>
                        <p id='txt2' className='pb-40 xl:pb-10  pt-10 pl-10 S-first'>tech with nf</p>
                        <div className=''> 
                            <p className='first'>tech with nf</p>
                        </div>
                        <div id='overlay' class="grid capitalize absolute  right-10  grid-flow-row auto-rows-max">
                            <div>medium: Nf</div>
                            <div className='uppercase'>ig: @TECH_WITH_NF</div>
                            <div className='normal-case'>X: @twnf19</div>
                        </div>
                        <div>
                            <p className='pt-10 second'>tech with nf</p>
                        </div>
                        <div>
                            <p className='pt-10 pb-5 third'>tech with nf</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <div id='text' className='relative animate-bounce w-6 h-6 hidden md:block col-end-7 col-span-2 bg-sky-400'>
                              <p className='absolute bottom-0 bg-#CC5500 text-lg text-black text-base '>Yo! Welcome to my podcast. "Tech with NF" is a unique podcast that blends tech exploration and unusual and often ovelooked topics....</p>
                            </div>
                            <div id='text' className='relative animate-bounce w-5 h-6 md:hidden fixed right-35 w-full '>
                              <p className=' text-base capitalize '>Yo! Welcome to my podcast. "Tech with NF" is a unique podcast that blends tech exploration and unusual and often ovelooked topics........</p>
                            </div>
                           
                        </div>
                        <div className=' '>
                            <div className='grid relative  justify-end'>
                                <button type="button" class="btn inline-flex w-full justify-center rounded-md px-3 py-4 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-6 sm:w-auto">read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex  mt-6 mr-4 justify-content'>
                        <img id='img2' className='z-5  w-full h-auto object-cover max-w-lg' src={ImageTwo}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default layout;