import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({book}) => {
  
  return (
    <Link to={`/book-detail/${book.id}`} className='bg-[#f5f5f5] flex flex-col border border-solid rounded-md shadow-sm hover:bg-slate-50'>
      <div className='overflow-hidden p-3'>
        <img className='w-full h-64 rounded-sm' src={book.img} alt={book.title} />
      </div>
      <div className='px-3 pb-4'>
        <h1 className='text-slate-900 text-lg font-medium my-2'>{book.title}</h1>
        <p className='text-slate-900 text-sm'>{book.description}</p>
      </div>
    </Link>
  )
}

export default Card