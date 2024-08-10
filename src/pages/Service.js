import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import { TbEyeCheck } from "react-icons/tb";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaUsersViewfinder, FaLocationArrow } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
const Service = () => {
    const whyUpliftU = [
        {
            'desc': 'We are the only firm that combines a strong Hospitality background with conceptual social media engagement expertise.'
        },
        {
            'desc': 'We focus on creating more engaging and interactive content that is relatable to audiences.'
        },
        {
            'desc': '100% guranteed audience interactions and engagement, resulting in a devoted consumer base.'
        },
        {
            'desc': "We don't limit our services like others, instead focus entierly on what is necessary for your audience."
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
    return (
        <div>
            <div className='relative p-5 overflow-hidden text-balance font-[quench]'>
                <div className=''>
                    <Navbar />
                </div>

                <section>
                    <div class="px-8 py-12 mx-auto md:px-12 lg:px-32">
                        <div class="text-center">
                            <h1 class="bg-gradient-to-l from-[#0d2c5e] to-[#489b9c] bg-clip-text text-transparent text-center p-5 lg:text-6xl text-4xl font-[genica]">
                                Why UpliftU For Your Social Media
                            </h1>
                            {/* <p class="mt-4 text-base font-medium text-gray-500 text-balance">
                            Control and added security. With decentralization, users have more
                            control over their data and transactions, and the platform is less
                            susceptible to malicious attacks.
                        </p> */}

                            <div class="xl:grid grid-cols-2 mt-12 text-center gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                                {whyUpliftU.map((data, index) => {
                                    return (

                                        <div className='rounded-3xl border-2 p-[1vw] border-[#1f2740] bg-[#bae2e4] lg:h-[40vh] h-[30vh] w-[100%] xl:my-0 my-[5vh]'>
                                            <div class="mt-6 w-[80%] mx-auto items-center">
                                                {/* <h3 class="font-medium text-gray-900">Live editing</h3> */}
                                                <p class="mt-2 xl:text-[1.3vw] text-[5vw] text-[#1f2740] font-sans font-semibold text-justify items-center">
                                                    {data.desc}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <h2 className='w-full my-[5vh] xl:text-[2vw]'>
                                The total number of unique users who have viewed our content.
                            </h2>
                            <div class="xl:grid grid-cols-2 text-center gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                                {users.map((data, index) => {
                                    return (
                                        <div className='text-center p-[1vw] border-black lg:h-[40vh] h-[30vh] w-[100%] xl:my-0 my-[5vh]'>
                                            <div class="mt-6 w-[80%] mx-auto text-center items-center space-y-[3vh]">
                                                {/* <h3 class="font-medium text-gray-900">Live editing</h3> */}
                                                <h2 className='text-[3vw] mx-auto w-fit'>
                                                    {data.img}
                                                </h2>
                                                <p class="mt-2 xl:text-[1.5vw] text-[5vw] text-gray-500 font-sans font-semibold items-center">
                                                    {data.title}
                                                </p>
                                                <h2 className='font-sans font-semibold xl:text-[2vw]'>
                                                    {data.no}
                                                </h2>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div class="px-8 py-12 mx-auto md:px-12 lg:px-32">
                        <div class="text-center">
                            <h1 class="bg-gradient-to-l from-[#0d2c5e] to-[#489b9c] bg-clip-text text-transparent text-center p-5 lg:text-6xl text-4xl font-[genica]">
                                How UpliftU Can Help You Grow
                            </h1>
                            <div className="grid mt-12 gap-y- gap-x-2 md:grid-cols-2">
                                <div>
                                    <div className='xl:block hidden animate-pulse w-fit text-[5vw] rotate-90'>
                                        <FaLocationArrow />
                                    </div>
                                    <div className="mt-2 xl:rounded-tl-full border-2 border-[#1f2740] bg-[#1f2740] h-[30vh] flex items-center justify-center my-auto">
                                        <p className=" font-medium text-[#bae2e4]">Engagement Through content</p>

                                    </div>
                                </div>
                                <div>
                                    <div className='xl:block hidden animate-pulse ml-auto w-fit text-[5vw] rotate-180'>
                                        <FaLocationArrow />
                                    </div>
                                    <div className="mt-2 xl:rounded-tr-full border-2 border-[#1f2740] bg-[#1f2740] h-[30vh] flex items-center justify-center my-auto">
                                        <p className=" font-medium text-[#bae2e4]">Make You Become The Influencer</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2 xl:rounded-bl-full border-2 border-[#1f2740] bg-[#1f2740] h-[30vh] flex items-center justify-center my-auto">
                                        <p className=" font-medium text-[#bae2e4]">Boosting Hospitality Through Social Media Content</p>
                                    </div>
                                    <div className='xl:block hidden animate-pulse w-fit text-[5vw] rotate-360'>
                                        <FaLocationArrow />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2 xl:rounded-br-full border-2 border-[#1f2740] bg-[#1f2740] h-[30vh] flex items-center justify-center my-auto">
                                        <p className=" font-medium text-[#bae2e4]">Build Community that Resonates with Brand</p>
                                    </div>
                                    <div className='xl:block hidden animate-pulse ml-auto w-fit text-[5vw] -rotate-90'>
                                        <FaLocationArrow />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
            <Contact />
        </div>
    )
}

export default Service
