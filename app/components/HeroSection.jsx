import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <>
    <div className="flex items-center flex-col p-40">
         <h1 className="text-6xl font-bold">Organize your work</h1>
         <h1 className="text-6xl font-bold pb-6">and life, finally.</h1>
         <p className="text-xl text-[#a3a2a2]">
         Simplify life for both you and your team. The world’s #1 task 
         </p>
         <p className="text-xl pb-4 text-[#a3a2a2]">
         manager and to-do list app.
         </p>
         <span className="flex space-x-4 my-8">  
            <button className="bg-[#f65261] text-white py-4 px-3 rounded-lg text-xl font-semibold">Start for Free</button>
        </span>
        <Image src="/images/homepage/demo.png" width={1500} height={1500} alt="hero" className='pt-5'/>
        <div className='grid grid-cols-12 w-full py-14'>
          <div className='col-span-3 font-serif px-4 text-xl  text-[#7b7a7a] border-r-2 flex-col items-center flex'>
          <p>“Simple, straightforward,</p>
          <p>and super powerful”</p>
          </div>
          <div className='col-span-3 font-serif px-4 text-xl  text-[#7b7a7a] border-r-2 flex justify-center'>
          “Simply a joy to use”
          </div>
          <div className='col-span-3 font-serif px-4 text-xl  text-[#7b7a7a] border-r-2 flex items-center flex-col'>
          <p>“The best to-do list app</p>
          <p>on the market”</p>
          </div>
          <div className='col-span-3 font-serif px-4 text-xl  text-[#7b7a7a] border-r-2 flex justify-center'>
          “Nothing short of stellar”
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection