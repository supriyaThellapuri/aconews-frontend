import React, { useState, useEffect, useCallback } from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  

  const handleSearch = useCallback(() => {
    console.log('Search query:', query);
    
    fetch(`http://localhost:8080/api/news?query=${query}&page=${currentPage}`)
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log("API response:", data);
        setArticles(data.articles || []);
       
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        
      });
  }, [query, currentPage]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  useEffect(() => {
    console.log('Articles state:', articles);
  }, [articles]);

  return (
    <div className="App">
      <header>
        <h1>Welcome to ACONEWS</h1>
        <p>Your source for the latest news!</p>
      </header>
      <SearchBar setQuery={setQuery} onSearch={handleSearch} />
      <NewsList articles={articles} />
      <Pagination currentPage={currentPage} setPage={setCurrentPage} />
     
    </div>
  );
};

export default App;
