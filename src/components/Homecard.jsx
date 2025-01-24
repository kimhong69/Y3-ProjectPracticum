import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import card from './card'
import books from '../books.json'

const recentBooks = books.slice(0, 5)

// const BookDes = ( {book} ) => {
//   const [showFullDescription, setFullDescription] = useState(false)

//   let description = book.description

//   if (!showFullDescription) {
//     description = description.substring(0, 10) + '...'
//   }

// }

const Homecard = () => {
  return (
    <section className='bg-white py-8'>
      <div className='container lg:container m-auto'>
        <div className='grid grid-cols-5 gap-6'>
          {/* { recentBooks.map((book) => (
            <Link to='/book' className='bg-slate-200 shadow-xl p-4'>
              <img src="src/assets/images/romeo.png" alt="" className=''/>
              <h2 className='text-2xl text-slate-600 font-semibold pt-2'>{ book.title }</h2>
              <p className='text-slate-600 mt-2 mb-4'>{ book.desc }</p>
              <button className='text-slate-600 mb-5 hover:text-slate-700'></button>
              <a href="" className='bg-indigo-500 text-white rounded-lg px-4 py-2'>Add to Cart</a>
          </Link>
          ))}; */}
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

export default Homecard