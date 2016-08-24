module.exports = (state = {articles: []}, action) => {

  switch (action.type) {
    case 'ARTICLE_LIST': {
      return {articles: action.articles};
    }
  }

  return state;
};