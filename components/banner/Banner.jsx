import Image from 'next/image'
import Header from '../header/Header'
import { Button } from '../ui/button'

const Banner = () => {
    return (
        <div className='relative '>
            <Header></Header>
            <div className="flex z-50 justify-between max-w-[1200px] mx-auto ">
                <div className="bg-darkBlue absolute -left-[200px] w-11/12 h-[1200px] -z-10 -top-[500px] -rotate-45"></div>
                <div className="bg-darkBlue absolute -left-[800px] w-11/12 h-[1200px] -z-10  -rotate-45"></div>
                <div className="bg-[#007EFF] backdrop:blur-xl blur-3xl rotate-45 w-[400px] -z-10 h-[400px] absolute top-0 right-0"></div>
                <Image
                    className='absolute w-full -top-3/4 -z-10 left-0'
                    src={"/backgrounds/WaveLinesDesktop2.svg"} alt='bg-pic-2'
                    width={1800}
                    height={1200}
                ></Image>
                <Image
                    className='absolute w-full -z-10  top-0 left-0'
                    src={"/backgrounds/WaveLinesDesktop3.svg"} alt='bg-pic-1'
                    width={1800}
                    height={1200}
                ></Image>
                
                <div className="mt-32 mb-64">
                    <p className='text-7xl font-bold text-[#ffffff]'>Embrace the <br /> future of finance</p>
                    <p className='my-10 text-lg font-bold text-white'>Reimagine financial services with AnyTech’s open platform, distributed <br /> banking solution that powers transformation</p>
                    <Button size="lg" className="text-lg bg-orange font-bold py-6 px-10" variant="destructive">Reach out to us</Button>
                </div>
                <Image className='absolute -z-20  right-0' src={"/backgrounds/bg-background.avif"} alt='banner image' width={1041} height={907}></Image>
            </div>
        </div>
    )
}

export default Banner