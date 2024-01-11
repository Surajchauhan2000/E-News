import React from 'react';

const NewsyItem = ({ article }) => {
  const handleSave = () => {
    const { id, title, content } = article;
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    const newArticle = { id, title, content };
    savedArticles.push(newArticle);
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NewsyItem;
