import React from 'react'
import OurResults from '../components/OurResults'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const OurWork = () => {

    const work = [
        {
            'client': 'Forged in success',
            'Client_Overview': "A motivational video content creator who has seen a rapid increase in their social media presence, growing to 24K followers in September.",
            "strategy1": "Engagement Tactics: Implemented engagementboosting techniques such as Q&A sessions, polls, and challenges.",
            "strategy2": "Engagement Analysis: Monitored engagement trends and adjusted content strategy accordingly.",
            "strategy3": "SEO Optimization: Used targeted keywords in video titles and descriptions to improve search visibility.",
            "strategy4": "Analytics Review: Regularly reviewed performance metrics to refine strategy and content approach.",
            "growth1": "Followers: Gained from 0 to 24K followers in just one month.",
            "growth2": "Views: Achieved over 30 million views, boosting account reach.",
            "growth3": "Shares: Secured more than 8 million shares, indicating high audience engagement and content virality",
            'img': "images/client_success_results/3.svg"
        },
        {
            'client': 'Bamboo Homestay',
            'Client_Overview': "Bamboo Homestay is a serene retreat located in Vengurla, offering great views and a peacful atmosphere. The aim has been to enhance visibility and attract bookings through organic engagement.",
            "strategy1": "Visual Storytelling: Highlighted the unique features of the homestay through compelling visuals and storytelling.",
            "strategy2": "Influencer Marketing: Collaborated with influencers to extend reach and credibility.",
            "strategy3": "Food Transitions: Created content focusing on the homestay's culinary offerings, integrated with trending themes",
            "strategy4": "Community Engagement: Fostered a community feeling through interactive content and direct engagement with followers.",
            "growth1": "Impressions: Increased to 21,752, marking a 209% growth.",
            "growth2": "Accounts Reached: Grew to 9,233 accounts, reflecting a 985% increase.",
            "growth3": "Views: Generated over 1.5 million views.",
            "growth4": "Bookings: Facilitated over 160 organic bookings and received numerous positive reviews.",
            'img': "images/client_success_results/5.svg"
        },
        {
            'client': 'Finance by Himanshu',
            'Client_Overview': "Finance by Himanshu is a finance expert and influencer who joined us three months ago. The focus has been on building his presence from scratch and establishing him as a goto source for financial guidance.",
            "strategy1": "Content Development: Created and curated financerelated content that resonates with the target audience, including educational posts, tips, and financial news.",
            "strategy2": "Engagement Tactics: Implemented Q&A sessions, polls, and interactive stories to increase follower engagement.",
            "strategy3": "SEO Optimization: Utilized relevant keywords in post captions and descriptions to improve discoverability",
            "strategy4": "Lead Generation: Developed strategies to attract leads interested in personal finance guidance, resulting in substantial lead acquisition.",
            "growth1": "Accounts Reached: Over 15,000 accounts reached.",
            "growth2": "Impressions: More than 21,000 impressions.",
            "growth3": "Leads Generated: Secured over 20 interested leads for personal finance guidance.",
            'img': "images/client_success_results/7.svg"
        },
        {
            'client': 'BTS Island',
            'Client_Overview': "A BTS fan account aimed at creating content for BTS enthusiasts and growing organically on Instagram.",
            "strategy1": "Hashtag Optimization: Utilized trending and nichespecific hashtags to increase organic reach.",
            "strategy2": "UserGenerated Content: Encouraged followers to share their own BTSrelated content.",
            "strategy3": "Giveaways: Organized BTS merchandise giveaways to incentivize engagement and shares.",
            "strategy4": "Engagement Analysis: Monitored engagement trends and adjusted content strategy accordingly.",
            "growth1": "Views and Engagement: Achieved significant growth in organic views and engagement within the BTS fan community.",
            "growth2": "Community Interaction: Fostered a highly interactive community with increased user-generated content and participation in giveaways.",
            'img': "images/client_success_results/11.svg"
        },
        {
            'client': 'Signature Blonde Unisex Hair Salon',
            'Client_Overview': "A hair salon owner looking to enhance their social media presence and attract more clients through ads and social media management.",
            "strategy1": "Visual Content: Produced highquality beforeandafter transformation videos showcasing salon services.",
            "strategy2": "Trend Utilization: Leveraged trending styles and hashtags to create relevant and engaging content.",
            "strategy3": "Local Targeting: Implemented geotargeted ads to reach potential clients in the salon's vicinity.",
            "strategy4": "Customer Testimonials: Featured client testimonials and reviews to build trust and credibility.",
            "strategy5": "Social Engagement: Responded to comments and messages promptly to maintain a high level of customer service online.",
            "growth1": "Client Acquisition: Increased salon visits and expanded the client base through effective use of visual content and targeted ads.",
            "growth2": "Brand Awareness: Improved brand credibility and trust through customer testimonials and consistent engagement.",
            'img': "images/client_success_results/13.svg"
        },
    ]

    return (
        <div>
            <div className='relative overflow-hidden p-5 text-balance font-[quench]'>

                <Navbar />

                {/* Banner */}
                <div className="z-10 w-full ">

                    <div class="overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                    </div>

                    <div className="backdrop-blur- rounded-xl shadow-inner w-full mx-auto sm:px- lg:px-8 py-10 lg:py-24">
                        <div className="lg:max-w-5xl text-center mx-auto">
                            {/* Title */}
                            <div className="lg:max-w-5xl">
                                <h1 className="bowlby-one-regular block text-black text-[10vw] md:text-5xl lg:text-7xl">
                                    UpliftU’s <span className='bg-gradient-to-l from-indigo-500 to-amber-400 bg-clip-text text-transparent'>Client
                                        Success</span>Results
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




                <OurResults />


                {/* <div>
                    <img className='w-[40vw]' src='images/client_success_results/3.svg'/>
                </div> */}


                {work.map((data, index) => {
                    return (


                        <section>
                            <div className="px-8 py-24 mx-auto md:px-12 lg:px-12 max-w-7xl">
                                <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
                                    <div className="md:order-first">
                                        <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 text-balance">
                                            {data.client}
                                            {/* <span className="text-gray-600">wherever and anywhere</span> */}
                                        </h1>
                                        <dl className="grid grid-cols- gap-4 mt-12 list-none lg:gap-1">
                                            <div>
                                                <div>❖</div>
                                                <dt className="mt-4 font-medium text-gray-900">
                                                    Client Overview
                                                </dt>
                                                <dd className="mt-2 text-sm text-gray-500">
                                                    {data.Client_Overview}
                                                </dd>
                                            </div>
                                            <div>
                                                <div>❖</div>
                                                <dt className="mt-4 font-medium text-gray-900">
                                                    Strategies Utilized
                                                </dt>
                                                <dd className="mt-2 text-sm text-gray-500">
                                                    {data.strategy1}
                                                </dd>
                                                <dd className="mt-2 text-sm text-gray-500">
                                                    {data.strategy2}
                                                </dd>
                                                <dd className="mt-2 text-sm text-gray-500">
                                                    {data.strategy3}
                                                </dd>
                                                <dd className="mt-2 text-sm text-gray-500">
                                                    {data.strategy4}
                                                </dd>
                                            </div>
                                            <div>
                                                <div>❖</div>
                                                <dt className="mt-4 font-medium text-gray-900">Growth Achieved:</dt>
                                                <dd className="mt-2 text-sm text-gray-500">
                                                    {data.growth1}
                                                </dd>
                                                <dd className="mt-2 text-sm text-gray-500">
                                                    {data.growth2}
                                                </dd>
                                                <dd className="mt-2 text-sm text-gray-500">
                                                    {data.growth3}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="order-first block w-full mt-12 lg:mt-0">
                                        <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                                            <img alt="#_" className="relative w-full rounded-2xl drop-shadow-2xl" src={data.img} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    )
                })}


            </div>
                <Contact />
        </div>
    )
}

export default OurWork
