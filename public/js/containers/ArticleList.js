import {connect} from "react-redux";
import ArticleList from "../components/ArticleList";

const mapStateToProps = (state)=> {
  return {articles: state.traveller.articles};
};

const mapDispatchToProps = (dispatch) => {
  return {
    renderArticles: () => {
      dispatch({type: 'GET_ARTICLES'});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

