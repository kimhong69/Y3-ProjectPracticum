import React from 'react'
import { Link } from 'react-router-dom'
const MoreBook = () => {
  return (
        <section className='bg-slate-200 py-8'>
            <div className='container-xl lg:container m-auto'>
                <h1 className='text-slate-600 text-center text-3xl font-extrabold py-4'>More Book</h1>
                <div className='flex gap-4'>
                    <Link to='/book' className='bg-slate-200 shadow-xl p-4'>
                        <img src="src/assets/images/romeo.png" alt="" className=''/>
                        <h2 className='text-2xl text-slate-600 font-semibold pt-2'>Romeo and Juliet</h2>
                        <p className='text-slate-600 mt-2 mb-4'>Lorem ipsum dolor sit amet.</p>
                        <a href="" className='bg-indigo-500 text-white rounded-lg px-4 py-2'>Add to Cart</a>
                    </Link>
                    <Link to='/book' className='bg-slate-200 shadow-xl p-4'>
                        <img src="src/assets/images/romeo.png" alt="" className=''/>
                        <h2 className='text-2xl text-slate-600 font-semibold pt-2'>Romeo and Juliet</h2>
                        <p className='text-slate-600 mt-2 mb-4'>Lorem ipsum dolor sit amet.</p>
                        <a href="" className='bg-indigo-500 text-white rounded-lg px-4 py-2'>Add to Cart</a>
                    </Link>
                    <Link to='/book' className='bg-slate-200 shadow-xl p-4'>
                        <img src="src/assets/images/romeo.png" alt="" className=''/>
                        <h2 className='text-2xl text-slate-600 font-semibold pt-2'>Romeo and Juliet</h2>
                        <p className='text-slate-600 mt-2 mb-4'>Lorem ipsum dolor sit amet.</p>
                        <a href="" className='bg-indigo-500 text-white rounded-lg px-4 py-2'>Add to Cart</a>
                    </Link>
                    <Link to='/book' className='bg-slate-200 shadow-xl p-4'>
                        <img src="src/assets/images/romeo.png" alt="" className=''/>
                        <h2 className='text-2xl text-slate-600 font-semibold pt-2'>Romeo and Juliet</h2>
                        <p className='text-slate-600 mt-2 mb-4'>Lorem ipsum dolor sit amet.</p>
                        <a href="" className='bg-indigo-500 text-white rounded-lg px-4 py-2'>Add to Cart</a>
                    </Link>
                </div>
            </div>
        </section>
  )
}

export default MoreBook