import React from 'react';

const SavedArticles = () => {
  const [savedArticles, setSavedArticles] = React.useState([]);

  React.useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    setSavedArticles(savedArticles);
  }, []);

  return (
    <div>
      <h2>Saved Articles</h2>
      {savedArticles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedArticles;
