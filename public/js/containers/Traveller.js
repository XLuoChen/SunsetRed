import React, {Component} from 'react';
import ArticleList from '../containers/ArticleList';
import Menu from '../components/Menu';

export default class Traveller extends Component {
  render() {
    return <div>
      <Menu/>
      <ArticleList/>
    </div>
  }
}