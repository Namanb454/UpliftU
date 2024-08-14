import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import { TbEyeCheck } from "react-icons/tb";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaUsersViewfinder, FaLocationArrow } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { MaskText } from '../components/MaskText';
import { motion } from 'framer-motion';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
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

    const services = [
        {
            'title': "Guide",
            'tagline': "Upgrade Your Team's Efforts with Expert Engagement Management.",
            'desc': "The UpliftU Guide service is designed for hotels and restaurants with in-house content creation teams or agencies seeking strategic direction. Our dedicated Social Media Manager, specialized in engagement, collaborates with your team to provide the necessary guidance to amplify your brand's message. By developing a comprehensive social media strategy that includes trend analysis and engagement optimization recommendations, we ensure your content is impactful and aligns with your goals. Regular consultations and feedback sessions are part of our process, helping you navigate the ever-changing social media landscape with confidence and achieve measurable engagement growth.",
            'deliverables1': "Dedicated Social Media Manager Specialized in Engagement",
            'deliverables2': "Engagement Optimization Recommendations",
            'deliverables3': "Social Media Strategy Development with Trend Analysis",
            'deliverables4': "Regular Consultations and Feedback",
            'img': 'Website_Images/Guide.svg'
        },
        {
            'title': "Management",
            'tagline': "Complete Social Media Management for Guaranteed Growth",
            'desc': "Our UpliftU Management service offers a comprehensive social media management solution for hotels and restaurants seeking a hands-off approach. With a dedicated Social Media Manager specializing in engagement, we take full responsibility for managing your social media handles, ensuring they accurately reflect your brand's voice and connect with your audience. From creating a content calendar to scheduling and posting engaging content, our team handles all aspects of social media management. We prioritize community engagement by promptly responding to comments and messages, fostering an engaged and loyal audience. Additionally, performance reports and analytics provide valuable insights to optimize your strategy, allowing you to focus on your core business while we handle the intricacies of social media.",
            'deliverables1': "Dedicated Social Media Manager Specialized in Engagement",
            'deliverables2': "Professional Social Media Account Management",
            'deliverables3': "Content Calendar Creation and Execution",
            'deliverables4': "Scheduling and Posting of Content",
            'deliverables5': "Community Management (Responding to Comments and Messages)",
            'deliverables6': "Performance Reports and Analytics",
            'img': 'Website_Images/Management.svg'
        },
        {
            'title': "Odyssey",
            'tagline': "Transform Your Brand into an Influencer with Our Comprehensive Approach",
            'desc': "The UpliftU Odyssey service offers a complete social media solution for hotels and restaurants looking to become industry influencers. This all-inclusive package provides everything from UpliftU Management, along with a dedicated team of content creators and videographers to produce high-quality, engaging content. We handle concept development, shooting, and editing to tell your brand's story in a compelling and authentic way. Our diverse content formats, including interviews, user-generated content, and behind-the-scenes peeks, captivate your audience and boost engagement. Optional influencer collaborations further enhance your reach and credibility. With our commitment to delivering 100% engagement growth, our team transforms your brand's social media presence and establishes it as a leader in the hospitality sector.",
            'deliverables1': "All Services Included in UpliftU Management",
            'deliverables2': "Dedicated Team of Content Creators and Videographers",
            'deliverables3': "High-Quality Video Content Creation (Concept Development, Shooting, Editing",
            'deliverables4': "Engaging Content Formats",
            'deliverables5': "Scriptwriting and Video Production for Reels",
            'deliverables6': "Influencer Collaborations (Optional)",
            'img': 'Website_Images/Odyssey.svg'
        },
        {
            'title': "Audit",
            'tagline': "Identify Blind Spots and Unlock Engagement Potential",
            'desc': "Our UpliftU Audit service provides a detailed and well-researched analysis of your brand's social media performance. This service is designed to help you identify blind spots and discover opportunities for increased engagement. Our expert Engagement Growth Officers conduct thorough research and analysis, offering strategic recommendations tailored to your brand's unique needs. Whether you need to optimize content strategy, adjust posting schedules, or find the right audience engagement tactics, our audit delivers actionable insights that drive growth. Expect a comprehensive report that outlines what works, areas that need improvement, and strategic guidance to enhance your social media efforts. Let us guide you in optimizing your online presence and achieving your brand's full potential.",
            'deliverables1': "Comprehensive Audit Report",
            'deliverables2': "Strategic Recommendations",
            'deliverables3': "Identification of Blind Spots",
            'deliverables4': "Engagement Growth Opportunities",
            'deliverables5': "Trend Analysis",
            'deliverables6': "Actionable Insights",
            'img': 'Website_Images/Audit.jpeg'
        },
    ]
    return (
        <div>
            <div className='relative p-5 overflow-hidden text-balance poppins-semibold'>
                <div className=''>
                    <Navbar />
                </div>

                <section>
                    <div class="px-8 py-12 mx-auto md:px-12 lg:px-32">
                        <div class="text-center">
                            <section>
                                <MaskText text=
                                    <div className="my-[5vh] mx-auto poppins-semibold"
                                    >
                                        <div>
                                            <h1 className="archivo-black-regular xl:leading-[10vh] lg:text-[5vw] text-4xl text-neutral-900 text-balance" >
                                                Why UpliftU For Your&nbsp;
                                                <span className="bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]">Social Media</span>
                                            </h1>
                                        </div>

                                    </div>
                                />
                            </section>
                            {/* <p class="mt-4 text-base font-medium text-gray-500 text-balance">
                            Control and added security. With decentralization, users have more
                            control over their data and transactions, and the platform is less
                            susceptible to malicious attacks.
                        </p> */}

                            <div class="xl:grid grid-cols-2 mt-12 text-center gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                                {whyUpliftU.map((data, index) => {
                                    return (
                                        <motion.div
                                            initial={{ x: -100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.2 * index }}
                                            className='rounded-3xl border-2 p-[1vw] bg-black lg:h-[40vh] h-[30vh] w-[100%] xl:my-0 my-[5vh]'>
                                            <div class="mt-6 w-[80%] mx-auto items-center">
                                                {/* <h3 class="font-medium text-gray-900">Live editing</h3> */}
                                                <p class="mt-2 xl:text-[1.3vw] text-white font-normal text-left text-wrap items-center">
                                                    {data.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )
                                })}

                            </div>
                            <h2 className='w-full my-[5vh] xl:text-[2vw] capitalize text-[#1f2740]'>
                                The total number of unique users who have viewed our content.
                            </h2>
                            <div class="xl:grid grid-cols-2 text-center gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                                {users.map((data, index) => {
                                    return (
                                        <div className='text-center p-[1vw] border-black lg:h-[40vh] w-[100%] xl:my-0 my-[5vh]'>
                                            <div class="mt-6 w-[80%] mx-auto text-center items-center space-y-[3vh]">
                                                {/* <h3 class="font-medium text-gray-900">Live editing</h3> */}
                                                <h2 className='xl:text-[3vw] text-[10vw] mx-auto w-fit'>
                                                    {data.img}
                                                </h2>
                                                <p class="mt-2 xl:text-[1.5vw] text-[5vw] text-[#489b9c]  font-semibold items-center">
                                                    {data.title}
                                                </p>
                                                <h2 className=' font-semibold xl:text-[2vw] text-[5vw]'>
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
                            <h1 className="archivo-black-regular xl:leading-[10vh] lg:text-[5vw] text-4xl text-neutral-900 text-balance" >
                                How UpliftU Can Help You&nbsp;
                                <span className="bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]">Grow</span>
                            </h1>
                            <div className="grid mt-12 gap-y- gap-x-2 md:grid-cols-2">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 0.2 }}
                                >
                                    <div className='xl:block hidden text-[#489b9c] animate-pulse w-fit text-[5vw] rotate-90'>
                                        <FaLocationArrow />
                                    </div>
                                    <div className="mt-2 xl:rounded-tl-full border-2 bg-black h-[30vh] flex items-center justify-center my-auto">
                                        <p className=" font-light xl:text-[1.5vw] text-[5vw] xl:p-[5vw] text-white">
                                            <MaskText text="Engagement Through Content" /></p>

                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 0.3 }}
                                >
                                    <div className='xl:block hidden text-[#489b9c] animate-pulse ml-auto w-fit text-[5vw] rotate-180'>
                                        <FaLocationArrow />
                                    </div>
                                    <div className="mt-2 xl:rounded-tr-full border-2 bg-black h-[30vh] flex items-center justify-center my-auto">
                                        <p className=" font-light xl:text-[1.5vw] text-[5vw] xl:p-[5vw] text-white"><MaskText text="Make You Become The Influencer" /></p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 0.4 }}
                                >
                                    <div className="mt-2 xl:rounded-bl-full border-2 bg-black h-[30vh] flex items-center justify-center my-auto">
                                        <p className=" font-light xl:text-[1.5vw] text-[5vw] xl:p-[5vw] text-white"><MaskText text="Boosting Hospitality Through Social Media Content" /></p>
                                    </div>
                                    <div className='xl:block hidden text-[#489b9c] animate-pulse w-fit text-[5vw] rotate-360'>
                                        <FaLocationArrow />
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 0.5 }}
                                >
                                    <div className="mt-2 xl:rounded-br-full border-2 bg-black h-[30vh] flex items-center justify-center my-auto">
                                        <p className=" font-light xl:text-[1.5vw] text-[5vw] xl:p-[5vw] text-white"><MaskText text="Build Community that Resonates with Brand" /></p>
                                    </div>
                                    <div className='xl:block hidden text-[#489b9c] animate-pulse ml-auto w-fit text-[5vw] -rotate-90'>
                                        <FaLocationArrow />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className=''>
                    <ParallaxProvider>
                        {services.map((data, index) => {
                            return (

                                <div className=" items-center w-full py-12 mx-auto  lg:py-24 px-[10vw]">
                                    <div className={`xl:flex items-center grid-cols-1 gap-6 lg:grid-cols-2 overflow-hidden
                                ${index === 1 && 'flex-row-reverse'}
                                ${index === 3 && 'flex-row-reverse'}
                                    `}>
                                        <div className="order-first block mt-12 aspect-square lg:mt-0 xl:w-1/2 overflow-hidden">
                                            <Parallax
                                                translateY={['-80', '100']}

                                                className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                                                <img alt="#_" className=" w-full rounded-2xl drop-shadow-2xl aspect-square" src={data.img} />
                                            </Parallax>
                                        </div>
                                        <div className=" md:order-first space-y-[5vh] xl:text-[1vw] xl:w-[80%] ">
                                            {/* <Parallax
                                                // translateY={['-80', '100']}
                                                > */}
                                            <h1 className="archivo-black-regular xl:leading-[10vh] lg:text-[4vw] text-4xl text-neutral-900" >
                                                UpliftU&nbsp;
                                                <span className="flex w-fit bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]">{data.title}</span>
                                            </h1>
                                            <p className='xl:text-[1.3vw] text-wrap'>{data.tagline}</p>

                                            <div className='space-y-[3vh]'>
                                                <div className='space-y-[2vh] text-wrap font-light xl:text-[1.1vw]'>
                                                    <h3>
                                                        {data.desc}
                                                    </h3>
                                                </div>
                                            </div>

                                            <h2 className='xl:text-[1.3vw]'>Deliverables:</h2>
                                            <div className='flex xl:text-wrap space-x-[4vw] text-[#1f2740] font-light xl:text-[1.1vw]'>
                                                <div className='space-y-[2vh]'>
                                                    <h2>
                                                        <div className='text-[#489b9c]'>❖</div>
                                                        {data.deliverables1}

                                                    </h2>
                                                    <h2>
                                                        <div className='text-[#489b9c]'>❖</div>
                                                        {data.deliverables3}

                                                    </h2>
                                                    <h2>
                                                        <div className='text-[#489b9c]'>❖</div>
                                                        {data.deliverables5}

                                                    </h2>
                                                </div>

                                                <div className='space-y-[2vh]'>
                                                    <h2>
                                                        <div className='text-[#489b9c]'>❖</div>
                                                        {data.deliverables2}
                                                    </h2>
                                                    <h2>
                                                        <div className='text-[#489b9c]'>❖</div>
                                                        {data.deliverables4}
                                                    </h2>
                                                    <h2>
                                                        <div className='text-[#489b9c]'>❖</div>
                                                        {data.deliverables6}
                                                    </h2>
                                                </div>

                                            </div>
                                            {/* </Parallax> */}

                                        </div>
                                    </div>

                                    <div className="mt-8 gap-3">
                                        <a className="py-3 px-4 inline-flex items-center gap-x-2 xl:text-[1.3vw] font-light border-r-4 border-b-4 border-[#489b9c] bg-[#489b9c] text-white hover:bg-[#489b9c] disabled:opacity-50 disabled:pointer-events-none" href="/contact">
                                            Get started now
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </ParallaxProvider>
                </section>


            </div>
            <Contact />
        </div>
    )
}

export default Service
