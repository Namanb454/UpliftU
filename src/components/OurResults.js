import React from 'react'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'

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
            <div className='z-10 w-full'>
                <section>
                    <div className=" mx-auto font-[quench]"
                    >

                        <div>
                            <h1 className="text-stroke bowlby-one-regular lg:text-[5vw] text-4xl text-black  text-balance" style={{ WebkitTextStrokeColor: `calc(10px * var(--progress))` }}>
                                Our
                                <span className="bg-gradient-to-l from-indigo-500 to-amber-400 bg-clip-text text-transparent">&nbsp;Results</span>
                            </h1>
                            <p className="my-5 xl:text-[1.5vw] text-base font- text-neutral-600 text-balance">
                                Control and added security. With decentralization, users have more
                                control over their data and transactions, and the platform is less
                                susceptible to malicious attacks.
                            </p>
                        </div>
                    
                    </div>
                </section>


                <section className="">
                    <div className="px-8 mx-auto md:px-12 lg:px-0 h-full">
                        <div className="flex flex-col mx-auto sm:flex-row border-2 rounded-lg border-neutral-200 p-10">
                            {
                                results.map((data, index) => {
                                    return (
                                        <div className={`lg:h-[70vh] h-[50vh] w-[50vw] mx-auto p-2 overflow-hidden duration-500 origin-bottom border transform  rounded-3xl hover:rotate-0 hover:-translate-y-12 hover:scale-125
                                        `}>
                                            <img src={data.img} className="object- w-full h-full border shadow-2xl rounded-2xl" alt="#_" />
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </section>















            </div>
        </ParallaxProvider>
    )
}

export default OurResults
