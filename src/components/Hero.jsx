import React from 'react'

const Hero = ({title='Indigo Book', subtitle='Get your favorite book here.'}) => {
  return (
    <div style={{ backgroundColor: '#FFFFe0' }} className='py-12'>
        <div className='flex justify-between max-w-6xl mx-auto sm:px-6 p-12'>
            <div className='max-w-xl'>
              <h1 className='text-4xl text-black font-extrabold'>Bound to Inspire</h1>
              <p className=' text-xl text-black my-8'>Discover your next great read — from timeless classics to today’s bestsellers.</p>
              <a href=""className='text-sm text-slate-900 border border-slate-900 rounded-full font-semibold px-6 py-3 hover:bg-slate-900 hover:text-white'>Explore Now</a>
            </div>
            <div className='max-w-48 max-h-48'>
              <img src="src/assets/images/book-hero-removebg.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero