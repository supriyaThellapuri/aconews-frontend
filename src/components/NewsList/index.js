


// // src/components/NewsList.js
// import React from 'react';
// import NewsItem from '../NewsItem'; // Import the NewsItem component

// const NewsList = ({ articles }) => {
//   console.info(articles)
//   // Ensure articles is an array
//   if (!Array.isArray(articles)) {
//     return <p>Invalid data received.</p>;
//   }

//   return (
//     <div className="news-list">
//       {articles.length === 0 ? (
//         <p>No news articles available.</p>
//       ) : (
//         <ul>
//           {articles.map((article, index) => (
//             <NewsItem key={index} article={article} /> 
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NewsList;


import React from 'react';
import NewsItem from '../NewsItem'; // Import the NewsItem component
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
