import React from 'react'
import Typed from 'react-typed';

function Banner() {
  return (
   <>
     <div className='bg-[#6F2DA8] w-full py-[50px]'>
         <div className=' max-w-[1240px] py-[100px] mx-auto text-center  font-bold'>
             <div className='text-xl md:text-3xl  md:p-[24px] mb-2'>
                 Learn with us 
             </div>
                 <h2 className='text-white text-5xl  md:text-[80px] md:p-[24px] mb-2'>Grow with us.</h2>
             <div className='text-white text-[20px] md:text-[50px] md:p-[24px] mb-2'>
                 Learn
                 <Typed className='pl-3'
                    strings={['Web Development' ,'Digital Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
             </div>
             <button className='bg-black text-white p-3 rounded'>Get Started</button>


         </div>
     </div>
    </> 
  )
}

export default Banner