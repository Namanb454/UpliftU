import React from 'react'
import Layout from '../components/Layout/Layout'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import { motion } from 'framer-motion'
import Services from '../components/Services'

const Home = () => {

    return (
        <ParallaxProvider >
            <div className=''>
                <div className='relative overflow-hidden p-5 text-balance font-[quench]'>

                    <Navbar />

                    {/* Banner */}
                    <div className=" z-10 w-full ">

                        <div class="overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                        </div>

                        <div className="backdrop-blur- rounded-xl shadow-inner w-full mx-auto sm:px- lg:px-8 py-10 lg:py-16">
                            <div className="lg:max-w-5xl text-center mx-auto">
                                {/* Title */}
                                <div className="lg:max-w-5xl">
                                    <h1 className="bowlby-one-regular block text-black text-[10vw] md:text-5xl lg:text-7xl">
                                        India’s <span className='bg-gradient-to-l from-indigo-500 to-amber-400 bg-clip-text text-transparent'>First Social Media</span> Engagement Driven Company!
                                    </h1>
                                </div>
                                {/* End Title */}
                                {/* <div className="mt-5 max-w-6xl">
                                    <p className=" font-semibold text-lg text-black/50">100% guaranteed audience interactions</p>
                                </div> */}
                                {/* Buttons */}
                                <div className="mt-8 gap-3 flex justify-center">
                                    <a className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold border-r-4 border-b-4 border-indigo-500 bg-black text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none" href="#contact">
                                        Get started now
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </a>
                                </div>
                                {/* End Buttons */}

                            </div>
                        </div>
                    </div>


                    <div className="z-10 relative text-center max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* Grid */}
                        <div className="grid gap-6 grid-cols-1 sm:gap-12 lg:grid-cols-3 lg:gap-8">
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-black ">Accuracy rate</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-indigo-500 font-sans">99.95%</p>
                                <p className="mt-1 text-black ">in fulfilling orders</p>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-black ">Startup businesses</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-indigo-500 font-sans">2,000+</p>
                                <p className="mt-1 text-black">partner with UpliftU</p>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-black ">Happy customer</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-indigo-500 font-sans">85%</p>
                                <p className="mt-1 text-black">this year alone</p>
                            </div>
                        </div>
                        {/* End Grid */}
                    </div>
                    {/* Horizontal Tabs */}
                </div>



                {/* Services  */}
                <Services />


                {/* Process */}
                <Process />



                <div className='overflow-hidden h- py-24'>

                    <Parallax
                        scale={['0', '100']}
                        speed={['10']}
                        slowerScrollRate={true}
                    >
                        <div className='w-40 h-40 bg-black rounded-full my-40 mx-auto'>

                        </div>
                    </Parallax>
                </div>


            </div>
        </ ParallaxProvider >

    )
}

export default Home
