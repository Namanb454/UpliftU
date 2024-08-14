import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Navbar from '../components/Navbar'
import { motion, useTransform, useScroll, color, useViewportScroll } from "framer-motion"
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import OurResults from '../components/OurResults'
import { MaskText } from '../components/MaskText'
import { TbEyeCheck } from 'react-icons/tb'
import { AiFillLike, AiOutlineAreaChart } from 'react-icons/ai'
import { FaUsersViewfinder } from 'react-icons/fa6'

const Home = () => {
    return (
        <div className="">
            <HorizontalScrollCarousel />
        </div>
    );
};
const services = [
    {
        'title': 'UpliftU Guide',
        'desc': 'Need direct guidance on your social media marketing team efforts?',
        'desc2': 'A specialised social media manager will guide your in-house team/agency where we’ll focus on creating more engaging and interactive content that is relatable to audiences that provide you with strategic direction on where to take your socials and amplify your brands message.',
        'img': 'Website_Images/Guide.svg'
    },
    {
        'title': 'UpliftU Management',
        'desc': 'Struggling with organic reach and engagement? Leave it to us',
        'desc2': 'Maintaining open comms with you, we strategize, plan, and execute social media content deep dive into your brand and take management of your social channels off your hands – finally',
        'img': 'Website_Images/Management.svg'
    },
    {
        'title': 'UpliftU Odyssey',
        'desc': 'Need to save time and money for your social media content completely at one place?',
        'desc2': 'The ever-changing algorithm is our everyday companion.We plan, we record we act and we manage all you content creation module for your social handle.Everything at one place',
        'img': 'Website_Images/Odyssey.svg'
    },
    {
        'title': 'UpliftU Audit',
        'desc': 'An hour of planning to save you hours of doing.',
        'desc2': 'A one-on-one consultation designed to give you strategic guidance on your organic social media marketing efforts',
        'img': 'Website_Images/Audit.jpeg'
    },
]

const users = [
    {
        'title': 'Impressions',
        'no': '32.41+ M',
        'img': <TbEyeCheck />
    },
    {
        'title': 'Reach',
        'no': '30.50+ M',
        'img': <AiOutlineAreaChart />
    },
    {
        'title': 'Profile Views',
        'no': '1,13,031 L',
        'img': <FaUsersViewfinder />
    },
    {
        'title': 'Engagements',
        'no': '8.6+ M',
        'img': <AiFillLike />
    },
]

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const x = useTransform(
        scrollYProgress,
        [1, 0],
        isMobile ? ["350%", "-90%"] : ["100%", "-70%"]

    );

    const { scrollSProgress } = useViewportScroll();

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [1, 0.5] : [0.8, 1]);
    // const opacity = useTransform(scrollYProgress, [0, 1], [0, 50])


    return (
        <ParallaxProvider >
            <div className='poppins-semibold tracking-wide overflow-hidden '
            >
                <div className='relative overflowhidden text-balance poppins-semibold bg-gradient-to- bgb from-[#1f2740] to-[#489b9c]'

                >
                    <div className='backdrop-blur-sm p-5 relative overflow-hidden'

                    >
                        {/* <div> */}

                        <Navbar />
                        {/* </div> */}


                        {/* Banner */}

                        <motion.div className=" -z-10 bg-cover rounded-3xl w-[100%] mx-auto"
                            style={{
                                backgroundImage: 'url(Website_Images/Audit.svg)',
                                scale,
                            }}
                        >


                            <div className=" rounded-xl shadow-inner w-full mx-auto sm:px- lg:px-8 py-10 lg:py-24 backdrop-blur-sm">
                                <div className="text-center mx-auto">
                                    <div
                                        data-scroll data-scroll-speed='0.5'
                                        className="smooth-scroll xl: items-center  overflow-hidden">
                                        <section ref={targetRef} className="h-[] xl:w-[100%] w-fit overflow-hidden">
                                            <div className="sticky top-1 flex h-fit overflow-hidden w-[100%]">
                                                <motion.div
                                                    style={{ x }} className={`md:text-[8vw] text-[25vw]  overflow-dden whitespace-nowrap ml-auto text-white font-semibold capitalize archivo-black-regular`} >
                                                    India’s&nbsp;
                                                    <span className='bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]  '>
                                                        First Social Media
                                                    </span>
                                                    &nbsp;Engagement Driven Company!
                                                </motion.div>
                                            </div>
                                        </section>

                                        {/* <div className="mt-8 gap-3 mx-auto w-fit block xl:hidden">
                                            <motion.a
                                                initial={{ x: 20, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                className="py-3 px-4 inline-flex items-center gap-x-2 xl:text-[1.3vw] font-light border-r-4 border-b-4 border-[#0d2c5e] bg-[#489b9c] text-white hover:bg-[#0d2c5e] disabled:opacity-50 disabled:pointer-events-none" href="#contact">
                                                Get started now
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                            </motion.a>
                                        </div> */}


                                        <div className="xl:w- mx-auto sticky top-1 flex h-fit overflow-hidden text-left md:leading-none  text-[#d3ff8c] lg:text-[6vw] text-[8vw] font-[]">

                                            <div className="z-10 relative text-center w-full px4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                                {/* Grid */}
                                                <div className="xl:flex xl:space-x-[10vw] space-y[5vh] mx-auto w-fit xl:my-[5vh]">
                                                    <div>
                                                        <h4
                                                            className="xl:text-[1.5vw] text-[5vw] font-semibold text-white "><MaskText text="Accuracy rate" /></h4>
                                                        <motion.p
                                                            initial={{ x: 20, opacity: 0 }}
                                                            whileInView={{ x: 0, opacity: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                            viewport={{once: true}}
                                                            className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-white  ">
                                                            <span className='archivo-black-regular bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                                                                99.95%
                                                            </span>
                                                        </motion.p>
                                                        <p className="mt-2 sm:mt-3 xl:text-[1.5vw] text-[5vw] text-white">in fulfilling orders</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="xl:text-[1.5vw] text-[5vw] font-semibold text-white "><MaskText text="Startup businesses" /></h4>
                                                        <motion.p
                                                            initial={{ x: 20, opacity: 0 }}
                                                            whileInView={{ x: 0, opacity: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                            viewport={{once: true}}
                                                            className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-white  ">
                                                            <span className='archivo-black-regular bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                                                                2,000+
                                                            </span>
                                                        </motion.p>
                                                        <p className="mt-2 sm:mt-3 xl:text-[1.5vw] text-[5vw] text-white">partner with UpliftU</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="xl:text-[1.5vw] text-[5vw] font-semibold text-white "><MaskText text="Happy customer" /></h4>
                                                        <motion.p
                                                            initial={{ x: 20, opacity: 0 }}
                                                            whileInView={{ x: 0, opacity: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                            viewport={{once: true}}
                                                            className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-white  ">
                                                            <span className='archivo-black-regular bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                                                                85%
                                                            </span>
                                                        </motion.p>
                                                        <p className="mt-2 sm:mt-3 xl:text-[1.5vw] text-[5vw] text-white">this year alone</p>
                                                    </div>
                                                </div>
                                                {/* End Grid */}
                                            </div>
                                        </div>

                                        <div className="mt-8 gap-3 mx-auto w-fit">
                                            <motion.a
                                                initial={{ y: 40, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                viewport={{once: true}}
                                                className="py-3 px-4 inline-flex items-center gap-x-2 xl:text-[1.3vw] font-light border-r-4 border-b-4 border-black bg-[#489b9c] text-white hover:bg-black/50 disabled:opacity-50 disabled:pointer-events-none" href="#contact">
                                                Get started now
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* End Title */}
                                    {/* <div className="mt-5 max-w-6xl">
                                    <p className=" font-semibold text-lg text-[#1f2740]/50">100% guaranteed audience interactions</p>
                                </div> */}
                                    {/* Buttons */}

                                    {/* End Buttons */}

                                </div>
                            </div>
                        </motion.div>



                        {/* Horizontal Tabs */}
                    </div>



                    {/* Services  */}
                    <div className='bg-neutral- w-full poppins-semibold px-5 '
                    >
                        <div className='backdrop-blur-sm w-full py-24'>
                            <h2 className='text-black/90  text-center p-5 lg:text-6xl text-4xl poppins-semibold'>
                                <span className='bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%] archivo-black-regular'>
                                    Services
                                </span>

                            </h2>
                            <section>
                                <div className="px-8 py-12 mx-auto md:px-12 lg:px-32">
                                    <div>
                                        <h1 className="text-2xl font-semibold text-black lg:text-5xl">
                                            Our&nbsp;
                                            <span className="">Expertise</span>
                                        </h1>

                                        <div className="grid mt-12 gap-y-12 gap-x-2 md:grid-cols-2">
                                            {services.map((data, index) => {
                                                return (

                                                    <a href='/services'
                                                        // initial={{ opacity: 0, x: -500 }}
                                                        // whileInView={{ opacity: 1, x: 0 }}
                                                        // transition={{ duration: 0.2, delay: index * 0.1 }}
                                                        className='aspect-square w-fit mx-auto'
                                                    >
                                                        <Parallax className="bg-gradient-to-tr from-[#489b9c] to-black xl:h-[60vh] h-[30vh] overflow-hidden border lg:flex items-center group bg-contain aspect-square mx-auto  w-fit"
                                                            style={{
                                                                backgroundImage: `url(${data.img})`,
                                                            }}
                                                            translateY={['100', '-100']}
                                                        >
                                                            <h2 className={`lg:text-[2vw] items-center text-center mx-auto w-full h-full justify-center flex group-hover:backdrop-blur-sm group-hover:text-white/90 group-hover:text-[4vw]  duration-200`}>
                                                                {data.title}
                                                            </h2>
                                                        </Parallax>

                                                        <div className="text-balance">
                                                            <p className="mt-2 xl:h-[30vh] font-light text-black text-balance xl:w-[100%] aspect-square mx-auto xl:text-[1.3vw]">
                                                                <MaskText text={data.desc2} />
                                                            </p>

                                                        </div>
                                                        <MaskText text=

                                                            <div className="mt-8 gap-3 flex justify-center">
                                                                <a className="py-3 px-4 inline-flex items-center gap-x-2 xl:text-[1.3vw] font-light border-r-4 border-b-4 border-black bg-[#489b9c] text-white hover:bg-black disabled:opacity-50 disabled:pointer-events-none" href="/contact">
                                                                    Get started now
                                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                                </a>
                                                            </div>
                                                        />

                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </section>


                            <h2 className=' lg:text-[3vw] text-[6vw] text-center'>
                                <MaskText text="UpliftU is uplifting the businesses to the stratosphere!" />
                            </h2>


                            <div class="xl:grid grid-cols-2 text-center gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16 poppins-semibold">
                                {users.map((data, index) => {
                                    return (
                                        <div className='text-center p-[1vw] border-black lg:h-[40vh] w-[100%] xl:my-0 my-[5vh]'>
                                            <div class="mt-6 w-[80%] mx-auto text-center items-center space-y-[3vh]">
                                                {/* <h3 class="font-medium text-gray-900">Live editing</h3> */}
                                                <MaskText text=
                                                    <h2 className='xl:text-[3vw] text-[10vw] mx-auto w-fit'>
                                                        {data.img}
                                                    </h2>
                                                />
                                                <MaskText text=
                                                    <p class="mt-2 xl:text-[1.5vw] text-[5vw] text-[#489b9c]  font-semibold items-center">
                                                        {data.title}
                                                    </p>
                                                />
                                                <MaskText text=
                                                    <h2 className=' font-semibold xl:text-[2vw] text-[5vw] archivo-black-regular'>
                                                        {data.no}
                                                    </h2>
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <h2 className='text-[#489b9c] lg:text-[1.5vw] text-center m-5'>
                                <MaskText text="Join the UpliftU Revolution, Make a change. Support the cause! Experience Beyond the marketing for engagement" />
                            </h2>
                        </div>
                    </div>


                    {/* Process */}
                    <div>
                        <section className=''>
                            <div className=" lg:p-24 p-5 mx-auto poppins-semibold overflow-hidden space-y-[5vh] bg-fixed">

                                <div>
                                    <h1 className="archivo-black-regular xl:leading-[8vh] lg:text-[4vw] h-[20vh] text-4xl text-neutral-900">
                                        Here the process
                                        <span className=" bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]">&nbsp;how we will work with you</span>
                                    </h1>
                                </div>
                                <div className="space-y-2">
                                    <div className=" gap-2 lg:flex-row-reverse lg:mx-auto lg:flex">
                                        <div className="lg:w-[70%]">
                                            <Parallax
                                                translateX={['100', '-100']}

                                            >
                                                <div className="relative [h]- p-2 overflow-hidden rounded-3xl">
                                                    <img src="Website_Images/Step 1.svg" className="object-contain mx-auto lg:h-[50vh] lg:w-[] border shadow-2xl rounded-" />
                                                </div>
                                            </Parallax>
                                        </div>
                                        <motion.div
                                            initial={{ x: -200, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.9, delay: 0.5 }}
                                            viewport={{once: true}}

                                            className="lg:w-[30%]">
                                            <Parallax
                                                opacity={['1', '0']}

                                                className="flex h-full">
                                                <div className="flex flex-col justify-center p-8 rounded-3xl max-w-none">
                                                    <h2 className="lg:text-[2vw] text-[5vw] text-black">
                                                        Step I
                                                    </h2>
                                                    <p className="mt-4 xl:text-[1.3vw] font-light text-[#] text-balance">
                                                        We chat & confirm what you want to achieve and the services that will get you there – whether it be individual services, packaging it up or something more custom.
                                                    </p>
                                                </div>
                                            </Parallax>
                                        </motion.div>

                                    </div>
                                    <div className=" gap-2 lg:mx-auto lg:flex">

                                        <div className="lg:w-[70%]">
                                            <Parallax
                                                translateX={['-100', '100']}

                                            >
                                                <div className="relative h-[full] p-2 overflow-hidden  rounded-3xl">
                                                    <img src="Website_Images/Step 2.svg" className="object-contain mx-auto lg:h-[50vh] lg:w-[] border shadow-2xl rounded-" />
                                                </div>
                                            </Parallax>
                                        </div>
                                        <motion.div
                                            initial={{ x: 200, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.9, delay: 0.5 }}
                                            viewport={{once: true}}
                                             className="lg:w-[30%]">
                                            <Parallax
                                                opacity={['1', '0']}
                                                className="flex h-full">
                                                <div className="flex flex-col justify-center p-8 rounded-3xl max-w-none">
                                                    <h2 className="lg:text-[2vw] text-[5vw] text-black">Step II</h2>
                                                    <p className="mt-4 xl:text-[1.3vw] font-light text-[f3f7f8] text-balance">
                                                        You will sign an agreement and submit initial payment to lock in the work.
                                                    </p>
                                                </div>
                                            </Parallax>
                                        </motion.div>
                                    </div>
                                    <div className=" gap-2 flex-row-reverse lg:mx-auto lg:flex">

                                        <div className="lg:w-[70%]">
                                            <Parallax
                                                translateX={['100', '-100']}
                                            >
                                                <div className="relative h-[full] p-2 overflow-hidden rounded-3xl">
                                                    <img src="Website_Images/Step 3.svg" className="object-contain mx-auto lg:h-[50vh] lg:w-[] border shadow-2xl rounded-" />
                                                </div>
                                            </Parallax>
                                        </div>
                                        <motion.div
                                            initial={{ x: -200, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.9, delay: 0.5 }} 
                                            viewport={{once: true}}
                                            className="lg:w-[30%]">
                                            <Parallax
                                                opacity={['1', '0']}
                                                className="flex h-full">
                                                <div className="flex flex-col justify-center p-8 rounded-3xl max-w-none">
                                                    <h2 className="lg:text-[2vw] text-[5vw] text-black">
                                                        Step III
                                                    </h2>
                                                    <p className="mt-4 xl:text-[1.3vw] font-light text-[#f] text-balance ">
                                                        Once legalities are sorted we get the ball rolling!
                                                    </p>
                                                </div>
                                            </Parallax>
                                        </motion.div>
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


                    {/* Difficulties */}
                    <Parallax
                        opacity={['0', '3']}
                        className='relative lg:px-24 xl:py-24 py-12 px-5 mx-auto poppins-semibold overflow-hidden'>
                        <Parallax
                            scale={['0', '4']}
                            // translateX={['-100', '100']}
                            scaleZ={['0', '1']}
                            // translateY={['100', '-100']}

                            className='bg--900 rounded-trfull absolute w-screen h-screen left-0 -z-10 overflow-hidden'>

                        </Parallax>
                        <MaskText text=
                            <h1 className="archivo-black-regular leading-[8vh] xl:pb-10 z-10 block text-black/90 text-[10vw] md:text-5xl lg:text-[5vw]">
                                Difficulties Faced On &nbsp;
                                <span className="z-10 bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]">Social Media</span>
                            </h1>
                        />
                        <Parallax

                            className="mx-auto text-balance">
                            <div className=" grid lg:space-x-10 grid-cols-1 lg:grid-cols-2">
                                <div className="md:order-first items-center justify-center ">
                                    <dl className="grid xl:grid-cols-2 xl:text-left text-center gap- list-none lg:gap-6 lg:mt-0 mt-5 items-center ">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            viewport={{once: true}}
                                            // translateY={['0', '-100']}
                                            // opacity={['1', '0']}

                                            className='-amber-400 lg:h-fit  p-2 rounded-xl'>
                                            <div className='text-[#489b9c]'>❖</div>
                                            <MaskText text=
                                                <dt
                                                    className="mt-4 text-black font-light xl:text-[1.2vw]">
                                                    Large followings with low engagement (likes, comments) = wasted potential. 25k followers but only
                                                    100 likes.
                                                </dt>
                                            />

                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                            viewport={{once: true}}
                                            // translateY={['0', '-100']}
                                            // opacity={['1', '0']}
                                            className='-blue-400 lg:h-fit  p-2 rounded-xl'>
                                            <div className='text-[#489b9c]'>❖</div>
                                            <MaskText text=
                                                <dt className="mt-4 text-black font-light xl:text-[1.2vw]">
                                                    In-house teams lack the creativity to produce engaging videos.                                        </dt>
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                            viewport={{once: true}}
                                            // translateY={['0', '-100']}
                                            // opacity={['1', '0']}
                                            className='-lime-400 lg:h-fit  p-2 rounded-xl'>
                                            <div className='text-[#489b9c]'>❖</div>
                                            <MaskText text=
                                                <dt className="mt-4 text-black font-light xl:text-[1.2vw]">Wasting money on boosting reels that hurt your reach (algorithm!).</dt>
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.4 }}
                                            viewport={{once: true}}
                                            // translateY={['0', '-100']}
                                            // opacity={['1', '0']}
                                            className='-red-400 lg:h-fit p-2 rounded-xl'>
                                            <div className='text-[#489b9c]'>❖</div>
                                            <MaskText text=
                                                <dt className="mt-4 text-black font-light xl:text-[1.2vw]">
                                                    Relying solely on posts that don't spark conversation or action.
                                                </dt>
                                            />
                                        </motion.div>
                                    </dl>
                                </div>
                                <div
                                    translateY={['0', '-100']} className="order-first block mt-12 aspect-square lg:mt-0 items-center overflow-hidden">
                                    <Parallax
                                        translateY={['-80', '100']}
                                        // translateX={['-80', '100']}
                                        // scaleX={['1', '2']}
                                        // scaleY={['1', '2']}
                                        className="p-2 sh-lg items-center rounded-3xl">
                                        <img alt="#_" className="xl:w-[25vw] mx-auto relative ro-2xl drop--2xl " src="Website_Images/difficulties.jpeg" />
                                    </Parallax>
                                </div>
                            </div>
                        </Parallax>
                    </Parallax>

                    {/* <OurWork /> */}
                    <div className='py-24 lg:px-24 relative overflow-hidden p-5 text-balance font-sans font-semibold'>
                        <OurResults />
                    </div>




                    {/* About  */}
                    <section className="relative flex items-center justify-center text-[#] bg-neutral-">
                        <div className="relative items-center w-full px-5 pt-24 mx-auto max-w-7xl lg:px-16 lg:py- md:px-12">
                            <div>
                                <div className="relative text-center">
                                    <MaskText text=
                                        <h1 className="text-center p-5 lg:text-[3vw] text-4xl">
                                            Who are the CEO's<span className="">&nbsp;behind the Business?</span>
                                        </h1>
                                    />

                                    <div className='py-'>
                                        <MaskText text=
                                            <h2 className="text-center p-5 lg:text-[2.5vw] text-4xl font-bold poppins-semibold">
                                                <span className='bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                                                    The Story of Anmol & Naineesh
                                                </span>
                                            </h2>
                                        />
                                        <MaskText text=
                                            <p className="xl:text-[1.5vw] lg:text-center text-justify mx-auto mt-4 font-light">
                                                With over 5+ years of total experience in Sales, Marketing and Social Media, Naineesh & Anmol have a big mission: Revolutionalized hospitality industry by making them orginals creators over social media sand not over rely on influencers!
                                            </p>
                                        />
                                    </div>
                                </div>
                            </div>
                            <MaskText text=
                                <div className="mt-0 py-10 gap-3 flex justify-center">
                                    <a className="py-3 px-4 inline-flex items-center gap-x-2 xl:text-[1.3vw] font-light border-r-4 border-b-4 border-[#0d2c5e] bg-[#489b9c] text-white hover:bg-[#0d2c5e] disabled:opacity-50 disabled:pointer-events-none" href="/about">
                                        Know More
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </a>
                                </div>
                            />
                            <div className=" items-center w-full xl:pt-12 mx-auto xl:mt-12 ">
                                {/* <svg fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" className="absolute -mt-24 blur-3xl"> */}
                                {/* <g clipPath="url(#clip0_10_20)"> */}
                                {/* <g filter="url(#filter0_f_10_20)">
                                            <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#ff237d" />
                                            <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8" />
                                            <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4" />
                                            <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF" />
                                        </g> */}
                                {/* </g> */}
                                {/* <defs> */}
                                {/* <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333"> */}
                                {/* <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666" /> */}
                                {/* </filter> */}
                                {/* </defs></svg> */}
                                <div
                                    translateY={['-100', '80']} className="block overflow-hidden lg:mt-0 items-center">
                                    <Parallax
                                        translateY={['-80', '80']}>
                                        <img className='object-cover xl:w-[50vw] mx-auto ' src='/images/Naineesh-Anmol.png' />
                                    </Parallax>
                                </div>
                            </div>
                        </div>
                    </section>


                    <Testimonials />



                    <Contact />
                </div>
            </div >
        </ ParallaxProvider >

    )
}

export default Home
