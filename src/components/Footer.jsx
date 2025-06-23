import React from 'react'
import 'remixicon/fonts/remixicon.css';
import loggo from '../assets/images/green-junimo-nobg.png';

const Footer = ({year='2025'}) => {
  return (
    <section id='footer' className='bg-[#ffffe0] p-6'>
        <div className='container max-w-6xl mx-auto py-4 border-b border-slate-300'>
            <div className='flex justify-start space-x-12'>
                <div className='max-w-60'>
                    <img className='w-12 h-12' src={loggo} alt="Logo"/>
                    <h1 className='text-xl text-slate-900 font-semibold my-8'>Junimo</h1>
                    <p className='text-sm text-slate-600 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur! At corrupti culpa exercitationem molestiae consectetur amet maxime quas? Natus.</p>
                    <div className='flex justify-start items-center text-center space-x-4 my-6'>
                        <a href=""><i className="text-xl border border-slate-900 rounded-full hover:bg-slate-900 hover:text-white ri-telegram-2-fill p-1"></i></a>
                        <a href=""><i className="text-xl border border-slate-900 rounded-full hover:bg-slate-900 hover:text-white ri-facebook-fill p-1"></i></a>
                        <a href=""><i className="text-xl border border-slate-900 rounded-full hover:bg-slate-900 hover:text-white ri-messenger-fill p-1"></i></a>
                        <a href=""><i className="text-xl border border-slate-900 rounded-full hover:bg-slate-900 hover:text-white ri-instagram-fill p-1"></i></a>
                        <a href=""><i className="text-xl border border-slate-900 rounded-full hover:bg-slate-900 hover:text-white ri-tiktok-fill p-1"></i></a>
                    </div>
                </div>
                
                <div className='flex flex-col space-y-4 my-20'>
                    <h1 className='text-lg text-slate-900 font-semibold'>Contact</h1>
                    <h1 className='text-sm text-slate-600 font-medium'>(+855) 123 456 789</h1>
                    <h1 className='text-sm text-slate-600 font-medium'>moreinfo@gmail.com</h1>
                    <h1 className='text-sm text-slate-600 font-medium'>Privacy Policy</h1>
                </div>
            </div>
        </div>
        <div className='container max-w-6xl mx-auto flex justify-between my-4'>
            <div className='flex items-center'>
                <h1 className='text-sm text-slate-900 font-medium'>Copyright © {year}</h1>
            </div>
            <div className='flex items-center'>
                <h1 className='text-sm text-slate-900 font-medium'>Powered by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs0gcJCYQJAYcqIYzv" target='_blank' className=''>Junimo</a></h1>
            </div>
            {/* <div className='flex items-center'>
            <i class="ri-qr-code-line"></i>
                <img className='w-6 h-6' src="src/assets/images/green-junimo-nobg.png" alt="" />
            </div> */}
        </div>
    </section>
  )
}

export default Footer