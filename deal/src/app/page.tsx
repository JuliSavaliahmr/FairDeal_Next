import Header from "@/layout/Header";
import Image from "next/image";

import { ArrowRight } from 'lucide-react';

import bannerv1 from '../assets/images/element.png'
import bannerv2 from '../assets/images/element (1).png'
import bannerimg from '../assets/images/hero graphic.png'

export default function Home() {
  return (
    <>
    <Header/>
    {/* hero section */}
    <div className="relative pt-[156px] bg-[#f4faff83] pb-[176px]">
      <Image src={bannerv1} alt="banner-vector1" className="absolute h-[685px] w-[347px] -top-[1%]"></Image>
      <Image src={bannerv2} alt="banner-vector2" className="absolute h-[100%] w-[347px] -top-[1%] right-0 -z-10"></Image>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
            <div className="w-[50%]">
                <h1 className="text-[44px] w-[90%]">Unlock 🔓 the Power of Offline Commerce‍ With Our 
                <span className="font-semibold block">All-In-One Retail Solution</span></h1>
                <div className="pt-6">
                  <p className="text-[16px] font-light">Seamlessly sell your products direct to Offline Retailers.</p>
                  <button className="btn-blue px-[24px] py-4 rounded-[30px] mt-4 flex items-center"> Let's Connect <ArrowRight className="w-6 h-6 ml-0.5"/></button>
                </div>
            </div>
            <div className="w-[40%] pt-6">
            <Image src={bannerimg} alt="banner-img" className=" h-[494px] w-[505px] -top-[1%]"></Image>

            </div>
        </div>
      </div>
    </div>
    </>
  )
}