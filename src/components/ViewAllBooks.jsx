import { useState } from "react";
import books from '../books.json';
import Card from './Card';

const ViewAllBooks = () => {
  const uniqueGenres = [...new Set(books.map(book => book.genre))];
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre) // remove if already selected
        : [...prev, genre]              // add if not selected
    );
  };

  const filteredBooks = selectedGenres.length === 0
    ? books
    : books.filter(book => selectedGenres.includes(book.genre));

  return (
    <section className='container max-w-5xl mx-auto my-8'>
      <div className='flex flex-col items-center p-4'>
        <div className='p-4 w-full rounded-md mb-8 border border-slate-400 shadow-lg'>
          <div className="mb-4">
            <div className="flex justify-between border-b border-slate-400 pb-2 mb-4">
              <div>
                <h1 className="text-xl font-medium mb-2">Filter by Genre</h1>
              </div>
                <i className="text-xl font-medium mb-2 ri-sound-module-line"></i>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
              {uniqueGenres.map((genre) => (
                <label key={genre} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-slate-900"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                  />
                  <span>{genre}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-12 mx-4'>
          {filteredBooks.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewAllBooks;
