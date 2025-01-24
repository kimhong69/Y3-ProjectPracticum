import React from 'react'

const Cart = () => {
  return (
    <section className='bg-slate-800 h-screen'>
        <div className='container lg:containerr m-auto'>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-2 p-4'>
                    <h2 className='text-slate-200 text-2xl font-semibold mb-4'>Shopping Cart</h2>
                    <div className='flex bg-slate-700 m-auto p-4 rounded-md'>
                        <img src="src/assets/images/romeo.png" alt="" className='max-h-32'/>
                        <div className='relative mx-6 p-2 '>
                            <h3 className='text-slate-200 text-xl font-semibold '>Romeo And Juliet</h3>
                            <p className='text-slate-400'>$ 19.99</p>
                            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, accusantium! Tenetur ullam eveniet pariatur vel debitis eaque nulla odit quae!</p>
                            <button className='bg-red-700 text-white hover:bg-red-500 rounded-md px-2 py-1 absolute bottom-0 right-0'><i class="ri-delete-bin-line mr-1"></i>Remove</button>
                        </div>
                    </div>
                    <div className='flex bg-slate-700 m-auto p-4 rounded-md'>
                        <img src="src/assets/images/romeo.png" alt="" className='max-h-32'/>
                        <div className='relative mx-6 p-2 '>
                            <h3 className='text-slate-200 text-xl font-semibold '>Romeo And Juliet</h3>
                            <p className='text-slate-400'>$ 19.99</p>
                            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, accusantium! Tenetur ullam eveniet pariatur vel debitis eaque nulla odit quae!</p>
                            <button className='bg-red-700 text-white hover:bg-red-500 rounded-md px-2 py-1 absolute bottom-0 right-0'><i class="ri-delete-bin-line mr-1"></i>Remove</button>
                        </div>
                    </div>
                    <div className='flex bg-slate-700 m-auto p-4 rounded-md'>
                        <img src="src/assets/images/romeo.png" alt="" className='max-h-32'/>
                        <div className='relative mx-6 p-2 '>
                            <h3 className='text-slate-200 text-xl font-semibold '>Romeo And Juliet</h3>
                            <p className='text-slate-400'>$ 19.99</p>
                            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, accusantium! Tenetur ullam eveniet pariatur vel debitis eaque nulla odit quae!</p>
                            <button className='bg-red-700 text-white hover:bg-red-500 rounded-md px-2 py-1 absolute bottom-0 right-0'><i class="ri-delete-bin-line mr-1"></i>Remove</button>
                        </div>
                    </div>
                    <div className='flex justify-end my-4'>
                        <h2 className='text-2xl text-white font-bold py-2 mx-4'>Total: $69.99</h2>
                        <button className='bg-blue-700 text-2xl text-white font-bold hover:bg-blue-500 rounded-md px-3 py-2'><i class="ri-shopping-cart-line mr-1"></i>Check out</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart