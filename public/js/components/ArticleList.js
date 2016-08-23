import React, {Component} from 'react';
import {store} from '../main';

export default class ArticleList extends Component {
  componentDidMount() {
    store.dispatch({type: 'GET_ARTICLES'});
  }

  render() {
    const articles = this.props.articles.map((article, index)=> {
      return <div key={index}>
        <h3>{article.title}</h3>
        <img src="../../images/logo.jpg"/>
        {article.content}
        By {article.author}
        {article.likedCount}
        {article.commentCount}
      </div>
    });
    return <div>
      {articles}
    </div>
  }
}