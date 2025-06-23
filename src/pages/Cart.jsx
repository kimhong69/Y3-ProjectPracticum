import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import  grabImg  from '../assets/images/grab.png'
import khqrImg from '../assets/images/khqr-5.png';
import React from 'react';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const provinces = [
    "Phnom Penh", "Banteay Meanchey", "Battambang", "Kampong Cham",
    "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot",
    "Kandal", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey",
    "Pailin", "Preah Vihear", "Prey Veng", "Pursat", "Ratanakiri",
    "Siem Reap", "Preah Sihanouk", "Stung Treng", "Svay Rieng",
    "Takeo", "Tboung Khmum", "Kep"
  ];
  
  const [phone, setPhone] = useState('+855');

  const handleFocus = () => {
    if (!phone.startsWith('+855')) {
      setPhone('+855');
    }
  };

  const handleChange = (e) => {
    // Prevent removing +855 prefix
    const value = e.target.value;
    if (value.startsWith('+855')) {
      setPhone(value);
    }
  };

  const isValid = phone.startsWith('+855') && phone.length === 12  ; // +855 + 8-9 digits

  return (
    <div className="max-w-7xl mx-auto p-6">
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-full my-8'>
          <i className="text-5xl font-light ri-shopping-bag-line"></i>
          <h1 className='text-slate-900 text-base font-extralight my-4'>Your shopping cart is empty.</h1>
          <Link to="/" className="text-white text-base font-extralight bg-slate-900 hover:bg-slate-700 hover:text-white rounded-full border border-slate-300 px-12 py-2">
            Shop Now
          </Link>
        </div>
      ) : (
        <>
          <div className='flex gap-4 items-start'>
            <ul className="flex-[2] border border-slate-300 divide-y divide-slate-300 px-4 py-3 rounded-lg space-y-4">
              {cartItems.map(item => (
                <li
                  key={item.id}
                  className="flex justify-between p-4 "
                >
                  {/* Left: Image and Details */}
                  <div className="flex gap-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-28 object-cover rounded"
                    />

                    <div className="flex justify-between flex-col">
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  
                  {/* Right: Remove button */}
                  <div>
                    <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:bg-slate-200 p-1 rounded-md"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className='flex-[1.25] border border-slate-300 px-4 py-3 rounded-2xl space-y-4'>
              <div>
                <h1 className='text-lg font-medium text-slate-900 mb-4'>
                  Order Summary
                </h1>
              </div>
              <div className='shadow-sm mt-4 rounded-md p-4 bg-white'>
                {(() => {
                  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
                  const discount = subtotal * 0.1; // You can update this dynamically
                  const totalAfterDiscount = subtotal - discount;

                  return (
                    <>
                      <div className='flex justify-between items-center mb-2'>
                        <h1 className='text-slate-700 font-extralight'>Subtotal</h1>
                        <h1 className='text-black font-light'>${subtotal.toFixed(2)}</h1>
                      </div>

                      <div className='flex justify-between items-center mb-2'>
                        <h1 className='text-slate-700 font-extralight'>Subtotal After Discount</h1>
                        <h1 className='text-black font-light'>${totalAfterDiscount.toFixed(2)}</h1>
                      </div>

                      <div className='flex justify-between items-start mb-2'>
                        <div className='pl-2 border-l-2 border-gray-200'>
                          <h1 className='text-red-600 text-sm font-extralight'>Product Discount</h1>
                        </div>
                        <h1 className='text-red-600 text-sm font-light'>-${discount.toFixed(2)}</h1>
                      </div>

                      <hr className='my-4 border-slate-200' />

                      <div className='flex justify-between items-center'>
                        <h1 className='text-lg font-normal'>Total</h1>
                        <h1 className='text-lg font-normal'>${totalAfterDiscount.toFixed(2)}</h1>
                      </div>
                    </>
                  );
                })()}
              </div>

              <div className='flex justify-between items-center space-x-4'>
                <div className="relative w-full max-w-sm">
                  <i className="ri-ticket-line absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 text-lg"></i>
                  <input
                    className="bg-slate-100 font-light rounded-full px-12 py-3 focus:shadow-lg outline-none w-full"
                    type="text"
                    placeholder="ADD PROMO CODE"
                  />
                </div>
                <div>
                  <button className="bg-slate-900 text-white font-light px-6 py-3 rounded-full hover:bg-slate-700">
                    Apply
                  </button>
                </div>
              </div>
              <div>
                <h1 className='text-lg font-medium text-slate-900 my-4'>
                Checkout Information
              </h1>
              </div>
              <div className='space-y-4'>
                <div className='flex flex-col space-y-2'>
                  <label className='text-sm font-extralight' htmlFor="">Your name</label>
                  <input className='text-sm font-extralight border border-slate-300 rounded-xl px-2 py-4' type="text" placeholder='Enter your full name' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <label className='text-sm font-extralight' htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onFocus={handleFocus}
                      onChange={handleChange}
                      maxLength={12}
                      required
                      pattern="^\+855\d{8}$"
                      className={`
                        text-sm font-extralight border rounded-xl px-4 py-4
                        ${isValid ? 'border-slate-300' : 'border-red-400'}`}
                      placeholder="+855xxxxxxxx"
                    />
                    {!isValid && (
                      <p className="text-xs text-red-500">Invalid phone format. Please use a valid Cambodian number.</p>
                    )}
                </div>
                <div className='flex flex-col space-y-2'>
                  <label className='text-sm font-extralight' htmlFor="province">Province</label>
                  <select
                    id="province"
                    name="province"
                    className='text-sm font-extralight border border-slate-300 rounded-xl px-2 py-4'
                    >
                    <option value="">Select your province</option>
                    {provinces.map((province, index) => (
                      <option key={index} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col space-y-2'>
                  <label className='text-sm font-extralight' htmlFor="">Delivery Address</label>
                  <textarea className='min-h-14 text-sm font-extralight border border-slate-300 rounded-xl px-2 py-4' type="text" placeholder='Enter your delivery address' />
                </div>
              </div>
              <div className='flex flex-col space-y-2'>
                  <label className='text-sm font-extralight' htmlFor="">Order Notes (Optional)</label>
                  <textarea className='text-sm font-extralight border border-slate-300 rounded-xl px-2 py-4' type="text" placeholder='Any special instructions for your order' />
              </div>
              <div className='space-y-2'>
                  <label className='text-sm font-extralight' htmlFor="">Delivery Options</label>
                  <div className='flex border border-slate-300 rounded-lg px-4 py-3 space-x-4'>
                    <input className='accent-slate-900' type="checkbox" />
                    <img className='w-12 h-10 rounded-md' src={grabImg} alt="" />
                    <div className='flex flex-col justify-center'>
                      <h1 className='text-sm font-normal'>Grab</h1>
                      <p className='text-sm text-slate-400 font-extralight'>Estimated delivery: 1 day</p>
                    </div>
                    <div className='flex justify-end items-center flex-1'>
                      <h1 className='text-sm font-normal'>$ 1.00</h1>
                    </div> 
                  </div>
              </div>
              <div className='space-y-2'>
                  <label className='text-sm font-extralight' htmlFor="">Delivery Options</label>
                  <div className='flex border border-slate-300 rounded-lg px-4 py-3 space-x-4'>
                    <input className='accent-slate-900' type="checkbox" />
                    <img className='w-12 h-10 rounded-md' src={khqrImg} alt="" />
                    <div className='flex flex-col justify-center'>
                      <h1 className='text-sm font-normal'>KHQR</h1>
                      <p className='text-sm text-slate-400 font-extralight'>Scan to pay with any banking app</p>
                    </div>
                  </div>
              </div>
              <div className='py-2'>
                <button className='w-full bg-slate-900 text-white font-light rounded-full py-3'>Complete order</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
