import React from 'react'
import OurResults from '../components/OurResults'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MaskText } from '../components/MaskText'

const OurWork = () => {

    // const work = [
    //     {
    //         'client': 'Forged in success',
    //         'Client_Overview': "A motivational video content creator who has seen a rapid increase in their social media presence, growing to 24K followers in September.",
    //         "strategy1": "Engagement Tactics: Implemented engagementboosting techniques such as Q&A sessions, polls, and challenges.",
    //         "strategy2": "Engagement Analysis: Monitored engagement trends and adjusted content strategy accordingly.",
    //         "strategy3": "SEO Optimization: Used targeted keywords in video titles and descriptions to improve search visibility.",
    //         "strategy4": "Analytics Review: Regularly reviewed performance metrics to refine strategy and content approach.",
    //         "growth1": "Followers: Gained from 0 to 24K followers in just one month.",
    //         "growth2": "Views: Achieved over 30 million views, boosting account reach.",
    //         "growth3": "Shares: Secured more than 8 million shares, indicating high audience engagement and content virality",
    //         'img': "images/client_success_results/3.svg"
    //     },
    //     {
    //         'client': 'Bamboo Homestay',
    //         'Client_Overview': "Bamboo Homestay is a serene retreat located in Vengurla, offering great views and a peacful atmosphere. The aim has been to enhance visibility and attract bookings through organic engagement.",
    //         "strategy1": "Visual Storytelling: Highlighted the unique features of the homestay through compelling visuals and storytelling.",
    //         "strategy2": "Influencer Marketing: Collaborated with influencers to extend reach and credibility.",
    //         "strategy3": "Food Transitions: Created content focusing on the homestay's culinary offerings, integrated with trending themes",
    //         "strategy4": "Community Engagement: Fostered a community feeling through interactive content and direct engagement with followers.",
    //         "growth1": "Impressions: Increased to 21,752, marking a 209% growth.",
    //         "growth2": "Accounts Reached: Grew to 9,233 accounts, reflecting a 985% increase.",
    //         "growth3": "Views: Generated over 1.5 million views.",
    //         "growth4": "Bookings: Facilitated over 160 organic bookings and received numerous positive reviews.",
    //         'img': "images/client_success_results/5.svg"
    //     },
    //     {
    //         'client': 'BTS Island',
    //         'Client_Overview': "A BTS fan account aimed at creating content for BTS enthusiasts and growing organically on Instagram.",
    //         "strategy1": "Hashtag Optimization: Utilized trending and nichespecific hashtags to increase organic reach.",
    //         "strategy2": "UserGenerated Content: Encouraged followers to share their own BTSrelated content.",
    //         "strategy3": "Giveaways: Organized BTS merchandise giveaways to incentivize engagement and shares.",
    //         "strategy4": "Engagement Analysis: Monitored engagement trends and adjusted content strategy accordingly.",
    //         "growth1": "Views and Engagement: Achieved significant growth in organic views and engagement within the BTS fan community.",
    //         "growth2": "Community Interaction: Fostered a highly interactive community with increased user-generated content and participation in giveaways.",
    //         'img': "images/client_success_results/11.svg"
    //     },
    //     {
    //         'client': 'Signature Blonde Unisex Hair Salon',
    //         'Client_Overview': "A hair salon owner looking to enhance their social media presence and attract more clients through ads and social media management.",
    //         "strategy1": "Visual Content: Produced highquality beforeandafter transformation videos showcasing salon services.",
    //         "strategy2": "Trend Utilization: Leveraged trending styles and hashtags to create relevant and engaging content.",
    //         "strategy3": "Local Targeting: Implemented geotargeted ads to reach potential clients in the salon's vicinity.",
    //         "strategy4": "Customer Testimonials: Featured client testimonials and reviews to build trust and credibility.",
    //         "strategy5": "Social Engagement: Responded to comments and messages promptly to maintain a high level of customer service online.",
    //         "growth1": "Client Acquisition: Increased salon visits and expanded the client base through effective use of visual content and targeted ads.",
    //         "growth2": "Brand Awareness: Improved brand credibility and trust through customer testimonials and consistent engagement.",
    //         'img': "images/client_success_results/13.svg"
    //     },
    //     {
    //         'client': 'Finance by Himanshu',
    //         'Client_Overview': "Finance by Himanshu is a finance expert and influencer who joined us three months ago. The focus has been on building his presence from scratch and establishing him as a goto source for financial guidance.",
    //         "strategy1": "Content Development: Created and curated financerelated content that resonates with the target audience, including educational posts, tips, and financial news.",
    //         "strategy2": "Engagement Tactics: Implemented Q&A sessions, polls, and interactive stories to increase follower engagement.",
    //         "strategy3": "SEO Optimization: Utilized relevant keywords in post captions and descriptions to improve discoverability",
    //         "strategy4": "Lead Generation: Developed strategies to attract leads interested in personal finance guidance, resulting in substantial lead acquisition.",
    //         "growth1": "Accounts Reached: Over 15,000 accounts reached.",
    //         "growth2": "Impressions: More than 21,000 impressions.",
    //         "growth3": "Leads Generated: Secured over 20 interested leads for personal finance guidance.",
    //         'img': "images/client_success_results/7.svg"
    //     },
    // ]

    const work = [
        {
            'client': 'Forged in success',
            'Client_Overview': "A motivational video content creator who has seen a rapid increase in their social media presence, growing to 24K followers in September.",
            "strategy1": "Implemented engagementboosting techniques such as Q&A sessions, polls, and challenges.",
            "strategy2": "Monitored engagement trends and adjusted content strategy accordingly.",
            "strategy3": "Used targeted keywords in video titles and descriptions to improve search visibility.",
            "strategy4": "Regularly reviewed performance metrics to refine strategy and content approach.",
            "growth1": "Gained from 0 to 24K followers in just one month.",
            "growth2": "Achieved over 30 million views, boosting account reach.",
            "growth3": "Secured more than 8 million shares, indicating high audience engagement and content virality",
            'img': "images/client_success_results/3.svg"
        },
        {
            'client': 'Bamboo Homestay',
            'Client_Overview': "Bamboo Homestay is a serene retreat located in Vengurla, offering great views and a peacful atmosphere. The aim has been to enhance visibility and attract bookings through organic engagement.",
            "strategy1": "Highlighted the unique features of the homestay through compelling visuals and storytelling.",
            "strategy2": "Collaborated with influencers to extend reach and credibility.",
            "strategy3": "Created content focusing on the homestay's culinary offerings, integrated with trending themes",
            "strategy4": "Fostered a community feeling through interactive content and direct engagement with followers.",
            "growth1": "Increased to 21,752, marking a 209% growth.",
            "growth2": "Grew to 9,233 accounts, reflecting a 985% increase.",
            "growth3": "Generated over 1.5 million views.",
            "growth4": "Facilitated over 160 organic bookings and received numerous positive reviews.",
            'img': "images/client_success_results/5.svg"
        },
        {
            'client': 'BTS Island',
            'Client_Overview': "A BTS fan account aimed at creating content for BTS enthusiasts and growing organically on Instagram.",
            "strategy1": "Utilized trending and nichespecific hashtags to increase organic reach.",
            "strategy2": "Encouraged followers to share their own BTSrelated content.",
            "strategy3": "Organized BTS merchandise giveaways to incentivize engagement and shares.",
            "strategy4": "Monitored engagement trends and adjusted content strategy accordingly.",
            "growth1": "Achieved significant growth in organic views and engagement within the BTS fan community.",
            "growth2": "Fostered a highly interactive community with increased user-generated content and participation in giveaways.",
            'img': "images/client_success_results/11.svg"
        },
        {
            'client': 'Signature Blonde Unisex Hair Salon',
            'Client_Overview': "A hair salon owner looking to enhance their social media presence and attract more clients through ads and social media management.",
            "strategy1": "Produced highquality beforeandafter transformation videos showcasing salon services.",
            "strategy2": "Leveraged trending styles and hashtags to create relevant and engaging content.",
            "strategy3": "Implemented geotargeted ads to reach potential clients in the salon's vicinity.",
            "strategy4": "Featured client testimonials and reviews to build trust and credibility.",
            "strategy5": "Responded to comments and messages promptly to maintain a high level of customer service online.",
            "growth1": "Increased salon visits and expanded the client base through effective use of visual content and targeted ads.",
            "growth2": "Improved brand credibility and trust through customer testimonials and consistent engagement.",
            'img': "images/client_success_results/13.svg"
        },
        {
            'client': 'Finance by Himanshu',
            'Client_Overview': "Finance by Himanshu is a finance expert and influencer who joined us three months ago. The focus has been on building his presence from scratch and establishing him as a goto source for financial guidance.",
            "strategy1": "Created and curated financerelated content that resonates with the target audience, including educational posts, tips, and financial news.",
            "strategy2": "Implemented Q&A sessions, polls, and interactive stories to increase follower engagement.",
            "strategy3": "Utilized relevant keywords in post captions and descriptions to improve discoverability",
            "strategy4": "Developed strategies to attract leads interested in personal finance guidance, resulting in substantial lead acquisition.",
            "growth1": "Over 15,000 accounts reached.",
            "growth2": "More than 21,000 impressions.",
            "growth3": "Secured over 20 interested leads for personal finance guidance.",
            'img': "images/client_success_results/7.svg"
        },
    ]

    return (
        <div className='relative overflow-hidden text-balance popping-semibold'>

            <div className='p-5'>
                <Navbar />
            </div>


            <div className=' w-full lg:px-24 overflow-hidden p-5 text-balance font-sans font-semibold text-justify space-y-[5vh]'>

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

                {work.map((data, index) => {
                    return (

                        <div className="relative text-center w-full border-2 border-black rounded-3xl px4 py-10 sm:px- lg:px-0 lg:py-12 mx-auto">
                            {/* Grid */}

                            <div className='flex rounded- shadow-[#] border-b-2 border-black shadow-md pb-5 w-full'>
                                <div className='px-10 xl:flex w-full'>
                                    <h2 className='xl:text-[3vw] text-[6vw] archivo-black-regular w-fit'>{data.client}</h2>
                                    {/* <a href='/our-work' className='xl:w-[10vw] ml-auto xl:rounded-full bg-black items-center flex xl:p-[1vw] p-[5vw]'>
                                        <span className='text-white xl:text-[1.5vw]'>More</span>
                                        <IoMdArrowDropright className='text-white xl:text-[3vw] ml-auto' />
                                    </a> */}
                                </div>
                            </div>


                            <div className="xl:flex xl:space-x-[2vw] space-y[5vh] my-[5vh] xl:px-10 xl:p-0 p-[5vw]">

                                <div className='xl:w-1/3'>
                                    <img className='w-full h-[30vh] mx-auto rounded-2xl' src='/images/results/1 (5).jpg' />

                                    <div className='grid xl:grid-cols-3 grid-cols-2 gap-2 my-5'>
                                        <h4
                                            className="rounded-full border border-black bg-white xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                            <MaskText text="Engagement" />
                                        </h4>
                                        <h4
                                            className="rounded-full border border-black bg-white xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                            <MaskText text="SEO" />
                                        </h4>
                                        <h4
                                            className="rounded-full border border-black bg-white xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                            <MaskText text="Analytics" />
                                        </h4>
                                        <h4
                                            className="rounded-full border border-black bg-white xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                            <MaskText text="Followers" />
                                        </h4>
                                        <h4
                                            className="rounded-full border border-black bg-white xl:text-[1.3vw] font-semibold text-[#489b9c] ">
                                            <MaskText text="Views" />
                                        </h4>
                                    </div>
                                </div>

                                <div className='xl:w-1/3'>
                                    <h4 className="xl:text-[1.5vw] text-[5vw] text-left text-wrap font-semibold text-black ">
                                        <MaskText text={data.Client_Overview} />
                                    </h4>
                                    <p className="mt-2 sm:mt-3 xl:text-[1.3vw] font-normal text-left text-wrap text-black">{data.strategy1}</p>
                                    <p className="mt-2 sm:mt-3 xl:text-[1.3vw] font-normal text-left text-wrap text-black">{data.strategy2}</p>
                                    <p className="mt-2 sm:mt-3 xl:text-[1.3vw] font-normal text-left text-wrap text-black">{data.strategy3}</p>
                                    <p className="mt-2 sm:mt-3 xl:text-[1.3vw] font-normal text-left text-wrap text-black">{data.strategy4}</p>
                                </div>
                                <div className='xl:w-1/3'>
                                    <div className='xl:space-y-[5vh]'>

                                        <div className='xl:flex '>
                                            <div className='bg-black/90 rounded-2xl p-[2vw] items- text-center xl:w-[12vw]'>
                                                <motion.p
                                                    initial={{ x: 20, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.3 }}
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
                    )
                })}




                {/* <section>
                    <div className="px-8 mx-auto md:px-12 lg:px-12 max-w-7xl">
                        {work.map((data, index) => {
                            return (


                                <div className="grid my-12 items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
                                    <div className="md:order-first">
                                        <h1 className="xl:text-[4vw] text-[8vw] font-semibold tracking-tighter text-gray-900 text-balance popping-semibold">
                                            {data.client}
                                        </h1>
                                        <dl className="grid grid-cols- gap-4 mt-12 list-none lg:gap-1">
                                            <div>
                                                <div className='text-[#489b9c] xl:text-[1.5vw]'>❖</div>
                                                <dt className="mt-4 font-bold xl:text-[1.5vw] text-[5vw]">
                                                    Client Overview
                                                </dt>
                                                <dd className="mt-2 text-[#1f2740] xl:text-[1.1vw]">
                                                    {data.Client_Overview}
                                                </dd>
                                            </div>
                                            <div>
                                                <div className='text-[#489b9c] xl:text-[1.5vw]'>❖</div>
                                                <dt className="mt-4 font-bold xl:text-[1.5vw] text-[5vw]">
                                                    Strategies Utilized
                                                </dt>
                                                <dd className="mt-2 text-[#1f2740] xl:text-[1.1vw]">
                                                    {data.strategy1}
                                                </dd>
                                                <dd className="mt-2 text-[#1f2740] xl:text-[1.1vw]">
                                                    {data.strategy2}
                                                </dd>
                                                <dd className="mt-2 text-[#1f2740] xl:text-[1.1vw]">
                                                    {data.strategy3}
                                                </dd>
                                                <dd className="mt-2 text-[#1f2740] text-[1.1vw]">
                                                    {data.strategy4}
                                                </dd>
                                            </div>
                                            <div>
                                                <div className='text-[#489b9c] xl:text-[1.5vw]'>❖</div>
                                                <dt className="mt-4 font-bold xl:text-[1.5vw] text-[5vw]">
                                                    Growth Achieved:</dt>
                                                <dd className="mt-2 text-[#1f2740] xl:text-[1.1vw]">
                                                    {data.growth1}
                                                </dd>
                                                <dd className="mt-2 text-[#1f2740] xl:text-[1.1vw]">
                                                    {data.growth2}
                                                </dd>
                                                <dd className="mt-2 text-[#1f2740] xl:text-[1.1vw]">
                                                    {data.growth3}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="order-first block w-full mt-12 lg:mt-0">
                                        <div className="h-full p-2 duration-500 hover:scale-125 border shadow-lg bg-gray-50 rounded-3xl">
                                            <img alt="#_" className=" w-full rounded-2xl drop-shadow-2xl" src={data.img} />
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </section> */}


            </div>
            <Contact />
        </div>
    )
}

export default OurWork
