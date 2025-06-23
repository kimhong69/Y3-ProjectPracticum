import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Main content fills available space */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer always at the bottom */}
      <Footer year={new Date().getFullYear()}/>
    </div>
  )
}

export default Mainlayout