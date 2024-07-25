import { motion } from 'framer-motion'
import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Services = () => {
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
        <div className='bg-neutral-900 w-full font-[quench] px-5 '
        >
            <div className='backdrop-blur-sm w-full py-24'>
                <h2 className='text-amber-300 text-center p-5 lg:text-6xl text-4xl bowlby-one-regular'>
                    Services
                </h2>
                <section>
                    <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
                        <div>
                            <h1 className="text-2xl font-semibold text-indigo-400 lg:text-5xl">
                                Our&nbsp;
                                <span className="">Expertise</span>
                            </h1>

                            <div className="grid mt-12 gap-y-12 gap-x-2 md:grid-cols-2">
                                {services.map((data, index) => {
                                    return (

                                        <div>
                                            <div className={` p-2 overflow-hidden border rounded-3xl lg:flex items-center
                                             ${index === 0 && 'bg-red-400'}
                                                ${index === 1 && 'bg-lime-300'}
                                                ${index === 2 && 'bg-blue-400'}
                                                ${index === 3 && 'bg-amber-400'}
                                                `}>
                                                <img src="https://wldd.in/images/img5.png" alt="#_" className="lg:ml-5 w-[15vw] h-[vh] mx-auto rounded-2xl" />
                                                <h2 className={`lg:text-[2vw] items-center text-center
                                                    `}>{data.title}</h2>
                                            </div>

                                            <div className="text-balance h-[20vh]">
                                                <p className="mt-2 text-sm text-white">
                                                    {data.desc2}
                                                </p>

                                            </div>
                                            <div className="gap-3 flex justify-center">
                                                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold border-r-4 border-b-4 border-indigo-500 bg-black text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none" href="#contact">
                                                    Get started now
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>


                <h2 className='text-white lg:text-[3vw] text-[6vw] text-center'>
                    UpliftU is uplifting the businesses to the stratosphere!
                </h2>
                <h2 className='text-white lg:text-[1.3vw] text-center m-5'>
                    Join the UpliftU Revolution, Make a change. Support the cause! Experience Beyond the marketing for engagement
                </h2>
            </div>
        </div>
    )
}

export default Services
