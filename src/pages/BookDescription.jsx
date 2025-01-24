import React from 'react'

const BookDescription = () => {
  return (
    <section className='bg-slate-800'>
      <div className='flex m-auto p-4'>
        <div className='bg-slate-200'>
          <img src="src/assets/images/romeo.png" alt="" className='max-w-md max-h-full rounded-md p-4'/>
        </div>
        <div className='mx-8 p-4'>
          <h2 className='text-slate-200 text-3xl font-semibold'>Romeo And Juliet</h2>
          <h6 className='text-slate-400 text-sm'>by William Shakespeare</h6>
          <p className='text-slate-400 text-sm py-4'>Romeo and Juliet is a tragic love story by William Shakespeare. Set in Verona, Italy, it centers around two young lovers from feuding families: the Montagues and the Capulets.
Despite the deep-seated animosity between their families, Romeo and Juliet fall passionately in love. They defy their families and marry secretly with the help of Friar Laurence. However, their happiness is short-lived. A series of tragic events, including the death of Juliet's cousin Tybalt and Romeo's banishment from Verona, leads to a series of misunderstandings. Believing Juliet to be dead, Romeo takes his own life. Upon awakening to find Romeo dead, Juliet, in despair, takes her own life as well.
Romeo and Juliet's tragic fate serves as a poignant reminder of the destructive power of hate and the enduring power of love, even in the face of insurmountable obstacles.</p>
          <h1 className='text-white text-3xl font-medium mb-8'>Price: $19.99</h1>
        </div>
      </div>
    </section>
  )
}

export default BookDescription