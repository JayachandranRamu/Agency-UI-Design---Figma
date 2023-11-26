import Dot from "../assets/Dot"
import HerosImage from "../assets/HerosImage"
const Hero = () => {
  return (

    <div className="w-[85%] m-auto">
<div className="flex justify-between">
<div className="flex flex-col justify-center w-[60%]">
            <p className="text-[64px] font-[600] text-D_Grey">Lessons and insights</p>
            <p className="text-Shade_1 text-[64px] font-[600]">from 8 years</p>
            <p className="text-[16px] text-Grey">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-Shade_1 rounded-[6px] px-[20px] py-[10px] my-5 w-[150px]  text-white" >Register</button>
        </div>
        <div className="m-[40px]">
            <HerosImage />
        </div>
</div>
<div className="m-auto w-0">
<Dot />
</div>
      
    </div>
    
  )}
export default Hero