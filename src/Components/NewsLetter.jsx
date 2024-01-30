import React from 'react'

function NewsLetter() {
  return (
   <>
    <div className='w-full bg-[#6F2DA8] p-4'>
        <div className='max-w-[1240px] mx-auto  md:flex justify-between py-[50px]'>
            <div className='mb-2'>
                <h1 className=' text-[20px] md:text-[40px] font-bold text-white'>Want to Learn Latest I.T Skills?</h1>
            <span className='text-white'>Sign up to our Newsletter and stay up to data</span>
            </div>
            <div className='mb-2'>
                <input type="text"  className='p-3 rounded mb-2 text-slate-400 mx-2' placeholder='Email'/>
                <button className='bg-black text-white p-3 rounded'>Get Started</button>
                <p className='text-white'>We care bout the protection of your data read our <br />
                <a href="" className='text-black'> privacy policy</a></p>

            </div>
        </div>
    </div>
    </>
  )
}

export default NewsLetter