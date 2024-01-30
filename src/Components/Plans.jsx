import React from 'react'
import { IoPerson } from "react-icons/io5";


function Plans() {
  return (
    <div className='py-[100px] px-2 '>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3 '>
            <div className='shadow-xl my-2 h-[500px] hover:scale-105 duration-500'>
            {/* first card */}
            <div className=' flex flex-col items-center p-4 gap-6'>
            <IoPerson  className='text-6xl'/>
            <h1 className='text-xl font-bold'>Web development</h1>
            <h1 className='text-2xl font-bold'>$149</h1>
            <p>Lorem ipsum dolor sit.</p>
            <p className=' hidden min-[1080px]:block ml-8'>Lorem ipsum dolor sit amet consectetur  <span className='hidden min-[1080px]:block ml-28'> elit. Natus!</span></p>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className='bg-[#F8B88B] px-12 py-4 rounded-md font-bold mt-4'>Start Trial</button>
</div>
            </div>
            
            <div className='shadow-xl my-2 h-[500px] bg-gray-100 hover:scale-105 duration-500'>

            {/* second  card */}
            <div className=' flex flex-col items-center p-4 gap-6'>
            <IoPerson  className='text-6xl'/>
            <h1 className='text-xl font-bold'>Digital Marketing</h1>
            <h1 className='text-2xl font-bold'>$149</h1>
            <p>Lorem ipsum dolor sit.</p>
            <p className='  hidden min-[1080px]:block ml-8 '>Lorem ipsum dolor sit amet consectetur  <span className='hidden min-[1080px]:block ml-28'> elit. Natus!</span></p>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className=' bg-black text-white px-12 py-4 rounded-md font-bold mt-4'>Start Trial</button>
</div>

            </div>
            
            <div className='shadow-xl my-2 h-[500px] hover:scale-105 duration-500'>

{/* third  card */}
<div className=' flex flex-col items-center p-4 gap-6'>
            <IoPerson  className='text-6xl'/>
            <h1 className='text-xl font-bold'>App development</h1>
            <h1 className='text-2xl font-bold'>$149</h1>
            <p>Lorem ipsum dolor sit.</p>
            <p className=' hidden min-[1080px]:block'>Lorem ipsum dolor sit amet consectetur  <span className='hidden min-[1080px]:block ml-28'> elit. Natus!</span></p>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className='bg-[#F8B88B] px-12 py-4 rounded-md font-bold mt-4'>Start Trial</button>
</div>

            </div>
        </div>
    </div>
  )
}

export default Plans