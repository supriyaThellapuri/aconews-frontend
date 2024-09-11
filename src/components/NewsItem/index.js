import React from 'react';
import './index.css';

const NewsItem = ({ article }) => {
  return (
    <li className="news-item">
      <img src={article.image} alt={article.title} className='news-image' />
      <h2 className='news-title'>{article.title}</h2>
      <p className='news-description'>{article.description}</p>
      <p className='news-content'>{article.content}</p>
      <a href={article.url} target='_blank' rel="noopener noreferrer" className='news-link'>
        Read More
      </a>
      <p className='news-published'>
        Published on: {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <p className='news-source'>
        Source: <a href={article.source.url} target='_blank' rel="noopener noreferrer">{article.source.name}</a>
      </p>
    </li>
  );
};

export default NewsItem;


