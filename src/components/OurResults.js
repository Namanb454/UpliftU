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
            <div className=''>
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
                        {/* <div className="space-y-2">
                            <div className=" gap-2 lg:flex-row-reverse lg:max-w-7xl lg:mx-auto lg:flex">
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
                                        <div className="flex flex-col justify-center p-8 border bg-black rounded-3xl max-w-none">
                                            <h2 className="lg:text-[2vw] text-[5vw] font-medium text-indigo-400">
                                                Step I
                                            </h2>
                                            <p className="mt-4 font-medium text-neutral-200 text-pretty">
                                                We chat & confirm what you want to achieve and the services that will get you there – whether it be individual services, packaging it up or something more custom.
                                            </p>
                                        </div>
                                    </Parallax>
                                </div>

                            </div>
                            <div className=" gap-2 lg:max-w-7xl lg:mx-auto lg:flex">

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
                                        <div className="flex flex-col justify-center p-8 border bg-black rounded-3xl max-w-none">
                                            <h2 className="lg:text-[2vw] text-[5vw] font-medium text-lime-400">Step II</h2>
                                            <p className="mt-4 font-medium text-neutral-200 text-pretty">
                                                You will sign an agreement and submit initial payment to lock in the work.
                                            </p>
                                        </div>
                                    </Parallax>
                                </div>
                            </div>
                            <div className=" gap-2 flex-row-reverse lg:max-w-7xl lg:mx-auto lg:flex">

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
                                        <div className="flex flex-col justify-center p-8 border bg-black rounded-3xl max-w-none">
                                            <h2 className="lg:text-[2vw] text-[5vw] font-medium text-red-400">
                                                Step III
                                            </h2>
                                            <p className="mt-4 font-medium text-neutral-200 text-pretty">
                                                Once legalities are sorted we get the ball rolling!
                                            </p>
                                        </div>
                                    </Parallax>
                                </div>
                            </div>

                        </div> */}
                    </div>
                </section>


                <section className="overflowhidden">
                    <div className="px-8 mx-auto md:px-12 lg:px-0 h-full">
                        <div className="flex flex-col mx-auto sm:flex-row border-2 rounded-lg border-neutral-200 p-10">
                            {
                                results.map((data, index) => {
                                    return (
                                        <div className={`lg:h-[70vh] h-[50vh] w-[50vw] mx-auto p-2 overflow-hidden duration-500 origin-bottom border transform relative rounded-3xl hover:rotate-0 hover:-translate-y-12 hover:scale-125
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
