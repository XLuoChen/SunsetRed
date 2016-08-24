import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Menu extends Component {
  render() {
    return <div className="col-lg-offset-2">
      <nav className="navbar">
        <ul className="nav navbar-nav navbar-left">
          <Link to='/traveller' className="navbar-brand menuSize">最新专栏</Link>
          <Link to='/traveller' className="navbar-brand menuSize"> 最热专栏</Link>
          <Link to='/traveller' className="navbar-brand menuSize"> 热门话题</Link>
          <Link to='/traveller' className="navbar-brand publishArticle"><span
            className="glyphicon glyphicon-pencil menuSize">发表</span></Link>
        </ul>
      </nav>
    </div>
  }
}