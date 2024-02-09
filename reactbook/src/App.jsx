import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Form from './component/Form';
import Book from './component/Book';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <NavBar handleSearch={handleSearch} location={location} />
      <Routes>
        <Route path="/" element={<Book searchQuery={searchQuery} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}