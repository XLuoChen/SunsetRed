import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavigatorBar extends Component {
  render() {
    return <div id="navbar">
      <nav className="navbar">
        <div className="navbar-header">
          <img src="../../images/logo.jpg" className="img-circle"/>
        </div>
        <ul className="nav navbar-nav navbar-left">
          <Link to='/' className="navbar-brand" href="#">首页</Link>
          <Link to='/' className="navbar-brand"> 个人中心</Link>
          <Link to='/friends' className="navbar-brand"> 交友</Link>
          <Link to='/happiness' className="navbar-brand"> 晒幸福</Link>
          <Link to='/MoodDiary' className="navbar-brand"> 心情日记</Link>
          <Link to='/' href="#" className="navbar-brand"> 健康是福</Link>
          <Link to='/traveller' className="navbar-brand"> 旅游世界</Link>
          <Link to='/' className="navbar-brand"> 情感求助</Link>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/"><span className="glyphicon glyphicon-user">注册</span> </Link></li>
          <li><Link to="/"><span className="glyphicon glyphicon-log-in">登录</span> </Link></li>
        </ul>
      </nav>
    </div>;
  }
}