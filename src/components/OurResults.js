import { motion } from 'framer-motion'
import React from 'react'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'
import { MaskText } from './MaskText'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { hover } from '@testing-library/user-event/dist/hover';

const OurResults = () => {
    // const parallax = useParallax({
    //     onProgressChange: (progress) => {
    //         if (parallax.ref.current) {
    //             // set progress to CSS variable
    //             parallax.ref.current.style.setProperty(
    //                 "--progress",
    //                 progress.toString()
    //             );
    //         }
    //     },
    // });

    const results = [
        {
            'img': '/images/results/1 (1).jpg',
        },
        {
            'img': '/images/results/1 (2).jpg',
        },
        {
            'img': '/images/results/1 (3).jpg',
        },
        {
            'img': '/images/results/1 (4).jpg',
        },
        {
            'img': '/images/results/1 (5).jpg',
        },

    ]

    return (
        <ParallaxProvider>
            <div className='w-full '>
                <section>
                    <MaskText text=
                        <div className="my-[5vh] mx-auto poppins-semibold"
                        >
                            <div>
                                <h1 className="archivo-black-regular lg:text-[5vw] text-4xl text-neutral-900 text-balance" >
                                    Our&nbsp;
                                    <span className="bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]">Results</span>
                                </h1>
                            </div>

                        </div>
                    />
                </section>



                <div className="z-10 relative text-center w-full border-2 border-black rounded-3xl px4 py-10 sm:px- lg:px-0 lg:py-12 mx-auto">
                    {/* Grid */}
                    <div className='flex rounded- shadow-[#] border-b-2 border-black shadow-md pb-5 w-full'>
                        <div className='px-10 xl:flex w-full'>
                            <MaskText text=
                                <h2 className='xl:text-[3vw] text-[6vw] archivo-black-regular w-fit'>Forged in success</h2>
                            />
                            <motion.a
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                href='/our-work' className='group xl:w-[10vw] ml-auto xl:rounded-full bg-black items-center flex xl:p-[1vw] p-[5vw]'>
                                <IoMdArrowDropright className='group-hover:block hidden duration-300 text-white xl:text-[3vw] ml-auto' />
                                <span className='text-white xl:text-[1.5vw]'>More</span>
                                <IoMdArrowDropright className='group-hover:hidden block duration-300 text-white xl:text-[3vw] ml-auto' />
                            </motion.a>
                        </div>
                    </div>


                    <div className="xl:flex xl:space-x-[2vw] space-y[5vh] my-[5vh] xl:px-10 xl:p-0 p-[5vw]">

                        <div className='xl:w-1/3'>
                            <motion.img
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className='w-full h-[30vh] mx-auto rounded-2xl' src='/images/results/1 (5).jpg' alt='results' />

                            <div className='grid xl:grid-cols-3 grid-cols-2 gap-2 my-5'>
                                <h4
                                    className="rounded-full border border-black xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                    <MaskText text="Engagement" />
                                </h4>
                                <h4
                                    className="rounded-full border border-black xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                    <MaskText text="SEO" />
                                </h4>
                                <h4
                                    className="rounded-full border border-black xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                    <MaskText text="Analytics" />
                                </h4>
                                <h4
                                    className="rounded-full border border-black xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                    <MaskText text="Followers" />
                                </h4>
                                <h4
                                    className="rounded-full border border-black xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                    <MaskText text="Views" />
                                </h4>
                            </div>
                        </div>

                        <div className='xl:w-1/3'>
                            <h4 className="xl:text-[1.5vw] text-[5vw] text-left space-y-[5vh] text-wrap font-semibold text-black ">
                                <MaskText text="A motivational video content creator who has seen a rapid increase in their social media presence, growing to 24K followers in September." />
                            </h4>
                            <MaskText text=
                                <p className="mt-2 sm:mt-3 xl:text-[1.3vw] font-normal text-left text-wrap text-black">Implemented engagementboosting techniques such as Q&A sessions, polls, and challenges.</p> />
                            <MaskText text=
                                <p className="mt-2 sm:mt-3 xl:text-[1.3vw] font-normal text-left text-wrap text-black">Monitored engagement trends and adjusted content strategy accordingly.</p> />
                            <MaskText text=
                                <p className="mt-2 sm:mt-3 xl:text-[1.3vw] font-normal text-left text-wrap text-black">Used targeted keywords in video titles and descriptions to improve search visibility.</p> />
                            <MaskText text=
                                <p className="mt-2 sm:mt-3 xl:text-[1.3vw] font-normal text-left text-wrap text-black">
                                    Regularly reviewed performance metrics to refine strategy and content approach.
                                </p>
                            />
                        </div>
                        <div className='xl:w-1/3'>
                            <div className='xl:space-y-[5vh]'>

                                <div className='xl:flex '>
                                    <div className='bg-black/90 rounded-2xl p-[2vw] items- text-center xl:w-[12vw]'>
                                        <motion.p
                                            initial={{ x: 20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="xl:text-[3vw] font-bold text-white  ">
                                            <span className='archivo-black-regular bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                                                24k
                                            </span>
                                        </motion.p>
                                    </div>

                                    <h2 className='items-center xl:flex xl:text-[2vw] mx-auto'>followers</h2>
                                </div>

                                <div className='xl:flex xl:p-0 p-[5vw]'>

                                    <div className='bg-black/90 rounded-2xl p-[2vw] items- text-center xl:w-[12vw]'>
                                        <motion.p
                                            initial={{ x: 20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="xl:text-[3vw] font-bold text-white  ">
                                            <span className='archivo-black-regular bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                                                30M
                                            </span>

                                        </motion.p>
                                    </div>

                                    <h2 className='items-center xl:flex xl:text-[2vw] mx-auto'>views</h2>
                                </div>

                                <div className='xl:flex xl:p-0 p-[5vw]'>

                                    <div className='bg-black/90 rounded-2xl p-[2vw] items- text-center xl:w-[12vw]'>
                                        <motion.p
                                            initial={{ x: 20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="xl:text-[3vw] font-bold text-white  ">
                                            <span className='archivo-black-regular bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                                                8M
                                            </span>
                                        </motion.p>
                                    </div>

                                    <h2 className='items-center xl:flex xl:text-[2vw] mx-auto'>shares</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Grid */}
                </div>















            </div>
        </ParallaxProvider>
    )
}

export default OurResults
