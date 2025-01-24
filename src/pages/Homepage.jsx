import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import MoreBook from '../components/MoreBook'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
        <Hero />
        <Homecard />
        <MoreBook />
    </>
  )
}

export default Homepage