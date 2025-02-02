import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <div className='max-w-[1200px] mx-auto '>
            <div className=" flex items-center md:w-full w-11/12 mx-auto justify-between py-7 z-20">
                <div className="">
                    <img src="/logo.svg" className='md:w-[170px] w-36' alt="" />
                </div>
                <ul className='hidden md:flex gap-5 items-center text-lg text-white font-bold'>
                    <li><Link href={"/"}>Solutions</Link></li>
                    <li><Link href={"/"}>Services</Link></li>
                    <li><Link href={"/"}>About Us</Link></li>
                </ul>
                <div className="">
                    <Button className={"bg-transparent text-white text-lg md:flex hidden"} variant="outline" size="lg">Contact Us</Button>
                    <p className='md:hidden flex z-50 font-bold text-white'><Menu /></p>
                </div>
            </div>
        </div>
    )
}

export default Header