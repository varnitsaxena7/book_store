import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import CircularProgress from '@mui/material/CircularProgress';

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/books' : 'https://book-store-wdrs.onrender.com/books';
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(URL);
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress color="primary" />
        </div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {books.map((book, index) => (
            <li key={index}>
              <Book book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
