import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import books from '../books.json'
import Card from './Card'

const top4books = books.slice(1, 5)

const Homecard = () => {

  

  return (
    <section className='container max-w-5xl mx-auto my-8'>
      <div className='text-center p-4'>
        <h1 className='text-slate-900 text-5xl font-medium py-4 mb-8'>TOP SELLING</h1>
      </div>
      <div className='grid grid-cols-4 gap-12 mx-4'>
        {top4books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
    </div>
    <div className='flex justify-center my-4 py-8'>
      <Link to="/all-books" className='text-slate-900 hover:bg-slate-900 hover:text-white rounded-full border px-12 py-3'>View all</Link>
    </div>
  </section>
  )
}

export default Homecard