import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Testimonials = () => {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const client = [
        {
            'title': 'Website Design',
            'desc': 'From the initial concept to the final product, siteScript exceeded our expectations every step of the way.',
            'img': '',
            'name': 'Srijan Mehrotra',
            'position': 'Founder - Model Verse'
        },
        {
            'title': 'Website Design',
            'desc': 'SiteScript. They have a very good experience in creating website, I have hired them for my website development and I get a good result.',
            'img': '',
            'name': 'Rajan Kumar',
            'position': 'Founder - Staffison'
        },
        {
            'title': 'Efficient customer support',
            'desc': 'Choosing siteScript for our website design and development was one of the best decisions we made. Their team was responsive, collaborative, and highly skilled.',
            'img': '',
            'name': 'Nikhil Bafna',
            'position': 'Founder - Tipriyo'
        },
        {
            'title': 'Efficient customer support',
            'desc': 'He was recommended to me by a colleague for site development and design, and I can assure you that working with him would be beneficial. He is really imaginative and attentive to your needs, and suddenly presto—the job is done. He continued to communicate even after the project was turned over to see if anything needed to be changed and whether everything was going well. I endorse him. Bravo to you, friend 👍',
            // 'img': '',
            'name': 'Ravi',
            'position': 'Prime Care Alliance'
        },
        {
            'title': 'Efficient customer support',
            'desc': 'As a startup, we needed a website that would impress investors and attract customers. siteScript not only met but exceeded our expectations.',
            // 'img': '',
            'name': 'Ravi',
            'position': 'Unity Health System'
        },
    ]

    return (
        <div>
            <section className='bg-cover' style={{
                // backgroundImage: 'url()'
            }}>
                <ParallaxProvider>
                    <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 backdrop-blur-sm overflow-hidden">
                        <div className="flex flex-col w-full h-screen">
                            <h2 className='text-center p-5 mb-5 lg:text-[5vw] text-4xl font-[]'>
                                Our Client's
                                <span className='circle-sketch-highlight'>
                                    Love
                                </span>
                            </h2>
                            <div className="xl:flex w-[100%] justify-center" aria-labelledby="carousel-label" role="region" tabIndex={0}>

                                <div
                                    translateY={['-100', '80']} className="block lg:mt-0 items-center">
                                    <Parallax
                                        translateY={['-80', '80']}
                                        opacity={['2', '0']}
                                        >
                                        <img className='object-cover w-[100%]' src='Website_Images/testimonials.png' />
                                    </Parallax>
                                </div>

                                <div className='lg:w-[50%] '
                                >
                                    <Slider {...settings} className=''>
                                        {client.map((testimonial) => (


                                            <Parallax
                                                translateY={['100', '-80']}
                                                opacity={['2', '0']}
                                                className="flex justify-center h-fit my-auto">
                                                <motion.div
                                                    initial={{ x: 200, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.9, delay: 0.5 }}

                                                    className=" mx-[1vw] font-light">
                                                    <div className="xl:h-[40vh] p-4 md:p-6">
                                                        <p className="lg:text-[1.2vw] text-[4vw] text-justify text-black">
                                                            " {testimonial.desc} "
                                                        </p>
                                                    </div>
                                                    <div className="p-4  rounded-b-xl md:px-7 ">
                                                        <div className="flex items-center">
                                                            {/* <div className="flex-shrink-0"> */}
                                                            {/* <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="testimonials Description" /> */}
                                                            {/* </div> */}
                                                            <div className="grow ms-3">
                                                                <p className="text-sm sm:text-base text-black ">
                                                                    {testimonial.name}                                                                            </p>
                                                                <p className="text-sm text-[#FF9800]">
                                                                    {testimonial.position}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </Parallax>




                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxProvider>
            </section>
        </div >
    );
};

const testimonials = [
    {
        img: '/images/appify/avatar1.png',
        alt: 'Michael Andreuzza',
        name: 'Michael Andreuzza',
        title: 'Creator of Windstatic.com',
        quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
    },
    {
        img: '/images/appify/avatar2.png',
        alt: 'Gege Piazza',
        name: 'Gege Piazza',
        title: 'Creator of Pizza Piazza',
        quote: "Implementing Semplice's blockchain technology has been a game-changer for our supply chain management.",
    },
    {
        img: '/images/appify/avatar3.png',
        alt: 'Jenson Button',
        name: 'Jenson Button',
        title: 'Founder of Benji and Tom',
        quote: 'We were initially hesitant about integrating blockchain technology into our existing systems.',
    },
    {
        img: '/images/appify/avatar2.png',
        alt: 'Gege Piazza',
        name: 'Gege Piazza',
        title: 'Creator of Pizza Piazza',
        quote: "Implementing Semplice's blockchain technology has been a game-changer for our supply chain management.",
    },
    {
        img: '/images/appify/avatar3.png',
        alt: 'Jenson Button',
        name: 'Jenson Button',
        title: 'Founder of Benji and Tom',
        quote: 'We were initially hesitant about integrating blockchain technology into our existing systems.',
    },
    {
        img: '/images/appify/avatar2.png',
        alt: 'Gege Piazza',
        name: 'Gege Piazza',
        title: 'Creator of Pizza Piazza',
        quote: "Implementing Semplice's blockchain technology has been a game-changer for our supply chain management.",
    },
    {
        img: '/images/appify/avatar3.png',
        alt: 'Jenson Button',
        name: 'Jenson Button',
        title: 'Founder of Benji and Tom',
        quote: 'We were initially hesitant about integrating blockchain technology into our existing systems.',
    },
    // Add more testimonials as needed
];

export default Testimonials;
