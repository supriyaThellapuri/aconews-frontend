


// import React, { useState } from 'react';
// import NewsList from './components/NewsList';
// import SearchBar from './components/SearchBar';
// import Pagination from './components/Pagination'; // Assuming you have a Pagination component
// import './App.css';

// const App = () => {
//   const [query, setQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [articles, setArticles] = useState([]);

//   const handleSearch = () => {
//     console.log('Search query:', query);
//     fetch(`http://localhost:8080/api/news?query=${query}&page=${currentPage}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log("API response:", data);
//         setArticles(data.articles || []);
//       })
//       .catch(error => console.error('Error fetching news:', error));
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Welcome to ACONEWS</h1>
//         <p>Your source for the latest news!</p>
//       </header>
//       <SearchBar setQuery={setQuery} onSearch={handleSearch} />
//       <NewsList articles={articles} />
//       <Pagination currentPage={currentPage} setPage={setCurrentPage} />
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import SearchBar from './components/SearchBar';
// import Pagination from './components/Pagination';
// import './App.css';

// const App = () => {
//   const [query, setQuery] = useState('latest');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = useCallback(() => {
//     console.log('Search query:', query);
//     setLoading(true);
//     fetch(`http://localhost:8080/api/news?query=${query}&page=${currentPage}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log("API response:", data);
//         setArticles(data.articles || []);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching news:', error);
//         setLoading(false);
//       });
//   }, [query, currentPage]);

//   useEffect(() => {
//     handleSearch();
//   }, [handleSearch]);

//   return (
//     <div className="App">
//       <header>
//         <h1>Welcome to ACONEWS</h1>
//         <p>Your source for the latest news!</p>
//       </header>
//       <SearchBar setQuery={setQuery} onSearch={handleSearch} />
//       {loading ? (
//         <div className='loader'></div>
//       ):(
//         <>
//         <NewsList articles={articles} />
//         <Pagination currentPage={currentPage} setPage={setCurrentPage} />
//         </>

//       )
//       }
      
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect, useCallback } from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);

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
