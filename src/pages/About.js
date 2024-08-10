import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const About = () => {

  return (
    <div className='relative overflow-hidden text-balance poppins-semibold tracking-wide'>

      <div className='p-5'>
        <Navbar />
      </div>

      <section className=" flex items-center justify-center text-[#f3f7f8] bg-neutral-900">
        <div className=" items-center w-full px-5 pt-24 mx-auto max-w-7xl lg:px-0 lg:py- md:px-12">
          <div>
            <div className=" text-center">
              <h1 className="text-center p-5 lg:text-[3vw] text-4xl">
                Who are the CEO's<span className="">&nbsp;behind the Business?</span>
              </h1>

              <div className='py-'>
                <h2 className="text-center p-5 lg:text-[2.5vw] text-4xl font-bold bg-gradient-to-l from-[#489b9c] to-[#bae2e4] bg-clip-text text-transparent font-[genica]">
                  The Story of Naineesh & Anmol
                </h2>
                <p className="xl:text-[1.5vw] lg:text-center text-justify mx-auto mt-4 font-light">
                  With over 5+ years of total experience in Sales, Marketing and Social Media, Naineesh & Anmol have a big mission: Revolutionalized hospitality industry by making them orginals creators over social media sand not over rely on influencers!
                </p>
              </div>
            </div>
          </div>
          <div className=" items-center w-full xl:pt-12 mx-auto xl:mt-12 ">
            <svg fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" className="absolute -mt-24 blur-3xl">
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#ff237d" />
                  <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8" />
                  <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4" />
                  <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                  {/* <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666" /> */}
                </filter>
              </defs></svg><img src='images/Naineesh-Photoroom.png' alt="CEO's" className=" object-cover xl:w-[50vw] backdrop-brightness-90 mx-auto" />

          </div>
        </div>
      </section>

      <section className='w-full h-full'>
        <div className=" items-center w-full px-5 py-12 mx-auto lg:px-[10vw] lg:py-32 md:px-12">
          <div>
            <h2 className='xl:text-[3vw] text-[8vw] font-[genica] bg-gradient-to-l from-[#0d2c5e] to-[#489b9c] bg-clip-text text-transparent'>
              How did it all start?
            </h2>
          </div>
        </div>
        <div className=' items-center w-full text-white bg-neutral-900'>
          <div className='w-full px-5 mx-auto py-12 lg:px-[10vw] lg:py-32 md:px-'>
            <p className='xl:text-[1.3vw] font-light text-justify'>A little over 2 years ago, Naineesh was handling one of the greatest personalities' social media accounts and experiencing significant growth. Living a daily normal life, everything changed when he received a message in a group called Fight Club, that he and Anmol, had created during their college days.
              <br />
              <br />

              During their conversation, Anmol learned about Naineesh's impressive Instagram growth. In turn, Anmol shared his own success story managing another Instagram handle. As they discussed their achievements, the conversation naturally shifted to how they could apply this growth strategy to financial aspects. Along with another friend, they devised a plan to make small SIP investments every month. However, their creativity and ambition quickly outgrew this simple plan.
              <br />
              <br />
              The turning point came when Naineesh and Anmol met at Dadar Chowpatty in Mumbai to enjoy wadapav. There, in a moment of inspiration, they founded UpliftU, initially a regular social media marketing company. They began by helping small businesses, one-person companies, and influencers (including unofficially working for a unicorn). Feedback from their clients revealed their exceptional ability to drive engagement, not just through secret engagement pillars but also by uniquely blending ideas with trends.
              <br />
              <br />
              This unique skill set led them to upgrade to an engagement-driven social media company. A pivotal discussion with a client from the financial sector highlighted their talent for making content relevant and trendy, even in unusual industries. With their prestigious background from IHM Mumbai, renowned for its excellence in the hospitality sector, they noticed a common issue: where hospitality brands were using social media incorrectly and over-relying on influencers.
              <br />
              <br />
              Determined to revolutionize the hospitality sector, Naineesh and Anmol decided to empower brands to create original, viral, and engaging content. Their mission was to transform hospitality brands into influencers themselves, freeing them from dependency on external influencers. Since 2023, UpliftU has not only helped brands go viral but also built impactful brand personas on social media, making them engaging and influential.
              <br />
              <br />
              This innovative approach quickly turned UpliftU into a six-figure business in the creative industry. Our philosophy, "Your Vision, Our Strategy, Build Legacy," encapsulates our journey and mission to revolutionize social media engagement in the hospitality sector.</p>
          </div>
        </div>
      </section>


      {/* Who is Naineesh */}
      <section>
        <div className=" items-center w-full py-12 mx-auto  lg:py-24 px-[10vw]  xl:text-justify">
          <div className="xl:flex items-center grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="md:order-first space-y-[5vh] xl:text-[1vw]">
              <h1 className="xl:text-[3vw] text-[8vw] font-semibold tracking-tighter bg-gradient-to-l from-[#0d2c5e] to-[#489b9c] bg-clip-text text-transparent text-balance font-[genica]">
                Who is Naineesh?
              </h1>

              <div className='flex xl:text-justify space-x-[4vw] text-[#1f2740] font-light xl:text-[1.1vw]'>

                <div className='space-y-[2vh]'>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Hospitality and Social Media Expert, Alumnus of IHM Mumbai
                  </h2>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Channel partner for uFaber, a leading Edutech company in India
                  </h2>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Acheived over <span className='font-sans font-semibold'>30,000</span> followers and<span className='font-sans font-semibold'> 25</span> million+ interactions on social profiles in less than two months
                  </h2>
                </div>

                <div className='space-y-[2vh]'>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Coached <span className='font-sans font-semibold'>1,800+</span> entrepreneurs to start from scratch and achieve seven-figure incomes
                  </h2>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Managed social media for a prominent internet personality, achieving viral success in<span className='font-sans font-semibold'> 2021-2022.</span>
                  </h2>
                </div>

              </div>

              <div className='space-y-[3vh]'>
                <h2 className='xl:text-[1.3vw] text-[5vw]'>
                  Fun Facts about CEO Naineesh
                </h2>

                <div className='space-y-[2vh] text-[#1f2740] font-light xl:text-[1.1vw]'>
                  <h3>
                    <span className='font-sans font-semibold'>1.</span> Chess Master: Naineesh is extremely hard to defeat in chess. His strategic thinking on the chessboard often translates to his innovative strategies in business.
                  </h3>
                  <h3>
                    <span className='font-sans font-semibold'>2.</span> Met Andrew Tate: During an unexpected encounter, Naineesh met the well-known internet personality Andrew Tate. Though brief, the experience left a memorable impression with having a steak together.
                  </h3>
                  <h3>
                    <span className='font-sans font-semibold'>3.</span> Mind Palace Technique: Naineesh has mastered the Mind Palace Technique, a method for memorizing vast amounts of information, which he often uses to his advantage in both professional and personal settings.
                  </h3>
                </div>

              </div>

            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                <img alt="#_" className=" w-full rounded-2xl drop-shadow-2xl" src="/images/Naineesh.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Who is Anmol */}
      <section>
        <div className=" items-center w-full py-12 mx-auto  lg:py-24 px-[10vw]  xl:text-justify">
          <div className="xl:flex items-center grid-cols-1 gap-6 lg:grid-cols-2 xl:flex-row-reverse">
            <div className="md:order-first space-y-[5vh] xl:text-[1vw]">
              <h1 className="xl:text-[3vw] text-[6vw] font-semibold tracking-tighter bg-gradient-to-l from-[#0d2c5e] to-[#489b9c] bg-clip-text text-transparent text-balance font-[genica]">
                Who is Anmol More?
              </h1>

              <div className='flex xl:text-justify space-x-[4vw] text-[#1f2740] font-light xl:text-[1.1vw]'>

                <div className='space-y-[2vh]'>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Marketing and Communication Expert with a Strong Network.
                  </h2>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Generated significant networks and deals for clients and brands.
                  </h2>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Coached over <span className='font-sans font-semibold'>200</span> clients to success.
                  </h2>
                </div>

                <div className='space-y-[2vh]'>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Helped clients achieve<span className='font-sans font-semibold'> 70,000+</span>followers and a <span className='font-sans font-semibold'>2+</span> million reach on Instagram in a year.
                  </h2>
                  <h2>
                    <div className='text-[#0d2c5e]'>❖</div>
                    Fluent in six languages, enhancing his ability to connect and communicate effectively.
                  </h2>
                </div>

              </div>

              <div className='space-y-[3vh]'>
                <h2 className='xl:text-[1.3vw] text-[5vw]'>
                  Fun Facts about CEO Anmol
                </h2>

                <div className='space-y-[2vh] text-[#1f2740] font-light xl:text-[1.1vw]'>
                  <h3>
                    <span className='font-sans font-bold'>1.</span> <span className='font-bold'>Snap Learner:</span> Learning new skills comes effortlessly to Anmol, as if he could snap his fingers and master a new ability. This knack for rapid learning keeps him ahead in the fast-paced world of marketing.

                  </h3>
                  <h3>
                    <span className='font-sans font-bold'>2.</span> <span className='font-bold'>Power House:</span> Known for his boundless energy and drive, Anmol is the powerhouse of UpliftU, always pushing the team towards excellence.

                  </h3>
                  <h3>
                    <span className='font-sans font-bold'>3.</span> <span className='font-bold'>Jugadu (Makeshifter):</span> Anmol has a unique talent for finding creative solutions to any problem. His makeshift innovations often surprise and impress clients and colleagues alike.
                  </h3>
                </div>
              </div>
            </div>

            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                <img alt="#_" className=" w-full rounded-2xl drop-shadow-2xl" src="/images/Anmol.png" />
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
              <h1 className="xl:text-[3vw] text-[6vw] font-semibold tracking-tighter bg-gradient-to-l from-[#0d2c5e] to-[#489b9c] bg-clip-text text-transparent text-balance font-[genica]">
                Our Philosophy
              </h1>
              <p className="mt-4 xl:text-[1vw] font-medium text-[#1f2740] font-light xl:text-[1.1vw] text-justify">
                "Social media is powerful, especially when it transforms hospitality brands into influential voices."
                <br />
                <br />
                We are continuously developing new strategies and tools to help hospitality brands engage more deeply with their audiences and become influencers in their own right.
                <br />
                <br />
                We believe working with us is not just effective but also enjoyable, as we incorporate humor and creativity into our approach which are the pillars of social media.
                <br />
                <br />
                With over <span className='font-sans font-bold'>50</span> million interactions in our exclusive client success results, we provide top-notch support and guidance to help your brand achieve unparalleled social media success.
                <br />
                <br />
                It’s not always easy, but achieving your brand's full potential is more attainable when you have the right strategies and unwavering support.
              </p>

            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                <img alt="#_" className=" w-full rounded-2xl drop-shadow-2xl" src="/images/appify/phone.png" />
              </div>
            </div>
          </div>
        </div>
      </section>





      <Contact />
    </div>
  )
}

export default About
