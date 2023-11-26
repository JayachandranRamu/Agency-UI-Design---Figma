import M1 from "../assets/M1"
import M2 from "../assets/M2"
import M3 from "../assets/M3"
import Mob from "../assets/Mob"

import image from "../assets/image.svg"

const Manage = () => {
  return (
    <div className='w-[85%] m-auto'>
<div className="text-center">
<p className="text-[36px] font-[600] text-D_Grey">Manage your entire community<br />in a single system</p>
            <p className="text-[16px] font-[400] text-Grey mt-1">Who is Nextcent suitable for?</p>
 <div className="flex justify-between m-[30px]">
    <M1 />
    <M2 />
    <M3 />
 </div>
</div>
 <div className="flex justify-around items-center my-[80px]">
    <div >
    <img  src={image} alt="" />
    </div>
<div className="w-[55%]">
   <p className="text-D_Grey font-[600] text-[36px]">The unseen of spending three<br />years at Pixelgrade</p> 
   <p className="text-[14px] font-[400] text-Grey mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
   <button className="bg-Shade_1 rounded-[6px] px-[20px] py-[10px] my-5 w-[150px]  text-white" >Learn More</button>
</div>
 </div>
 
    </div>
  )
}

export default Manage