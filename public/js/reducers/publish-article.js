const publishArticle = (state, action) => {
  return {
    articles: action.articles
  }
};

module.exports = publishArticle;