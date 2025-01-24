import React from 'react'

const Hero = ({title='Indigo Book', subtitle='Get your favorite book here.'}) => {
  return (
    <div className='bg-slate-900 shadow-lg m-auto py-20'>
        <div className='max-w-9xl mx-auto sm:px-6 lg:px-8 flex flex-cols items-start p-12'>
            <div className='ml-16'>
              <h1 className='text-4xl text-slate-100 font-extrabold'>Indigo Book</h1>
              <p className=' text-xl text-slate-100 my-2'>Get your favorite book here</p>
              <button className='bg-indigo-500 text-slate-100 font-medium mt-4 px-4 py-3 rounded-md hover:bg-indigo-400'>Discover Books</button>
            </div>
            <img src="src/assets/images/snow.png" alt="" className='max-h-54 max-w-48 mx-auto mr-24 mt-8 p-4'/>
        </div>
    </div>
  )
}

export default Hero