import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavigatorBar extends Component {
  render() {
    return <div id="navbar">
      <nav className="navbar ">
        <div className="navbar-header">
          <img src="../../images/logo.jpg" className="img-circle"/>
        </div>
        <ul className="nav navbar-nav navbar-left">
          <Link to='/' className="navbar-brand" href="#">首页</Link>
          <Link to='/' href="#" className="navbar-brand"> 注册</Link>
          <Link to='/' href="#" className="navbar-brand"> 登录</Link>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/signUp" href="#"><span className="glyphicon glyphicon-user"></span> 注册</Link></li>
          <li><Link to="/signIn" href="#"><span className="glyphicon glyphicon-log-in"></span> 登录</Link></li>
        </ul>
      </nav>
    </div>
  }
}