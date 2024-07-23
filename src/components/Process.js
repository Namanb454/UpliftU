import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Process = () => {
    return (
        <ParallaxProvider>
            <div>
                <section>
                    <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl font-[quench] overflow-hidden">
                        <div>
                            <h1 className="bowlby-one-regular text-4xl text-black lg:text-6xl text-balance">
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
                            <div className="grid gap-2 mt-2 text-center md:grid-cols-3">

                                <Parallax
                                    // scale={['1', '0']}
                                    // translateY={['100', '0']}
                                // opacity={['1', '0']}
                                >
                                    <div className="p-2 overflow-hidden rounded-3xl">
                                        <img src="/images/vision.jpg" alt="#_" className="object-cover h-[20vh] mx-auto rounded-2xl" />
                                    </div>
                                    <div className="mt-4">
                                        <p className="font-medium text-gray-900">Your vision</p>
                                        {/* <p className="mt-2 text-sm text-gray-500">
                                        The license comes with no warranties. The licensor provides the
                                        work "as is," and users must use it at their own risk.
                                    </p> */}
                                    </div>
                                </Parallax>

                                <Parallax
                                    // scale={['1', '0']}
                                    // translateY={['100', '0']}
                                // opacity={['1', '0']}
                                >
                                    <div className="p-2 overflow-hidden rounded-3xl">
                                        <img src="/images/strategy.jpg" alt="#_" className="object-cover h-[20vh] mx-auto rounded-2xl" />
                                    </div>
                                    <div className="px-8 mt-4">
                                        <p className="font-medium text-gray-900">Our strategy
                                        </p>
                                        {/* <p className="mt-2 text-sm text-gray-500">
                                        You can adapt, remix, transform, and build upon the licensed work.
                                    </p> */}
                                    </div>
                                </Parallax>

                                <Parallax
                                    // scale={['1', '0']}
                                    // translateY={['100', '0']}
                                // opacity={['1', '0']}
                                >
                                    <div className="p-2 overflow-hidden rounded-3xl">
                                        <img src="/images/achieve.jpg" alt="#_" className="object-cover h-[20vh] mx-auto rounded-2xl" />
                                    </div>
                                    <div className="px-8 mt-4">
                                        <p className="font-medium text-gray-900">Build Legacy</p>
                                        {/* <p className="mt-2 text-sm text-gray-500">
                                        You are allowed to use the licensed work for both non-commercial
                                        and commercial purposes.
                                    </p> */}
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ParallaxProvider>
    )
}

export default Process
