import footerLogo from "../icons/footerLogo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function FooterEnd(){
    return(
       <div className="bg-[#FFE6D2] h-20 flex items-center">
        <div className="container flex justify-between items-center">
            <div className="flex items-center gap-[42px]">
                <img src={footerLogo} alt="" />
                <p>©2021 Finsweet</p>
            </div>
            <div className="flex items-center gap-[26px]">
                <a href="/"><FaFacebook /></a>
                <a href="/"><FaTwitter /></a>
                <a href="/"><FaInstagram /></a>
                <a href="/"><FaLinkedin /></a>
            </div>
        </div>
       </div> 
    )
}