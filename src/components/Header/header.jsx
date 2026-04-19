import Logo from "../icons/Logo.png"
import bgImg from "../imgs/bgImg.png"
import hero from "../imgs/hero.png"
import bottomLogos from "../icons/bottomLogos.png"
import { HiArrowLongRight } from "react-icons/hi2";


export default function Header() {
    return(
        <div className="bg-[#232536] h-[978px] relative">
            <div className="container">
                <nav className="flex items-center justify-between h-20">
                    <img src={Logo} alt="" />
                    <div className=" flex justify-between items-center text-white w-[680px]">
                        <ul className="w-[529px] flex items-center justify-between gap-8 text-[16px] font-medium leading-[24px] hover:cursor-pointer">
                            <li className="opacity-[60%] hover:opacity-100">Home</li>
                            <li className="opacity-[60%] hover:opacity-100">Service</li>
                            <li className="opacity-[60%] hover:opacity-100">Company</li>
                            <li className="opacity-[60%] hover:opacity-100">Career</li>
                            <li className="opacity-[60%] hover:opacity-100">Blog</li>
                            <li className="opacity-[60%] hover:opacity-100">Contact us</li>
                        </ul>
                        <div className="flex items-center text-[#FFD3AF] ml-8">
                            <a href="/">Clone project</a>
                            <a href=""><HiArrowLongRight /></a>
                        </div>
                    </div>
                </nav>
                <main className="flex mt-[96px]">
                    <div className="w-[624px] h-[420px] flex flex-col gap-6 mt-[56px]">
                        <h1 className="text-[56px] font-semibold leading-[68px] text-white mt-12">Transform Your Idea Into Reality with Finsweet</h1>
                        <p className="text-[16px] font-normal text-white opacity-[60%] leading-[24px] w-[474px]">The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                        <button className="w-[219px] h-16 bg-[#444CFC] text-white opacity-[87%] flex items-center justify-center gap-4">Request Quote <HiArrowLongRight /></button>
                    </div>
                    <div className="">
                       <img className="absolute top-[176px] left-[1170px]" src={bgImg} alt="" /> 
                       <img className="ml-[109px] absolute" src={hero} alt="" /> 
                    </div>
                </main>
                    <img className="mt-[210px]" src={bottomLogos} alt="" />
            </div>
        </div>
    )
}