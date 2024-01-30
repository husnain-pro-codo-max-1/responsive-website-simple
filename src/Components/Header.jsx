import React from 'react'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

function Header() {
    const[toggle, settoggle]  = useState(false);
  return (
        <> 
         <div className='bg-[#6F2DA8] p-4 '>
            <div className='max-w-[1240px]  mx-auto flex justify-between items-center py-[12px]'>

                <div className='text-3xl font-bold'>W3World Tech</div>
               
               {
                toggle ?
               <IoMdClose  onClick={()=>settoggle(!toggle)} className='text-white font-bold text-3xl md:hidden block'/>
               :<MdMenu onClick={()=>settoggle(!toggle)} className='text-white font-bold text-3xl md:hidden block'/>
               }
                <ul className='hidden md:flex text-white gap-10 font-bold'>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>Contact</li>
                <li>About</li>
                </ul>
   

              {/* responsive menu  */}
              <ul className={` duration-300 md:hidden w-full h-screen text-white font-bold fixed bg-black top-[92px]  ${toggle ? 'left-[0]' :'left-[-100%]' }`}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>Contact</li>
                <li className='p-5'>About</li>
                </ul>

            </div>
        </div>
           
       
        </>  
    )
}

export default Header