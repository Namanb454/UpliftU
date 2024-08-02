import React from 'react'
import Layout from '../components/Layout/Layout'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import { motion } from 'framer-motion'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import OurResults from '../components/OurResults'
import OurWork from './OurWork'

const Home = () => {

    return (
        <ParallaxProvider >
            <div className='font-[quench]'>
                <div className='relative overflow-hidden p-5 text-balance font-[quench]'>

                    <Navbar />

                    {/* Banner */}
                    <div className=" z-10 w-full ">

                        <div class="overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                        </div>

                        <div className="backdrop-blur- rounded-xl shadow-inner w-full mx-auto sm:px- lg:px-8 py-10 lg:py-24">
                            <div className="lg:max-w-5xl text-center mx-auto">
                                {/* Title */}
                                <div className="lg:max-w-5xl">
                                    <h1 className="font-[genica] block text-black text-[12vw] md:text-5xl lg:text-8xl">
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



                {/* <div className='overflow-hidden h- py-24'>

                    <Parallax
                        scale={['0', '20']}
                        className='-z-1'
                    >
                        <div className=' w-40 h-40 bg-black rounded-full my-40 mx-auto'></div>
                    </Parallax>
                </div> */}

                <Parallax
                    opacity={['0', '3']}
                    className='relative lg:px-24 py-24 px-5 mx-auto font-[quench] overflow-hidden'>
                    <Parallax
                        scale={['0', '4']}
                        translateX={['-100', '100']}
                        scaleZ={['0', '1']}
                        // translateY={['100', '-100']}

                        className='bg-neutral-900 rounded-trfull absolute w-screen h-screen left-0 -z-10 overflow-hidden'>

                    </Parallax>
                    <Parallax
                        opacity={['0', '3']}
                        className="mx-auto max-w-7xl text-balance">
                        <h1 className="font-[genica] pb-10 z-10 block text-neutral-200 text-[10vw] md:text-5xl lg:text-7xl">
                            Difficulties Faced On
                            <span className="bg-gradient-to-l z-10 from-indigo-500 to-amber-400 bg-clip-text text-transparent">&nbsp;Social Media</span>
                        </h1>
                        <div className=" grid lg:space-x-10 grid-cols-1 lg:grid-cols-2">
                            <div className="md:order-first ">
                                <dl className="grid grid-cols-2 gap-4 list-none lg:gap-6 text-pretty lg:mt-0 mt-5">
                                    <div className='bg-amber-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-white'>❖</div>
                                        <dt className="mt-4 font-medium text-black ">
                                            Large followings with
                                            low engagement

                                            (likes, comments)

                                            = wasted potential.

                                            <span className='font-sans font-semibold'>&nbsp;25</span>k followers but only
                                            <span className='font-sans font-semibold'>&nbsp;100</span> likes
                                        </dt>

                                    </div>
                                    <div className='bg-blue-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-white'>❖</div>
                                        <dt className="mt-4 font-medium text-black">
                                            In-house teams lack
                                            the creativity to
                                            produce engaging
                                            videos.                                        </dt>

                                    </div>
                                    <div className='bg-lime-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-white'>❖</div>
                                        <dt className="mt-4 font-medium text-black">Wasting money on
                                            boosting reels that
                                            hurt your reach
                                            (algorithm!).</dt>

                                    </div>
                                    <div className='bg-red-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-white'>❖</div>
                                        <dt className="mt-4 font-medium text-black">
                                            Relying solely on
                                            posts that don't spark
                                            conversation or
                                            action.
                                        </dt>

                                    </div>
                                </dl>
                            </div>
                            <div className="order-first block mt-12 aspect-square lg:mt-0 items-center">
                                <div className="p-2 overflow-hidden shadow-lg items-center rounded-3xl">
                                    <img alt="#_" className="relative w-fit rounded-2xl drop-shadow-2xl " src="/images/section.gif" />
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </Parallax>

                <OurWork />

                <Testimonials />

                <Contact />

            </div>
        </ ParallaxProvider >

    )
}

export default Home
