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
import About from './About'

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
                                    <h1 className="font-[genica] block text-black text-[12vw] md:text-5xl xl:text-[6vw]">
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
                        className="mx-auto text-balance">
                        <h1 className="font-[genica] pb-10 z-10 block text-neutral-200 text-[10vw] md:text-5xl lg:text-[5vw]">
                            Difficulties Faced On
                            <span className="bg-gradient-to-l z-10 from-indigo-500 to-amber-400 bg-clip-text text-transparent">&nbsp;Social Media</span>
                        </h1>
                        <div className=" grid lg:space-x-10 grid-cols-1 lg:grid-cols-2">
                            <div className="md:order-first ">
                                <dl className="grid grid-cols-2 gap-4 list-none lg:gap-6 text-pretty lg:mt-0 mt-5">
                                    <div className='bg-amber-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-white'>❖</div>
                                        <dt className="mt-4 font-medium text-black  xl:text-[1.2vw]">
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
                                        <dt className="mt-4 font-medium text-black xl:text-[1.2vw]">
                                            In-house teams lack
                                            the creativity to
                                            produce engaging
                                            videos.                                        </dt>

                                    </div>
                                    <div className='bg-lime-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-white'>❖</div>
                                        <dt className="mt-4 font-medium text-black xl:text-[1.2vw]">Wasting money on
                                            boosting reels that
                                            hurt your reach
                                            (algorithm!).</dt>

                                    </div>
                                    <div className='bg-red-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-white'>❖</div>
                                        <dt className="mt-4 font-medium text-black xl:text-[1.2vw]">
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

                {/* <OurWork /> */}
                <div className='py-24 lg:px-24 relative overflow-hidden p-5 text-balance font-sans font-semibold'>
                    <OurResults />
                </div>

                <Testimonials />


                <section className="relative flex items-center justify-center text-white bg-neutral-900">
                    <div className="relative items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-32 md:px-12">
                        <div>
                            <div className="relative text-center">
                                <h1 className="text-center p-5 lg:text-[3vw] text-4xl font-[genica]">
                                    Who are the CEO's<span className="">&nbsp;behind the Business?</span>
                                </h1>

                                <div className='py-24'>
                                    <h2 className="text-center p-5 lg:text-[2.5vw] text-4xl font-bold">
                                        The Story of Naineesh & Anmol
                                    </h2>
                                    <p className="text-[1.5vw] mx-auto mt-4 text-center font-[quench]">
                                        With over 5+ years of total experience in Sales, Marketing and Social Media, Naineesh & Anmol have a big mission: Revolutionalized hospitality industry by making them orginals creators over social media sand not over rely on influencers!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
                            <svg fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" className="absolute -mt-24 blur-3xl">
                                <g clipPath="url(#clip0_10_20)">
                                    <g filter="url(#filter0_f_10_20)">
                                        <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#ff237d" />
                                        <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8" />
                                        <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4" />
                                        <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF" />
                                    </g>
                                </g>
                                <defs>
                                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                                        {/* <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666" /> */}
                                    </filter>
                                </defs></svg><img src='images/founder.webp' className="relative object-cover w-fit mx-auto" />

                        </div>
                        <div className='w-fit mx-auto'>
                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold border-r-4 border-b-4 border-indigo-500 bg-black text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none" href="/about">
                                Read More
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </div>
                    </div>
                </section>


                <Contact />

            </div>
        </ ParallaxProvider >

    )
}

export default Home
