"use client"

import { motion } from "framer-motion"
import Image from "next/image"


const Future = () => {
    return (
        <div className="relative">
            <div className="w-[2200px] h-[900px] bg-white -rotate-6 -top-20 -left-16 absolute -z-10"></div>
            <div className="max-w-[1200px] mx-auto md:flex items-center justify-between pt-20">
                <div className="md:w-6/12 w-11/12 mx-auto">
                    <p className="text-lightBlue text-lg font-bold">POWERING THE FUTURE OF FINANCE</p>
                    <p className="md:text-6xl font-bold py-7">Uncovering new ways to delight customers</p>
                    <p className="font-bold mb-3">AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                    <p>Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>
                </div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: [-30, 30, -30] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="future">
                    <Image
                        src={"/future.avif"}
                        alt="future image"
                        width={426}
                        height={517}
                    ></Image>
                </motion.div>

            </div>
        </div>
    )
}

export default Future