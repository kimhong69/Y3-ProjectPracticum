import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import BookMustRead from '../components/BookMustRead'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <>
        <Hero />
        <BookMustRead />
        <Homecard />
    </>
  )
}

export default Homepage