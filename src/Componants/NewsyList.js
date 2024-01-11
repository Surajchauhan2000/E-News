import React from 'react';
import NewsItem from './NewsItem';

const NewsyList = () => {
  const [articles, setArticles] = React.useState([]);

  // ... your code to fetch and set the articles

  return (
    <div>
      {articles.map(article => (
        <NewsItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsyList;
