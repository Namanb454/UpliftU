import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Process = () => {
    return (
        <ParallaxProvider>
            <div>
                <section>
                    <div className=" px-8 py-24 mx-auto font-[quench] overflow-hidden"
                    >

                        <div>
                            <h1 className="bowlby-one-regular lg:text-6xl text-4xl text-black  text-balance">
                                Here the proecess
                                <span className="text-indigo-500">&nbsp;how we will work with you</span>
                            </h1>
                            <p className="mt-4 text-base font- text-neutral-600 text-balance">
                                Control and added security. With decentralization, users have more
                                control over their data and transactions, and the platform is less
                                susceptible to malicious attacks.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="grid gap-2 mt-12 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
                                <div className="max-w-lg min-w-full mx-auto">
                                    <Parallax
                                        translateX={['10', '-10']}
                                        className="flex h-full">
                                        <div className="flex flex-col justify-center p-8 border bg-black rounded-3xl max-w-none">
                                            <h2 className="text-[2vw] font-medium text-blue-300">
                                                Step I
                                            </h2>
                                            <p className="mt-4 font-medium text-white/90 text-pretty">
                                                We chat & confirm what you want to achieve and the services that will get you there – whether it be individual services, packaging it up or something more custom.
                                            </p>
                                        </div>
                                    </Parallax>
                                </div>
                                <div className="lg:col-span-2">
                                    <Parallax
                                        // slowerScrollRate={true}
                                        translateX={['-10', '10']}
                                    // speed={['1']}
                                    >
                                        <div className="relative [h]- p-2 overflow-hidden rounded-3xl">
                                            <img src="images/chat.jpg" className="object-contain mx-auto lg:h-[50vh] lg:w-[40vw] border shadow-2xl rounded-2xl" />
                                        </div>
                                    </Parallax>
                                </div>
                            </div>
                            <div className="grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
                                <div className="max-w-lg min-w-full mx-auto lg:col-start-3">
                                    <Parallax
                                        translateX={['-10', '10']}
                                        className="flex h-full">
                                        <div className="flex flex-col justify-center p-8 border bg-black rounded-3xl max-w-none">
                                            <h2 className="text-[2vw] font-medium text-amber-400">Step II</h2>
                                            <p className="mt-4 font-medium text-white/90 text-pretty">
                                                You will sign an agreement and submit initial payment to lock in the work.
                                            </p>
                                        </div>
                                    </Parallax>
                                </div>
                                <div className="lg:col-start-1 lg:col-span-2">
                                    <Parallax
                                        translateX={['10', '-10']}
                                    >
                                        <div className="relative h-[full] p-2 overflow-hidden  rounded-3xl">
                                            <img src="/images/agreement.jpg" className="object-contain mx-auto lg:h-[50vh] lg:w-[40vw] border shadow-2xl rounded-2xl" />
                                        </div>
                                    </Parallax>
                                </div>
                            </div>
                            <div className="grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
                                <div className="max-w-lg min-w-full mx-auto">
                                    <Parallax
                                        translateX={['10', '-10']}
                                        className="flex h-full">
                                        <div className="flex flex-col justify-center p-8 border bg-black rounded-3xl max-w-none">
                                            <h2 className="text-[2vw] font-medium text-red-400">
                                                Step III
                                            </h2>
                                            <p className="mt-4 font-medium text-white/90 text-pretty">
                                                Once legalities are sorted we get the ball rolling!
                                            </p>
                                        </div>
                                    </Parallax>
                                </div>
                                <div className="lg:col-span-2">
                                    <Parallax
                                        translateX={['-10', '10']}
                                    >
                                        <div className="relative h-[full] p-2 overflow-hidden rounded-3xl">
                                            <img src="/images/working.jpg" className="object-contain mx-auto lg:h-[50vh] lg:w-[40vw] border shadow-2xl rounded-2xl" />
                                        </div>
                                    </Parallax>
                                </div>
                            </div>

                        </div>



                        <section>
                            <div className="relative py-24 w-full">
                                <p className=" font-semibold text-center text-gray-500 uppercase">
                                    Trusted by the world’s most innovative teams
                                </p>
                                   
                                <Parallax
                                translateX={['20', '-50']}
                                 className="absolute w-full flex mt-12">
                                    <div className=" flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/1.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Figma</h2>
                                    </div>
                                    <div className=" flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/1.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Figma</h2>
                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/2.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>zoom</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/3.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Zomato</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/4.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Facebook</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/5.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>CoinBase</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/2.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>zoom</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/3.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Zomato</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/4.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Facebook</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/5.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>CoinBase</h2>

                                    </div>
                                </Parallax>
                               
                                
                                <Parallax
                                translateX={['-50', '20']}
                                 className="absolute w-full flex mt-36">
                                    <div className=" flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/1.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Figma</h2>
                                    </div>
                                    <div className=" flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/1.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Figma</h2>
                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/2.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>zoom</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/3.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Zomato</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/4.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Facebook</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/5.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>CoinBase</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/2.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>zoom</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/3.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Zomato</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/4.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>Facebook</h2>

                                    </div>
                                    <div className="flex justify-center col-span-1 px-8">
                                        {/* <img className="max-h-12" src="../images/logos/5.svg" alt="logo" /> */}
                                        <h2 className='text-black lg:text-[2vw] text-[5vw] '>CoinBase</h2>

                                    </div>
                                </Parallax>
                            </div>
                        </section>



                    </div>
                </section>
            </div>
        </ParallaxProvider>
    )
}

export default Process
