module.exports = (state = {articles: []}, action) => {

  switch (action.type) {

    case 'GET_ARTICLES': {
      return {articles: action.articles};
    }
  }

  return state;
};