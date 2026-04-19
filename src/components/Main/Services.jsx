import { HiArrowLongRight } from "react-icons/hi2";
import IconDiv from "../icons/IconDiv.png"


export default function Services(){
    return(
        <div className="bg-[#FFE6D2] py-24">
            <div className="container">
                <div className="w-[777px] h-[310px]">
                    <p className="text-[14px] font-medium leading-[20px] tracking-[3px]">OUR SERVICES</p>
                    <h1 className="w-[700px] h-[174px] text-[#232536] font-semibold text-[48px] leading-[58px] mt-3">We build software solutions that solve client's business challenges</h1>
                    <button className="w-[214px] h-16 bg-[#444CFC] text-white opacity-[87%] flex items-center justify-center gap-4 mt-10">Start a Project <HiArrowLongRight /></button>
                </div>
                <div className="flex mt-20 gap-8">
                    <div className="w-101 h-[335px] p-12 bg-white">
                        <img src={IconDiv} alt="" />
                        <h4 className="text-[16px] font-semibold leading-[28px] mt-4">Technical support</h4>
                        <p className="w-[286px] text-[16px] font-normal leading-[24px] mt-2">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        <a className='text-[#444CFC] text-[16px] leading-[24px] font-medium flex justify-start gap-2 items-center mt-6' href="/">Read More <HiArrowLongRight /></a>
                    </div>
                    <div className="w-101 h-[335px] p-12 bg-white">
                        <img src={IconDiv} alt="" />
                        <h4 className="text-[16px] font-semibold leading-[28px] mt-4">Technical support</h4>
                        <p className="w-[286px] text-[16px] font-normal leading-[24px] mt-2">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        <a className='text-[#444CFC] text-[16px] leading-[24px] font-medium flex justify-start gap-2 items-center mt-6' href="/">Read More <HiArrowLongRight /></a>
                    </div>
                    <div className="w-101 h-[335px] p-12 bg-white">
                        <img src={IconDiv} alt="" />
                        <h4 className="text-[16px] font-semibold leading-[28px] mt-4">Technical support</h4>
                        <p className="w-[286px] text-[16px] font-normal leading-[24px] mt-2">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        <a className='text-[#444CFC] text-[16px] leading-[24px] font-medium flex justify-start gap-2 items-center mt-6' href="/">Read More <HiArrowLongRight /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}