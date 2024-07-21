import React from 'react'
import Layout from '../components/Layout/Layout'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <ParallaxProvider >
            <div>
                <div className='relative overflow-hidden bg-white p-5 '>
                    <Navbar />
                    <Parallax
                        className='-z-1 absolute lg:w-[60%] w-[100%] left-[60%] lg:top-[30%] top-[40%]'
                        translateX={['0', '-100%']}
                        translateY={['0', '-100%']}
                        scale={['0', '3']}
                    >
                        <img className='' src='images/Saly-43.png' alt='Images'
                        // data-scroll data-scroll-speed='1'
                        />
                    </Parallax>
                    {/* Banner */}
                    <div className=" z-10 w-full">
                        <div className="border-2 border-black rounded-xl shadow-inner shadow-amber-400 lg:max-w-[] w-full mx-auto sm:px- lg:px-8 py-10 lg:py-16">
                            <div className="lg:max-w-6xl text-center mx-auto">
                                {/* Title */}
                                <div className="lg:max-w-6xl">
                                    <h1 className="bowlby-one-regular block text-black text-[10vw] md:text-5xl lg:text-8xl">
                                        India’s <span className='bg-gradient-to-l from-fuchsia-500 to-rose-500 bg-clip-text text-transparent'>First Social Media</span> Engagement Driven Company!
                                    </h1>
                                </div>
                                {/* End Title */}
                                {/* <div className="mt-5 max-w-6xl">
                                    <p className=" font-semibold text-lg text-black/50">100% guaranteed audience interactions</p>
                                </div> */}
                                {/* Buttons */}
                                <div className="mt-8 gap-3 flex justify-center">
                                    <a className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold rounded-full shadow-md shadow-black border border-transparent bg-indigo-500 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none" href="#contact">
                                        Get started now
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </a>
                                </div>
                                {/* End Buttons */}

                            </div>
                        </div>
                    </div>


                    <div className="z-10 relative text-center h-screen max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* Grid */}
                        <div className="grid gap-6 grid-cols-1 sm:gap-12 lg:grid-cols-3 lg:gap-8">
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-black ">Accuracy rate</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-indigo-500">99.95%</p>
                                <p className="mt-1 text-black ">in fulfilling orders</p>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-black ">Startup businesses</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-indigo-500">2,000+</p>
                                <p className="mt-1 text-black">partner with UpliftU</p>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-black ">Happy customer</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-indigo-500">85%</p>
                                <p className="mt-1 text-black">this year alone</p>
                            </div>
                        </div>
                        {/* End Grid */}
                    </div>


{/* Horizontal Tabs */}




                </div>
            </div>
        </ ParallaxProvider >

    )
}

export default Home
