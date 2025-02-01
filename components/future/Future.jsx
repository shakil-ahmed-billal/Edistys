import Image from "next/image"


const Future = () => {
    return (
        <div className="relative">
            <div className="w-[2200px] h-[900px] bg-[#ffffff] -rotate-6 -top-20 -left-10 absolute -z-10"></div>
            <div className="max-w-[1200px] mx-auto flex justify-between pt-48">
                <div className="w-6/12">
                <p className="text-lightBlue text-lg font-bold">POWERING THE FUTURE OF FINANCE</p>
                <p className="text-6xl font-semibold py-7">Uncovering new ways to delight customers</p>
                <p className="text-bold">AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                <p>Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>
                </div>
                <div className="future">
                    <Image
                    src={"/future.avif"} 
                    width={426}
                    height={517}
                    ></Image>
                </div>

            </div>
        </div>
    )
}

export default Future