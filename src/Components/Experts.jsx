import React from 'react'
import laptop from '../assets/img/laptop.jpg';

function Experts() {
  return (
    <>
    <div className='max-w-[1240px]   my-10   mx-auto  md:grid grid-cols-2'>
<div className=' col-span-1  md:w-[80%] text-center'>
  <img src= {laptop} alt="" className='inline' />
</div>

<div className='col-span-1 p-3 flex flex-col justify-center'>
  <h1 className='text-[#6F2DA8] font-bold my-2'>LEARN FROM EXPERTS</h1>
  <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque
   voluptas doloribus alias laboriosam voluptatibus exercitationem? 
  Praesentium dicta itaque, sed quaerat, hic, unde consectetur ad dig
  nissimos atque sit eveniet. Inventore.</p>
  <button className=' w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
</div>

    </div>
  </>
  )
}

export default Experts