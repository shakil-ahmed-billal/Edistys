"use client"

import { motion } from "framer-motion";
import Image from 'next/image';
import Header from '../header/Header';
import { Button } from '../ui/button';

const Banner = () => {
    return (
        <div className='relative '>
            <Header></Header>
            <div className="flex z-50 justify-between max-w-[1200px] mx-auto ">
                <div className="bg-darkBlue absolute md:-left-[200px] w-11/12 h-[1200px] -z-10 -top-[600px] md:-top-[500px] md:-rotate-45 rotate-45"  />
                <div className="bg-darkBlue absolute md:-left-[800px] w-11/12 h-[1200px] -z-10  md:-rotate-45 rotate-45 -top-[300px]"></div>
                <div className="bg-[#007EFF] blur-2xl rotate-45 w-[400px] -z-10 h-[400px] absolute -top-10 -right-10"></div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: [-30, 30, -30] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute w-full -z-10 top-0 left-0"
                >
                    <Image
                        src="/backgrounds/WaveLinesDesktop2.svg"
                        alt="bg-pic-2"
                        width={1800}
                        height={1200}
                        priority
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: [-30, 30, -30] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute w-full -z-10 top-0 left-0"
                >
                    <Image
                        src="/backgrounds/WaveLinesDesktop3.svg"
                        alt="bg-pic-1"
                        width={1800}
                        height={1200}
                        priority
                    />
                </motion.div>
                    
                <div className="md:mt-32 mt-10 mb-64 w-11/12 mx-auto">
                    <p className='md:text-7xl text-4xl font-bold text-[#ffffff]'>Embrace the <br /> future of finance</p>
                    <p className='my-10 text-lg font-bold text-white'>Reimagine financial services with AnyTech’s open platform, distributed <br /> banking solution that powers transformation</p>
                    <Button size="lg" className="text-lg bg-orange font-bold py-6 px-10" variant="destructive">Reach out to us</Button>
                </div>
                <Image className='absolute md:flex hidden -z-20  right-0' src={"/backgrounds/bg-background.avif"} alt='banner image' width={1041} height={907}></Image>
                <img className="md:hidden  absolute h-[500px] object-cover w-[1500px] top-[300px] -z-20  right-0" src="/backgrounds/bg-background.avif" alt="" />
            </div>
        </div >
    )
}

export default Banner