import React from 'react'
import Mobile from '../assets/Mobile'

const Manage2 = () => {
  return (
    <div className='w-[85%] m-auto'>
     <div className="flex justify-around items-center my-[80px]">
        <div >
        <Mobile />
        </div>
    <div className="w-[48%]">
       <p className="text-D_Grey font-[600] text-[36px]">How to design your site footer like we did</p> 
       <p className="text-[14px] font-[400] text-Grey mt-3">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
       <button className="bg-Shade_1 rounded-[6px] px-[20px] py-[10px] my-5 w-[150px]  text-white" >Learn More</button>
    </div>
     </div>
     
        </div>
  )
}

export default Manage2