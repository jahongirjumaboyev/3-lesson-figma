import FooterIcon from "../icons/footerIcon.png"
import { HiMiniHandThumbUp } from "react-icons/hi2";

export default function Footer(){
    return(
        <div className="container pt-24 pb-16">
            <img src={FooterIcon} alt="" />
            <div className="flex mt-8">
                <div>
                    <h2 className="w-[452px] h-[116px] text-[#232536] font-semibold text-[48px] leading-[56px]">Let's make something special</h2>
                    <h3 className="text-[24px] font-semibold leading-[36px] flex items-center justify-start gap-1.5 mt-10">Let's talk <HiMiniHandThumbUp color="indigo" /></h3>
                    <p className="mt-[28px]">020 7993 2905</p>
                    <p>hi@finsweet.com</p>
                    <p className="mt-[30px] text-[14px] w-50">DLF Cybercity, Bhubaneswar, India, &52050 </p>
                </div>
                <div className="ml-51 flex gap-15">
                    <div className="flex flex-col gap-4 w-30 h-[188px] justify-between items-start">
                    <a className="text-[16px] font-semibold leading-[28px]" href="/">Home</a>
                    <a className="text-[16px] font-semibold leading-[28px]" href="/">Services</a>
                    <a className="text-[16px] font-semibold leading-[28px]" href="/">Company</a>
                    <a className="text-[16px] font-semibold leading-[28px]" href="/">Career</a>
                    <a className="text-[16px] font-semibold leading-[28px]" href="/">News</a>
                </div>
                <div className="flex flex-col gap-1 w-34 h-[188px] justify-between items-start">
                    <a className="text-[16px] font-semibold leading-[28px]" href="/">Service</a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">Technical support</a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">Testing</a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">AWS/Azure </a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">Information Technology</a>
                </div>
                <div className="flex flex-col gap-1 w-34 h-[188px] justify-between items-start">
                    <a className="text-[16px] font-semibold leading-[28px]" href="/">Resourses</a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">About Us</a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">Testimonial</a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">Privacy Policy</a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">Terms of use</a>
                    <a className="text-[16px] font-medium leading-[28px]" href="/">Blog</a>
                </div>
                </div>
            </div>
        </div>
    )
}