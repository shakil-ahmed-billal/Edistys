import { Button } from "../ui/button"

const Footer = () => {
  return (
    <div className="relative mt-72 ">
      <div className="w-full mx-auto absolute place-content-center">
        <div className="max-w-[1200px] mx-auto -top-[400px] text-white">
          <p className="text-5xl font-bold">Legacy no longer</p>
          <p className="py-8">Talk to us to find out how we can transform your organisation for the future</p>
          <Button size="lg" className="text-lg bg-orange font-bold py-6 px-10" variant="destructive">Contact Us</Button>
        </div>
      </div>
      <div className="bg-darkBlue w-[2200px] -z-50 -left-[100px] h-[500px] absolute rotate-6"></div>
      <div className="absolute -bottom-[680px] right-0 left-0 ">
        <div className="bg-[#002045] ">
          <div className="max-w-[1200px] mx-auto py-20 flex justify-between ">
            <div className="">
              <img src="/logo.svg" alt="" />
            </div>
            <div className="flex gap-5 text-[#1ddbe3] text-lg font-bold">
              <p>Our Solutions</p>
              <p>AnyCaaS</p>
              <p>AnyBaaS</p>
            </div>
          </div>
        </div>
        <div className="bg-[#00142d]">
          <div className="max-w-[1200px] mx-auto py-12 text-white flex justify-between text-[#1c7deb]">
            <p>©2023 All rights reserved. Any Technology Pte Ltd.</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer