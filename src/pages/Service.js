import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

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
    return (
        <div className='relative overflow-hidden text-balance font-[quench]'>

            <div className='p-5'>
                <Navbar />
            </div>

            <section>
                <div class="px-8 py-0 mx-auto md:px-12 lg:p-24 max-w-7xl">
                    <div class="text-center">
                        <h1 class="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
                            Why UpliftU For Your
                            <span class="text-gray-600"> Social Media</span>
                        </h1>
                        {/* <p class="mt-4 text-base font-medium text-gray-500 text-balance">
                            Control and added security. With decentralization, users have more
                            control over their data and transactions, and the platform is less
                            susceptible to malicious attacks.
                        </p> */}

                        <div class="grid grid-cols-2 mt-12 text-center gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                            {whyUpliftU.map((data, index) => {
                                return (

                                    <div className='rounded-l-full rounded-t-full rounded-br-none border-2 p-[1vw] border-black h-[30vh] w-[100%]'>
                                        <div class="mt-6 w-[80%] mx-auto items-center">
                                            {/* <h3 class="font-medium text-gray-900">Live editing</h3> */}
                                            <p class="mt-2 text-sm text-gray-500 font-sans font-semibold text-justify items-center">
                                                {data.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    )
}

export default Service
