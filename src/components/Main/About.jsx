import Img1 from '../imgs/Image 1.png'
import Img2 from '../imgs/Image 2.png'
import Img3 from '../imgs/Image 3.png'
import Shape from '../icons/Shapes.png'

export default function About() {
    return (
        <div className="py-30">
            <div className="container">
                <p className="text-[14px] font-medium leading-[20px] tracking-[3px]">ABOUT US</p>
                <div className="flex justify-between items-center mt-4">
                    <h2 className="w-[640px] h-[174px] text-[#232536] font-semibold text-[48px] leading-[58px]">The company leads entire webdesign process from concept to delivery.</h2>
                    <div>
                        <h3 className="w-[547px] text-[#232536] font-semibold text-[36px] leading-[58px]">The Era Of Technology.</h3>
                        <p className="w-[547px] text-[#5D5F6D] font-normal text-[16px] leading-[24px]">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex gap-[11px]'>
                        <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" /> </div>
                </div>
                <div className='flex justify-between items-center mt-12 h-24'>
                    <div className='flex gap-16'>
                        <div className='w-[134px]'>
                            <h4 className='text-[36px] font-semibold text-[#232536] leading-[54px]'>1560+</h4>
                            <img className='mt-2' src={Shape} alt="" />
                            <p className='font-normal text-[16px] leading-[24px] mt-1'>Project Delivered</p>
                        </div>
                        <div className='w-[134px]'>
                            <h4 className='text-[36px] font-semibold text-[#232536] leading-[54px]'>100+</h4>
                            <img className='mt-2' src={Shape} alt="" />
                            <p className='font-normal text-[16px] leading-[24px] mt-1'>Proffessional</p>
                        </div>
                        <div className='w-[134px]'>
                            <h4 className='text-[36px] font-semibold text-[#232536] leading-[54px]'>950+</h4>
                            <img className='mt-2' src={Shape} alt="" />
                            <p className='font-normal text-[16px] leading-[24px] mt-1'>Happy Client</p>
                        </div>
                        <div className='w-[134px]'>
                            <h4 className='text-[36px] font-semibold text-[#232536] leading-[54px]'>10 yrs</h4>
                            <img className='mt-2' src={Shape} alt="" />
                            <p className='font-normal text-[16px] leading-[24px] mt-1'>Experience</p>
                        </div>
                    </div>
                    <div><a className='text-[#444CFC] text-[16px] leading-[24px] font-medium' href="/">Read about us</a></div>
                </div>
            </div>
        </div>
    )
}