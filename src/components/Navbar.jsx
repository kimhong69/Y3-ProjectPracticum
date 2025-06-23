import React from 'react'
import logo from '../assets/images/green-junimo-nobg.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white container sticky top-0 mx-auto p-4 border-b border-slate-300'>
      <div className='max-w-6xl mx-auto flex justify-between'> 
        <div className='flex justify-center items-center'>
          <img className='h-12 w-12' src={logo} alt="Logo" />
        </div>
        <div className='flex items-center space-x-6'>
          <Link to="/cart" className='font-semibold text-xl'><i className="ri-shopping-bag-line mr-1 text-2xl"></i>Cart</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar