import React, { useRef, useState } from 'react';

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [atBeginning, setAtBeginning] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const handleScroll = () => {
        const slider = sliderRef.current;
        if (slider) {
            setAtBeginning(slider.scrollLeft === 0);
            setAtEnd(slider.scrollLeft + slider.clientWidth === slider.scrollWidth);
        }
    };

    const scrollTo = (strategy) => {
        const slider = sliderRef.current;
        if (slider) {
            const current = slider.scrollLeft;
            const offset = slider.firstElementChild.getBoundingClientRect().width;
            slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' });
        }
    };

    const next = () => scrollTo((current, offset) => current + offset);
    const prev = () => scrollTo((current, offset) => current - offset);

    return (
        <div>
            <section>
                <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full" aria-labelledby="carousel-label" role="region" tabIndex={0}>
                            <h2 className='text-rose-500 text-center p-5 lg:text-6xl text-4xl bowlby-one-regular'>
                                Our Client's Love
                            </h2>
                            <h2 className="sr-only" id="carousel-label">Carousel</h2>
                            <span className="sr-only" id="carousel-content-label">Carousel</span>
                            <div className="inline-flex items-center space-x-2 lg:px-2">
                                <button
                                    className={`flex items-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 size-8 focus:bg-blue-400 ${atBeginning ? 'opacity-50' : ''}`}
                                    aria-disabled={atBeginning}
                                    onClick={prev}
                                    tabIndex={0}
                                >
                                    <span aria-hidden="true" className="mx-auto">←</span>
                                    <span className="sr-only">Skip to previous slide page</span>
                                </button>
                                <button
                                    className={`flex items-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 size-8 focus:bg-blue-400 ${atEnd ? 'opacity-50' : ''}`}
                                    aria-disabled={atEnd}
                                    onClick={next}
                                    tabIndex={0}
                                >
                                    <span aria-hidden="true" className="mx-auto">→</span>
                                    <span className="sr-only">Skip to next slide page</span>
                                </button>
                            </div>
                            <ul
                                className="flex w-full gap-3 mt-4 overflow-x-scroll text-center scrollbar-hide snap-mandatory snap-x rounded-2xl"
                                role="listbox"
                                aria-labelledby="carousel-content-label"
                                tabIndex={0}
                                ref={sliderRef}
                                onScroll={handleScroll}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <li key={index} className="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option">
                                        <figure className="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                                            <figcaption className="relative flex flex-col justify-between">
                                                <img alt={testimonial.alt} src={testimonial.img} className="object-cover mx-auto rounded-full size-14 grayscale" />
                                                <div className="mt-4">
                                                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                                                    <div className="mt-1 text-sm text-gray-500">{testimonial.title}</div>
                                                </div>
                                            </figcaption>
                                            <blockquote className="mt-4">
                                                <p className="text-base font-medium text-gray-500">{testimonial.quote}</p>
                                            </blockquote>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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
