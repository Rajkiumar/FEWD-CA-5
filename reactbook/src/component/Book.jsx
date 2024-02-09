import React, { useState, useEffect } from 'react';
import './Book.css';

const Book = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'whatever-you-want'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book-container">
      {filteredBooks.length === 0 ? (
        <div className="no-results">No books found</div>
      ) : (
        <div className="books-grid">
          {filteredBooks.map(book => (
            <div key={book.id} className="book">
              <div className="book-box">
                <img src={book.imageLinks.thumbnail} alt={book.title} className="book-image" />
                <div className="book-details">
                  <h2 className="book-title">{book.title}</h2>
                  <div className="book-rating">{book.averageRating} <span className="book-free">Free</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Book;
