import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <nav className='bg-slate-900'>
      <div className='flex h-20 items-center justify-between'>
        <div className='flex flex-1 items-center justify-center mx-8 md:items-stretch md:justify-start'>
          <a href="" className='flex flex-shrink-0 items-center mr-4'>
            <img src= {logo} alt="" className='h-10 w-auto'/>
          </a>
          <span className='text-2xl text-indigo-500 font-bold'>Indigo Book</span>
        </div>
        <div className='flex mx-4 md:ml-4'>
          <div className='flex space-x-2 ml'>
            <Link to="/" className='bg-slate-700 text-white hover:bg-slate-700 rounded-md px-3 py-2'><i className='ri-home-line pr-1'></i>Home</Link>
            <Link to="/about" className='text-white hover:bg-slate-700 rounded-md px-3 py-2'>About Us</Link>
            {/* <Link to="" className='text-white hover:bg-slate-700 rounded-md px-3 py-2'><i class="ri-phone-line pr-1"></i>Contact</Link> */}
          </div>
        <div className='flex mx-16'>
        <div className='flex space-x-4 ml'>
            <div>
              <input type="text" placeholder='Search' className='text-slate-800 outline-none rounded-xl px-3 py-2'/>
              {/* <i class="ri-search-line"></i> */}
            </div>
            <a href="" className='text-white hover:bg-slate-700 rounded-md px-3 py-2'><i class="ri-user-line pr-1"></i>Account</a>
            <Link to="/cart" className='text-white hover:bg-slate-700 rounded-md px-3 py-2'><i class="ri-shopping-cart-line pr-1"></i>Cart</Link>
          </div>
        </div>  
        </div>
      </div>
    </nav>
  )
}

export default Navbar