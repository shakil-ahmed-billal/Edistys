import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <div className='max-w-[1200px] mx-auto '>
            <div className=" flex items-center justify-between py-7 z-20">
                <div className="">
                    <Image src={"/logo.svg"} alt='Brand Logo' height={28} width={170}></Image>
                </div>
                <ul className='flex gap-5 items-center text-lg text-white font-bold'>
                    <li><Link href={"/"}>Solutions</Link></li>
                    <li><Link href={"/"}>Services</Link></li>
                    <li><Link href={"/"}>About Us</Link></li>
                </ul>
                <div className="">
                    <Button className={"bg-transparent text-white text-lg"} variant="outline" size="lg">Contact Us</Button>
                </div>
            </div>
        </div>
    )
}

export default Header