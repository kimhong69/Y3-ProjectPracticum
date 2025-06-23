import { useParams } from 'react-router-dom';
import books from '../books.json';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';


const BookDetail = () => {

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const top4books = books.slice(7, 11);
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div className="text-center text-red-600 mt-10">Book not found</div>;
  }

  const handleAddToCart = (book) => {
    addToCart(book, quantity);  // <-- Actually add to cart here
    console.log(`Added ${quantity}x ${book.title} to cart`);
    alert(`Added ${quantity} copy${quantity > 1 ? 'ies' : ''} of "${book.title}" to cart`);
  };

  return (
    <>
      <div className="container max-w-5xl mx-auto my-16 border border-slate-300 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={book.img}
            alt={book.title}
            className="w-96 h-auto object-cover"
          />
          <div>
            <div className='flex justify-between border-b border-slate-300 p-4'>
              <h1 className="text-4xl font-light mt-4 text-slate-900"><strong>{book.title}</strong></h1>
            <h1 className="text-4xl font-light mt-4 text-slate-900"><strong>${book.price}</strong></h1>
            </div>
            <div className='mt-4 border-b border-slate-300 pb-4'>
              <p className="text-gray-600 font-light  mb-4 italic px-4">by {book.author}</p>
            <p className="text-lg font-light mb-2 px-4">{book.description}</p>
            <p className="mb-1 font-light px-4"><strong>Genre:</strong> {book.genre}</p>
            <p className="mb-1 font-light px-4"><strong>Published:</strong> {book.published}</p>
            <p className="mb-1 font-light px-4"><strong>Rating:</strong> {book.rating} <i className="ri-star-fill"></i></p>
            <p className="mb-1 font-light px-4"><strong>Stock:</strong> {book.stock}</p>
            </div>
            <div className="mt-6 flex gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center border border-slate-300 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-6 py-4 text-slate-700 hover:bg-slate-200"
                >
                  -
                </button>
                <span className="px-6 text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-6 py-4 text-slate-700 hover:bg-slate-200"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <div className="flex justify-center"> 
                <button
                  onClick={() => handleAddToCart(book)}
                  className="text-slate-900 hover:bg-slate-900 hover:text-white rounded-full border border-slate-300 px-16 py-4 transition"
                >
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-5xl mx-auto my-8 border-t border-slate-400 p-4'>
        <div className='text-center p-4'>
          <h1 className='text-slate-900 text-5xl font-medium py-4 mb-8'>You might also like</h1>
        </div>
        <div className='grid grid-cols-4 gap-12 mx-4'>
          {top4books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookDetail;
