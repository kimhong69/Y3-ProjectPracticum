import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      <section className='relative bottom-o bg-slate-900 py-4'>
          <div className='flex flex-col items-center'>
              <div className='flex gap-4'>
                <Link className='text-white py-2' to='/'>Home</Link>
                <Link className='text-white py-2' to='/'>About</Link>
                <Link className='text-white py-2' to='/'>Contact</Link>
                <Link className='text-white py-2' to='/'>Team</Link>
              </div>
              <div className='flex gap-4'>
                <Link className='text-white text-2xl py-2' to='/'><i class="ri-facebook-box-line"></i></Link>
                <Link className='text-white text-2xl py-2' to='/'><i class="ri-instagram-line"></i></Link>
                <Link className='text-white text-2xl py-2' to='/'><i class="ri-twitter-x-line"></i></Link>
                <Link className='text-white text-2xl py-2' to='/'><i class="ri-telegram-2-line"></i></Link>
              </div>
              <div className='text-white font-semibold py=2'>
              <i class="ri-at-line"></i>Copyright 2K25
              </div>
          </div>
      </section>
  )
}

export default Footer