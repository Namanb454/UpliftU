import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import { MaskText } from '../components/MaskText'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const About = () => {

  return (
    <div className='relative overflow-hidden text-balance poppins-semibold tracking-wide'>
      <ParallaxProvider>
        <div className='p-5'>
          <Navbar />
        </div>

        <section className="relative flex items-center justify-center text-[#] bg-neutral-">
          <div className="relative items-center w-full px-5 pt-24 mx-auto max-w-7xl lg:px-16 lg:py- md:px-12">
            <div>
              <div className="relative text-center">
                <MaskText text=
                  <h1 className="text-center p-5 lg:text-[3vw] text-4xl">
                    Who are the CEO's<span className="">&nbsp;behind the Business?</span>
                  </h1>
                />

                <div className='py-'>
                  <MaskText text=
                    <h2 className="text-center p-5 lg:text-[2.5vw] text-4xl font-bold poppins-semibold">
                      <span className='bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                        The Story of Anmol & Naineesh
                      </span>
                    </h2>
                  />
                  <MaskText text=
                    <p className="xl:text-[1.5vw] lg:text-center text-balance mx-auto mt-4 font-light">
                      With over 5+ years of total experience in Sales, Marketing and Social Media, Naineesh & Anmol have a big mission: Revolutionalized hospitality industry by making them orginals creators over social media sand not over rely on influencers!
                    </p>
                  />
                </div>
              </div>
            </div>
            <MaskText text=
              <div className="mt-0 py-10 gap-3 flex justify-center">
                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-[1.3vw] font-light border-r-4 border-b-4 border-[#0d2c5e] bg-[#489b9c] text-white hover:bg-[#0d2c5e] disabled:opacity-50 disabled:pointer-events-none" href="/about">
                  Know More
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>
            />
            <div className=" items-center w-full xl:pt-12 mx-auto xl:mt-12 ">

              <div
                translateY={['-100', '80']} className="block overflow-hidden lg:mt-0 items-center">
                <Parallax
                  translateY={['-80', '80']}>
                  <img className='object-cover xl:w-[50vw] mx-auto ' src='/images/Naineesh-Anmol.png' />
                </Parallax>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-full'>
          <div className=" items-center w-full px-5 py-12 mx-auto lg:px-[10vw] lg:py-[5vh] md:px-12 ">
            <div>
              <h2 className='archivo-black-regular xl:text-[3vw] text-[8vw]'>
                <span className='bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                  How did it all start?
                </span>
              </h2>
            </div>
          </div>
          <div className=' items-center w-full text-white bg-neutral-900'>
            <div className='w-full px-5 mx-auto py-12 lg:px-[10vw] lg:py-32 md:px-'>
              <p className='xl:text-[1.3vw] font-light text-balance'>
                <MaskText text = "
                A little over 2 years ago, Naineesh was handling one of the greatest personalities' social media accounts and experiencing significant growth. Living a daily normal life, everything changed when he received a message in a group called Fight Club, that he and Anmol, had created during their college days.
                "/>
                <br />
                <br />

                <MaskText text = "
                During their conversation, Anmol learned about Naineesh's impressive Instagram growth. In turn, Anmol shared his own success story managing another Instagram handle. As they discussed their achievements, the conversation naturally shifted to how they could apply this growth strategy to financial aspects. Along with another friend, they devised a plan to make small SIP investments every month. However, their creativity and ambition quickly outgrew this simple plan.
                "/>
                <br />
                <br />
                <MaskText text = "
                The turning point came when Naineesh and Anmol met at Dadar Chowpatty in Mumbai to enjoy wadapav. There, in a moment of inspiration, they founded UpliftU, initially a regular social media marketing company. They began by helping small businesses, one-person companies, and influencers (including unofficially working for a unicorn). Feedback from their clients revealed their exceptional ability to drive engagement, not just through secret engagement pillars but also by uniquely blending ideas with trends.
                "/>
                <br />
                <br />
                <MaskText text = "
                This unique skill set led them to upgrade to an engagement-driven social media company. A pivotal discussion with a client from the financial sector highlighted their talent for making content relevant and trendy, even in unusual industries. With their prestigious background from IHM Mumbai, renowned for its excellence in the hospitality sector, they noticed a common issue: where hospitality brands were using social media incorrectly and over-relying on influencers.
                "/>
                <br />
                <br />
                <MaskText text = "
                Determined to revolutionize the hospitality sector, Naineesh and Anmol decided to empower brands to create original, viral, and engaging content. Their mission was to transform hospitality brands into influencers themselves, freeing them from dependency on external influencers. Since 2023, UpliftU has not only helped brands go viral but also built impactful brand personas on social media, making them engaging and influential.
                "/>
                <br />
                <br />
                <MaskText text = '"This innovative approach quickly turned UpliftU into a six-figure business in the creative industry. Our philosophy, "Your Vision, Our Strategy, Build Legacy," encapsulates our journey and mission to revolutionize social media engagement in the hospitality sector.
                "'/>
                </p>
            </div>
          </div>
        </section>


        {/* Who is Naineesh */}
        <section>
          <div className=" items-center w-full py-12 mx-auto lg:py-24 px-[10vw] xl:text-balance">
            <div className="xl:flex items-center grid-cols-1 gap-6 lg:grid-cols-2">

              <div className="md:order-first space-y-[5vh] xl:text-[1vw]">
              <MaskText text =
                <h1 className="xl:text-[3vw] text-[8vw] font-semibold text-balance archivo-black-regular xl:w-full w-fit mx-auto">
                  Who is&nbsp;
                  <span className='bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                    Naineesh?
                  </span>
                </h1>
                />

                <div className='items-center xl:flex xl:text-balance space-x-[4vw] text-[#1f2740] font-light xl:text-[1.1vw]'>
                  <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                    <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                      <img alt="#_" className=" w-full rounded-2xl drop-shadow-2xl" src="/images/Naineesh.jpg" />
                    </div>
                  </div>
                  <div className='xl:flex xl:space-x-[2vw]'>
                    <div className='space-y-[2vh]'>
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Hospitality and Social Media Expert, Alumnus of IHM Mumbai
                      </h2>
                      />
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Channel partner for uFaber, a leading Edutech company in India
                      </h2>
                      />
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Acheived over <span className='poppins-semibold font-semibold'>30,000</span> followers and<span className='poppins-semibold font-semibold'> 25</span> million+ interactions on social profiles in less than two months
                      </h2>
                        />
                    </div>

                    <div className='space-y-[2vh]'>
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Coached <span className='poppins-semibold font-semibold'>1,800+</span> entrepreneurs to start from scratch and achieve seven-figure incomes
                      </h2>
                        />
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Managed social media for a prominent internet personality, achieving viral success in<span className='poppins-semibold font-semibold'> 2021-2022.</span>
                      </h2>
                        />
                    </div>
                  </div>

                </div>

                <div className='space-y-[3vh]'>
                  <MaskText text =
                  <h2 className='xl:text-[1.3vw] text-[5vw]'>
                    Fun facts about Naineesh
                  </h2>

/>
                  <div className='space-y-[2vh] text-[#1f2740] font-light xl:text-[1.1vw] text-wrap'>
                    <div className='w-full'>
                      <p>

                        <span className='font-semibold'>1. Chess Master:&nbsp;</span>
                        Naineesh is extremely hard to defeat in chess. His strategic thinking on the chessboard often translates to his innovative strategies in business.
                      </p>
                    </div>
                    <div className='w-full'>
                      <span className='font-semibold'>2. Met Andrew Tate:&nbsp;</span>
                      During an unexpected encounter, Naineesh met the well-known internet personality Andrew Tate. Though brief, the experience left a memorable impression with having a steak together.
                    </div>
                    <div className='w-full'>
                      <span className='font-semibold'>3. Mind Palace Technique:&nbsp;</span>
                      Naineesh has mastered the Mind Palace Technique, a method for memorizing vast amounts of information, which he often uses to his advantage in both professional and personal settings.
                    </div>
                  </div>

                </div>

              </div>

            </div
            >
          </div>
        </section>


        {/* Who is Anmol */}
        <section>
          <div className=" items-center w-full py-12 mx-auto  lg:py-24 px-[10vw]  xl:text-balance">
            <div className="xl:flex items-center grid-cols-1 gap-6 lg:grid-cols-2 xl:flex-row-reverse">
              <div className="md:order-first space-y-[5vh] xl:text-[1vw]">
                <h1 className="xl:text-[3vw] text-[8vw] font-semibold text-balance archivo-black-regular xl:w-full w-fit mx-auto">
                  Who is&nbsp;
                  <span className='bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                    Anmol More?
                  </span>
                </h1>

                <div className='items-center xl:flex xl:text-balance space-x-[4vw] text-[#1f2740] font-light xl:text-[1.1vw]'>
                  <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                    <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                      <img alt="#_" className=" w-full rounded-2xl drop-shadow-2xl" src="/images/Anmol.png" />
                    </div>
                  </div>
                  <div className='xl:flex xl:space-x-[2vw]'>


                    <div className='space-y-[2vh]'>
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Marketing and Communication Expert with a Strong Network.
                      </h2>
                      />
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Generated significant networks and deals for clients and brands.
                      </h2>
                      />
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Coached over <span className='poppins-semibold font-semibold'>200</span> clients to success.
                      </h2>
                      />
                    </div>

                    <div className='space-y-[2vh]'>
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Helped clients achieve<span className='poppins-semibold font-semibold'> 70,000+</span>followers and a <span className='poppins-semibold font-semibold'>2+</span> million reach on Instagram in a year.
                      </h2>
                      />
                      <MaskText text =
                      <h2 className='xl:h-[20vh]'>
                        <div className='text-[#0d2c5e]'>❖</div>
                        Fluent in six languages, enhancing his ability to connect and communicate effectively.
                      </h2>
                      />
                    </div>
                  </div>
                </div>

                <div className='space-y-[3vh]'>
                  <h2 className='xl:text-[1.3vw] text-[5vw]'>
                    Fun facts about Anmol
                  </h2>

                  <div className='space-y-[2vh] text-[#1f2740] font-light xl:text-[1.1vw] text-wrap'>
                    <p>
                      <span className='poppins-semibold font-bold'>1.</span>
                      <span className='font-bold'>Snap Learner:</span> Learning new skills comes effortlessly to Anmol, as if he could snap his fingers and master a new ability. This knack for rapid learning keeps him ahead in the fast-paced world of marketing.

                    </p>
                    <p>
                      <span className='poppins-semibold font-bold'>2.</span>
                      <span className='font-bold'>Power House:</span> Known for his boundless energy and drive, Anmol is the powerhouse of UpliftU, always pushing the team towards excellence.

                    </p>
                    <p>
                      <span className='poppins-semibold font-bold'>3.</span>
                      <span className='font-bold'>Jugadu (Makeshifter):</span> Anmol has a unique talent for finding creative solutions to any problem. His makeshift innovations often surprise and impress clients and colleagues alike.
                    </p>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>



        {/* Philosophy */}
        <section>
          <div className=" items-center w-full py-12 mx-auto  lg:py-32 px-[10vw]">
            <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="md:order-first">
                <h1 className="xl:text-[3vw] text-[8vw] font-semibold text-balance archivo-black-regular xl:w-full w-fit mx-auto">
                  Who is&nbsp;
                  <span className='bg-gradient-to-t from-[#489b9c] from-[50%] to-[20%]'>
                    Our Philosophy
                  </span>
                </h1>
                <p className="mt-4 text-[#1f2740] font-light xl:text-[1.1vw] text-balance">
                  "Social media is powerful, especially when it transforms hospitality brands into influential voices."
                  <br />
                  <br />
                  We are continuously developing new strategies and tools to help hospitality brands engage more deeply with their audiences and become influencers in their own right.
                  <br />
                  <br />
                  We believe working with us is not just effective but also enjoyable, as we incorporate humor and creativity into our approach which are the pillars of social media.
                  <br />
                  <br />
                  With over <span className='poppins-semibold font-bold'>50</span> million interactions in our exclusive client success results, we provide top-notch support and guidance to help your brand achieve unparalleled social media success.
                  <br />
                  <br />
                  It’s not always easy, but achieving your brand's full potential is more attainable when you have the right strategies and unwavering support.
                </p>

              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                  <img alt="#_" className=" w-full rounded-2xl drop-shadow-2xl" src="Website_Images/Ou philosophy.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>





        <Contact />
      </ParallaxProvider>
    </div>
  )
}

export default About
