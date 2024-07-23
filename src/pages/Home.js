import React from 'react'
import Layout from '../components/Layout/Layout'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import { motion } from 'framer-motion'

const Home = () => {
    const services = [
        {
            'title': 'UpliftU Guide',
            'desc': 'Need direct guidance on your social media marketing team efforts?',
            'desc2': 'A specialised social media manager will guide your in-house team/agency where we’ll focus on creating more engaging and interactive content that is relatable to audiences that provide you with strategic direction on where to take your socials and amplify your brands message.'
        },
        {
            'title': 'UpliftU Management',
            'desc': 'Struggling with organic reach and engagement? Leave it to us',
            'desc2': 'Maintaining open comms with you, we strategize, plan, and execute social media content deep dive into your brand and take management of your social channels off your hands – finally'
        },
        {
            'title': 'UpliftU Odyssey',
            'desc': 'Need to save time and money for your social media content completely at one place?',
            'desc2': 'The ever-changing algorithm is our everyday companion.We plan, we record we act and we manage all you content creation module for your social handle.Everything at one place'
        },
        {
            'title': 'Consultation',
            'desc': 'An hour of planning to save you hours of doing.',
            'desc2': 'A one-on-one consultation designed to give you strategic guidance on your organic social media marketing efforts'
        },
    ]
    return (
        <ParallaxProvider >
            <div>
                <Navbar />
                <div className='relative overflow-hidden bg-white p-5 text-balance'>
                    <Parallax
                        className='-z-1 absolute lg:w-[60%] w-[100%] left-[60%] lg:top-[30%] top-[40%]'
                        translateX={['0', '-100%']}
                        translateY={['0', '-100%']}
                        scale={['0', '3']}
                    >
                        <img className='' src='images/Saly-43.png' alt='Images'
                        />
                    </Parallax>
                    {/* Banner */}
                    <div className=" z-10 w-full">
                        <div className="border-2 border-black rounded-xl shadow-inner shadow-amber-400 lg:max-w-5xl w-full mx-auto sm:px- lg:px-8 py-10 lg:py-16">
                            <div className="lg:max-w-5xl text-center mx-auto">
                                {/* Title */}
                                <div className="lg:max-w-5xl">
                                    <h1 className="bowlby-one-regular block text-black text-[10vw] md:text-5xl lg:text-7xl">
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



                {/* Services  */}
                <div className='bg-black w-full font-[quench] py-24 px-5'>
                    <h2 className='text-white text-center p-5 lg:text-6xl text-4xl bowlby-one-regular'>
                        Services
                    </h2>
                    <div className='lg:flex gap-5 mx-auto w-fit lg:space-y-0 space-y-5'>
                        {services.map((data, index) => {
                            return (
                                <motion.div
                                    initial={{ scale: 0, }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: index*0.3 }}
                                    class={`lg:w-[25%] rounded-3xl lg:h-full p-3 flex flex-col gap-1 
                                    ${index === 0 && 'bg-red-300'}
                                    ${index === 1 && 'bg-lime-300'}
                                    ${index === 2 && 'bg-blue-300'}
                                    ${index === 3 && 'bg-amber-300'}
                                `}>
                                    {/* <div class="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100"></div> */}
                                    <div
                                        class="flex flex-col gap-4">
                                        <div class=" justify-between lg:h-[70vh] h-[30vh]">
                                            <div class="space-y-2 text-balance">
                                                <div class="lg:text-[3vw] text-[6vw] h-[10vw] font-bold text-black">{data.title}</div>
                                                {/* <p class="text- text-indigo-800">{data.desc}</p> */}
                                                <p class=" text-neutral-600 lg:text-[1.3vw]">{data.desc2}</p>
                                            </div>
                                        </div>
                                        <button class="py-3 px-4 items-center gap-x-2 text-base rounded-full shadow-md shadow-black border border-transparent bg-indigo-500 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">Book Now</button>
                                    </div>
                                </motion.div>
                            )
                        })}

                    </div>
                    <h2 className='text-white lg:text-[3vw] text-[6vw] text-center'>
                        UpliftU is uplifting the businesses to the stratosphere!
                    </h2>
                    <h2 className='text-white lg:text-[1.3vw] text-center m-5'>
                        Join the UpliftU Revolution, Make a change. Support the cause! Experience Beyond the marketing for engagement
                    </h2>

                </div>



                <Process />



                <div className='overflow-hidden h-screen'>

                    <Parallax
                        scale={['0', '100']}
                        speed={['10']}
                        slowerScrollRate={true}
                    >
                        <div className='w-40 h-40 bg-black rounded-full my-20 mx-auto'>

                        </div>
                    </Parallax>
                </div>


            </div>
        </ ParallaxProvider >

    )
}

export default Home
