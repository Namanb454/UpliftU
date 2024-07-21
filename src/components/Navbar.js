import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Navbar = () => {

    const pathName = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const navbar = [
        { 'id': '1', 'nav': 'About Us', 'link': '/about' },
        { 'id': '2', 'nav': 'Services', 'link': '/services' },
        { 'id': '3', 'nav': 'Our Work', 'link': '/portfolio' },
        { 'id': '4', 'nav': "Let's Talk", 'link': '/contact' },
    ];



    return (
        <ParallaxProvider>
            <Parallax>
                <div className='font-[quench] overflow-hidden '>
                    <nav className="scroll-smooth flex lg:py-[2vh] py-2 md:space-x-10 px-[5vw] font-semibold shadow-black shadow-sm">
                        <div className="flex-1 w-fit md:h-auto h-[5vh]">
                            <div className="text-indigo-500">
                                <a href='/' className='flex w-fit' aria-label="Home">
                                    {/* <img className="lg:w-[5vw] w-[15vw] items-center" src="sitescriptwhitelogo.png" alt="Logo" /> */}
                                    <h2 className='lg:text-[2vw] md:text-[2vw] text-[5vw] '>Uplift-U</h2>
                                </a>

                            </div>
                        </div>
                        {/* <div className=" lg:flex md:space-x-10 text-base items-center">
                            {navbar.map((data, index) => {
                                return (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0, x: 100, y: -100 }}
                                        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.2 }}


                                        className={`lg:text-[1.3vw] md:text-[0.1vw] items-end hover:text-indigo-500 transition-all duration-150 ease-in-out rounded-full border-indigo-500 hover:tracking-widest scroll-smooth hover:scroll-auto p-3 text-white
                                ${index === 3 && 'border-2 px-5 text-indigo-500'}
                                `}>
                                        <a href={data.link}>
                                            {data.nav}
                                        </a>
                                    </motion.div>
                                )
                            })}
                        </div> */}

                        {/* Mobile Responsive */}
                        <div className="items-center justify-end w-fit">
                            <button onClick={() => setIsOpen(!isOpen)} className={`w-fit p-2 rounded-md focus:outline-none`}>
                                {isOpen ?
                                    <motion.svg
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        whileTap={{ scale: 0 }}
                                        transform={{ duration: 0.5 }}
                                        className="h-0 w-0 block text- "
                                        viewBox="0 0 0 0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </motion.svg>
                                    :
                                    <motion.svg
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        whileTap={{ scale: 0 }}
                                        transform={{ duration: 0.5 }}
                                        className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </motion.svg>}
                            </button>



                            {/* <motion.div
                                initial={{ x: 300 }}
                                whileInView={{ x: 100 }}
                                transition={{ duration: 0.3 }}
                                className={isOpen ? " bg-black rounded-xl" : "hidden"}>
                                <div
                                    className={`${isOpen ? ' block ' : 'hidden'
                                        }  transition-all w-full px-2`}
                                    id="mobile-Homeu"
                                    ref={menuRef}
                                >
                                    <motion.div
                                        variants={{
                                            open: {
                                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0,
                                                    duration: 0.7,
                                                    delayChildren: 0.3,
                                                    staggerChildren: 0.05
                                                }
                                            },
                                        }}
                                        style={{ pointerEvents: isOpen ? "auto" : "auto" }}
                                        className="py-[5vh] pb-3 space-y-[10vh] h-screen sm:px-3 transition-all ease-in-out duration-1000 z-20" ref={menuRef}>

                                        {navbar.map((data, index) => {
                                            return (
                                                <motion.a key={data.id}
                                                    href={data.link}
                                                    onClick={() => setIsOpen(false)}
                                                    ref={menuRef}
                                                    initial={{ x: 100, opacity: 0, scale: 0 }}
                                                    whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.2, delay: 0.1 * index, easi: [0.33, 1, 0.68, 1] }}
                                                    className={` text-white hover:text-indigo-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit font-[]
                                            ${index === 3 && 'border-2 px-5 border-indigo-500 text-indigo-500'}
                                            `}
                                                >
                                                    {data.nav}
                                                </motion.a>
                                            )
                                        })}
                                    </motion.div>
                                </div>
                            </motion.div> */}
                        </div>

                    </nav>
                    <motion.div
                        initial={{ y: -500 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.2 }}
                        className='absolute z-10 top-0 w-full bg-indigo-500/80 backdrop-blur-sm' ref={menuRef}>
                        {isOpen &&
                            <div className='scroll-smooth lg:py-[2vh] py-2 border border-neutral-800 md:space-x-10 px-[5vw] font-semibold shadow-black shadow-sm'>
                                <motion.svg
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileTap={{ scale: 0 }}
                                    transform={{ duration: 0.5 }}
                                    className="h-6 w-6 block text- ml-auto"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </motion.svg>
                                <motion.div
                                    variants={{
                                        open: {
                                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.7,
                                                delayChildren: 0.3,
                                                staggerChildren: 0.05
                                            }
                                        },
                                    }}
                                    style={{ pointerEvents: isOpen ? "auto" : "auto" }}
                                    className="py-[5vh] pb-3 h-screen sm:px-3 transition-all ease-in-out duration-1000 z-20 lg:space-y-2 space-y-10" ref={menuRef}>

                                    {navbar.map((data, index) => {
                                        return (
                                            <motion.a key={data.id}
                                                href={data.link}
                                                onClick={() => setIsOpen(false)}
                                                ref={menuRef}
                                                initial={{ x: 100, opacity: 0, scale: 0 }}
                                                whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.2, delay: 0.1 * index, easi: [0.33, 1, 0.68, 1] }}
                                                className={`text-[5vw] text-white hover:text-amber-400 text-center mx-auto hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit bowlby-one-regular
            ${index === 3 && 'border-2 px-5 border-white text-white'}
            `}
                                            >
                                                {data.nav}
                                            </motion.a>
                                        )
                                    })}
                                </motion.div>
                            </div>
                        }
                    </motion.div>
                    {/* <div ref={menuRef}>
                        <motion.div
                            variants={{
                                open: {
                                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.05
                                    }
                                },
                            }}
                            style={{ pointerEvents: isOpen ? "auto" : "auto" }}
                            className="py-[5vh] pb-3 space-y-[10vh] h-screen sm:px-3 transition-all ease-in-out duration-1000 z-20" ref={menuRef}>

                            {navbar.map((data, index) => {
                                return (
                                    <motion.a key={data.id}
                                        href={data.link}
                                        onClick={() => setIsOpen(false)}
                                        ref={menuRef}
                                        initial={{ x: 100, opacity: 0, scale: 0 }}
                                        whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: 0.1 * index, easi: [0.33, 1, 0.68, 1] }}
                                        className={` text-black hover:text-indigo-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit font-[]
                                            ${index === 3 && 'border-2 px-5 border-indigo-500 text-indigo-500'}
                                            `}
                                    >
                                        {data.nav}
                                    </motion.a>
                                )
                            })}
                        </motion.div>

                    </div> */}

                    <style>{`
      
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 20;
        display: flex;
        flex-direction: column;
        // justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
            </Parallax>
        </ParallaxProvider>
    )
}

export default Navbar
