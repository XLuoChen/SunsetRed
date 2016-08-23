import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Menu extends Component {
  render() {
    return <div className="col-lg-offset-2">
      <nav className="navbar">
        <ul className="nav navbar-nav navbar-left">
          <Link to='/' className="navbar-brand menuSize">最新专栏</Link>
          <Link to='/' className="navbar-brand menuSize"> 最热专栏</Link>
          <Link to='/' className="navbar-brand menuSize"> 热门话题</Link>
          <Link to='/' className="navbar-brand publishArticle"> 发表</Link>
        </ul>
      </nav>
    </div>
  }
}