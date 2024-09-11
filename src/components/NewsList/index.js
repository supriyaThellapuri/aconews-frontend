import React from 'react';
import NewsItem from '../NewsItem'; 
import './index.css';

const NewsList = ({ articles }) => {
  console.info(articles);

  if (!Array.isArray(articles)) {
    return <p>Invalid data received.</p>;
  }

  return (
    <div className="news-list">
        <ul>
          {articles.map((article, index) => (
            <NewsItem key={index} article={article} /> 
          ))}
        </ul>
     
    </div>
  );
};

export default NewsList;
