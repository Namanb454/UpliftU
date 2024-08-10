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
            <div className='poppins-semibold tracking-wide'>
                <div className='relative overflow-hidden p-5 text-balance poppins-semibold'>
                    <Navbar />


                    {/* Banner */}
                    <div className=" z-10 w-full ">

                        <div class="overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                        </div>

                        <div className="backdrop-blur- rounded-xl shadow-inner w-full mx-auto sm:px- lg:px-8 py-10 lg:py-24">
                            <div className="lg:max-w-5xl text-center mx-auto">
                                {/* Title */}
                                <div className="lg:max-w-5xl">
                                    <h1 className="font-[genica] block text-neutral-900 text-[12vw] md:text-5xl xl:text-[6vw]">
                                        India’s <span className='bg-gradient-to-l from-[#0d2c5e] to-[#489b9c] bg-clip-text text-transparent'>First Social Media</span> Engagement Driven Company!
                                    </h1>
                                </div>
                                {/* End Title */}
                                {/* <div className="mt-5 max-w-6xl">
                                    <p className=" font-semibold text-lg text-[#1f2740]/50">100% guaranteed audience interactions</p>
                                </div> */}
                                {/* Buttons */}
                                <div className="mt-8 gap-3 flex justify-center">
                                    <a className="py-3 px-4 inline-flex items-center gap-x-2 xl:text-[1.3vw] font-bold border-r-4 border-b-4 border-[#0d2c5e] bg-[#489b9c] text-white hover:bg-[#0d2c5e] disabled:opacity-50 disabled:pointer-events-none" href="#contact">
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
                                <h4 className="xl:text-[1.5vw] font-semibold text-neutral-900 ">Accuracy rate</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-[#489b9c] font-sans">99.95%</p>
                                <p className="mt-2 sm:mt-3 xl:text-[1.5vw] text-neutral-900">in fulfilling orders</p>
                            </div>
                            <div>
                                <h4 className="xl:text-[1.5vw] font-semibold text-neutral-900 ">Startup businesses</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-[#489b9c] font-sans">2,000+</p>
                                <p className="mt-2 sm:mt-3 xl:text-[1.5vw] text-neutral-900">partner with UpliftU</p>
                            </div>
                            <div>
                                <h4 className="xl:text-[1.5vw] font-semibold text-neutral-900 ">Happy customer</h4>
                                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-[#489b9c] font-sans">85%</p>
                                <p className="mt-2 sm:mt-3 xl:text-[1.5vw] text-neutral-900">this year alone</p>
                            </div>
                        </div>
                        {/* End Grid */}
                    </div>
                    {/* Horizontal Tabs */}
                </div>



                {/* Services  */}
                <div className='bg-neutral-900 w-full poppins-semibold px-5 '
                >
                    <div className='backdrop-blur-sm w-full py-24'>
                        <h2 className='text-[#489b9c] text-center p-5 lg:text-6xl text-4xl font-[genica]'>
                            Services
                        </h2>
                        <section>
                            <div className="px-8 py-12 mx-auto md:px-12 lg:px-32">
                                <div>
                                    <h1 className="text-2xl font-semibold text-[#f3f7f8] lg:text-5xl">
                                        Our&nbsp;
                                        <span className="">Expertise</span>
                                    </h1>

                                    <div className="grid mt-12 gap-y-12 gap-x-2 md:grid-cols-2">
                                        {services.map((data, index) => {
                                            return (

                                                <motion.div
                                                    initial={{ opacity: 0, x: -50 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.3 }}
                                                >
                                                    <div className={`xl:h-[60vh] p-2 overflow-hidden border rounded-3xl lg:flex items-center
                                             ${index === 0 && 'bg-red-400'}
                                                ${index === 1 && 'bg-lime-300'}
                                                ${index === 2 && 'bg-blue-400'}
                                                ${index === 3 && 'bg-amber-400'}
                                                `}>
                                                        <img src="https://wldd.in/images/img5.png" alt="#_" className="xl:ml-5 w-[] xl:h-[50vh] h-[30vh] mx-auto rounded-2xl" />
                                                        <h2 className={`lg:text-[2vw] items-center text-center
                                                    `}>{data.title}</h2>
                                                    </div>

                                                    <div className="text-balance">
                                                        <p className="mt-2 xl:h-[30vh] font-light text-[#f3f7f8] text-justify xl:w-[90%] mx-auto xl:text-[1.3vw]">
                                                            {data.desc2}
                                                        </p>

                                                    </div>
                                                    <div className="mt-8 gap-3 flex justify-center">
                                                        <a className="py-3 px-4 inline-flex items-center gap-x-2 xl:text-[1.3vw] font-bold border-r-4 border-b-4 border-[#0d2c5e] bg-[#489b9c] text-white hover:bg-[#0d2c5e] disabled:opacity-50 disabled:pointer-events-none" href="#contact">
                                                            Get started now
                                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>


                        <h2 className='text-neutral-200 lg:text-[3vw] text-[6vw] text-center'>
                            UpliftU is uplifting the businesses to the stratosphere!
                        </h2>
                        <h2 className='text-[#bae2e4] lg:text-[1.5vw] text-center m-5'>
                            Join the UpliftU Revolution, Make a change. Support the cause! Experience Beyond the marketing for engagement
                        </h2>
                    </div>
                </div>


                {/* Process */}
                <div>
                    <section>
                        <div className=" lg:p-24 p-5 mx-auto poppins-semibold overflow-hidden space-y-[5vh]">

                            <div>
                                <h1 className="font-[genica] lg:text-[4vw] text-4xl text-neutral-900 text-balance">
                                    Here the proecess
                                    <span className="bg-gradient-to-l from-[#0d2c5e] to-[#489b9c] bg-clip-text text-transparent">&nbsp;how we will work with you</span>
                                </h1>
                            </div>
                            <div className="space-y-2">
                                <div className=" gap-2 lg:flex-row-reverse lg:mx-auto lg:flex">
                                    <div className="lg:w-[70%]">
                                        <Parallax
                                        // translateX={['0', '0']}

                                        >
                                            <div className="relative [h]- p-2 overflow-hidden rounded-3xl">
                                                <img src="images/chat.jpg" className="object-contain mx-auto lg:h-[50vh] lg:w-[40vw] border shadow-2xl rounded-2xl" />
                                            </div>
                                        </Parallax>
                                    </div>
                                    <div className="lg:w-[30%]">
                                        <Parallax
                                            // translateX={['0', '0']}

                                            className="flex h-full">
                                            <div className="flex flex-col justify-center p-8 border bg-neutral-900 rounded-3xl max-w-none">
                                                <h2 className="lg:text-[2vw] text-[5vw] text-indigo-400">
                                                    Step I
                                                </h2>
                                                <p className="mt-4 xl:text-[1.3vw] font-light text-[#f3f7f8] text-justify text-pretty">
                                                    We chat & confirm what you want to achieve and the services that will get you there – whether it be individual services, packaging it up or something more custom.
                                                </p>
                                            </div>
                                        </Parallax>
                                    </div>

                                </div>
                                <div className=" gap-2 lg:mx-auto lg:flex">

                                    <div className="lg:w-[70%]">
                                        <Parallax
                                        // translateX={['-20', '10']}

                                        >
                                            <div className="relative h-[full] p-2 overflow-hidden  rounded-3xl">
                                                <img src="/images/agreement.jpg" className="object-contain mx-auto lg:h-[50vh] lg:w-[40vw] border shadow-2xl rounded-2xl" />
                                            </div>
                                        </Parallax>
                                    </div>
                                    <div className="lg:w-[30%]">
                                        <Parallax
                                            // translateX={['20', '-10']}

                                            className="flex h-full">
                                            <div className="flex flex-col justify-center p-8 border bg-neutral-900 rounded-3xl max-w-none">
                                                <h2 className="lg:text-[2vw] text-[5vw] text-lime-400">Step II</h2>
                                                <p className="mt-4 xl:text-[1.3vw] font-light text-[#f3f7f8] text-justify text-pretty">
                                                    You will sign an agreement and submit initial payment to lock in the work.
                                                </p>
                                            </div>
                                        </Parallax>
                                    </div>
                                </div>
                                <div className=" gap-2 flex-row-reverse lg:mx-auto lg:flex">

                                    <div className="lg:w-[70%]">
                                        <Parallax
                                        // translateX={['-20', '10']}
                                        >
                                            <div className="relative h-[full] p-2 overflow-hidden rounded-3xl">
                                                <img src="/images/working.jpg" className="object-contain mx-auto lg:h-[50vh] lg:w-[40vw] border shadow-2xl rounded-2xl" />
                                            </div>
                                        </Parallax>
                                    </div>
                                    <div className="lg:w-[30%]">
                                        <Parallax
                                            // translateX={['20', '-10']}
                                            className="flex h-full">
                                            <div className="flex flex-col justify-center p-8 border bg-neutral-900 rounded-3xl max-w-none">
                                                <h2 className="lg:text-[2vw] text-[5vw] text-red-400">
                                                    Step III
                                                </h2>
                                                <p className="mt-4 xl:text-[1.3vw] font-light text-[#f3f7f8] text-justify text-pretty">
                                                    Once legalities are sorted we get the ball rolling!
                                                </p>
                                            </div>
                                        </Parallax>
                                    </div>
                                </div>

                            </div>



                            <section>
                                <div className="relative py-24 w-full">
                                    <p className="xl:text-[1.5vw] font-semibold text-center text-[#489b9c] uppercase">
                                        Trusted by the world’s most innovative teams
                                    </p>

                                    <Parallax
                                        translateX={['0', '-20']}
                                        className="absolute w-full flex mt-12">
                                        <div className=" flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/1.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Figma</h2>
                                        </div>
                                        <div className=" flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/1.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Figma</h2>
                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/2.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>zoom</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/3.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Zomato</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/4.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Facebook</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/5.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>CoinBase</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/2.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>zoom</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/3.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Zomato</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/4.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Facebook</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/5.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>CoinBase</h2>

                                        </div>
                                    </Parallax>


                                    <Parallax
                                        translateX={['-20', '0']}
                                        className="absolute w-full flex mt-36">
                                        <div className=" flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/1.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Figma</h2>
                                        </div>
                                        <div className=" flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/1.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Figma</h2>
                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/2.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>zoom</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/3.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Zomato</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/4.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Facebook</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/5.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>CoinBase</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/2.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>zoom</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/3.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Zomato</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/4.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>Facebook</h2>

                                        </div>
                                        <div className="flex justify-center col-span-1 px-8">
                                            {/* <img className="max-h-12" src="../images/logos/5.svg" alt="logo" /> */}
                                            <h2 className='text-[#1f2740] lg:text-[2vw] text-[5vw] '>CoinBase</h2>

                                        </div>
                                    </Parallax>
                                </div>
                            </section>



                        </div>
                    </section>
                </div>


                <Parallax
                    opacity={['0', '3']}
                    className='relative lg:px-24 py-24 px-5 mx-auto poppins-semibold overflow-hidden'>
                    <Parallax
                        scale={['0', '4']}
                        translateX={['-100', '100']}
                        scaleZ={['0', '1']}
                        // translateY={['100', '-100']}

                        className='bg-neutral-900 rounded-trfull absolute w-screen h-screen left-0 -z-10 overflow-hidden'>

                    </Parallax>
                    <Parallax
                        opacity={['0', '3']}
                        className="mx-auto text-balance text-justify">
                        <h1 className="font-[genica] pb-10 z-10 block text-neutral-200 text-[10vw] md:text-5xl lg:text-[5vw]">
                            Difficulties Faced On
                            <span className="z-10 bg-gradient-to-l from-[#489b9c] to-[#bae2e4] bg-clip-text text-transparent">&nbsp;Social Media</span>
                        </h1>
                        <div className=" grid lg:space-x-10 grid-cols-1 lg:grid-cols-2">
                            <div className="md:order-first ">
                                <dl className="grid grid-cols-2 gap-4 list-none lg:gap-6 text-pretty lg:mt-0 mt-5">
                                    <div className='bg-amber-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-[#0d2c5e]'>❖</div>
                                        <dt className="mt-4 text-[#1f2740] font-normal  xl:text-[1.2vw]">
                                            Large followings with
                                            low engagement

                                            (likes, comments)

                                            = wasted potential.

                                            <span className='font-sans font-semibold'>&nbsp;25</span>k followers but only
                                            <span className='font-sans font-semibold'>&nbsp;100</span> likes
                                        </dt>

                                    </div>
                                    <div className='bg-blue-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-[#0d2c5e]'>❖</div>
                                        <dt className="mt-4 text-[#1f2740] font-normal xl:text-[1.2vw]">
                                            In-house teams lack
                                            the creativity to
                                            produce engaging
                                            videos.                                        </dt>

                                    </div>
                                    <div className='bg-lime-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-[#0d2c5e]'>❖</div>
                                        <dt className="mt-4 text-[#1f2740] font-normal xl:text-[1.2vw]">Wasting money on
                                            boosting reels that
                                            hurt your reach
                                            (algorithm!).</dt>

                                    </div>
                                    <div className='bg-red-400 lg:h-[30vh] h-[35vh] p-2 rounded-xl'>
                                        <div className='text-[#0d2c5e]'>❖</div>
                                        <dt className="mt-4 text-[#1f2740] font-normal xl:text-[1.2vw]">
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




                {/* About  */}
                <section className="relative flex items-center justify-center text-[#f3f7f8] bg-neutral-900">
                    <div className="relative items-center w-full px-5 pt-24 mx-auto max-w-7xl lg:px-16 lg:py- md:px-12">
                        <div>
                            <div className="relative text-center">
                                <h1 className="text-center p-5 lg:text-[3vw] text-4xl">
                                    Who are the CEO's<span className="">&nbsp;behind the Business?</span>
                                </h1>

                                <div className='py-'>
                                    <h2 className="text-center p-5 lg:text-[2.5vw] text-4xl font-bold bg-gradient-to-l from-[#489b9c] to-[#bae2e4] bg-clip-text text-transparent font-[genica]">
                                        The Story of Naineesh & Anmol
                                    </h2>
                                    <p className="xl:text-[1.5vw] lg:text-center text-justify mx-auto mt-4 font-light">
                                        With over 5+ years of total experience in Sales, Marketing and Social Media, Naineesh & Anmol have a big mission: Revolutionalized hospitality industry by making them orginals creators over social media sand not over rely on influencers!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-0 py-10 gap-3 flex justify-center">
                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold border-r-4 border-b-4 border-[#0d2c5e] bg-[#489b9c] text-white hover:bg-[#0d2c5e] disabled:opacity-50 disabled:pointer-events-none" href="/about">
                                Know More
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </div>
                        <div className=" items-center w-full xl:pt-12 mx-auto xl:mt-12 ">
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
                                </defs></svg><img src='images/Naineesh-Photoroom.png' alt="CEO's" className=" object-cover xl:w-[50vw] backdrop-brightness-90 mx-auto" />

                        </div>
                    </div>
                </section>


                <Testimonials />



                <Contact />

            </div>
        </ ParallaxProvider >

    )
}

export default Home
