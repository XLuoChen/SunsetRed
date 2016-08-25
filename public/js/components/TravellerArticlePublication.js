import React, {Component} from 'react';
import Menu from './Menu';

export default class TravellerArticlePublication extends Component {
  render() {
    return <div>
      <Menu/>
      <Publish/>
    </div>
  }
}

export class Publish extends Component {
  render() {
    return <form role="form">
      <div className="form-group col-lg-offset-2 col-lg-6">
        标题
        <input type="text" className="form-control" placeholder="请输入文章标题"/>
        正文
        <textarea className="form-control" rows="10"/>
        <div className="col-lg-offset-8" id="publishButton">
          <button type="button" className="btn btn-default buttonInterval">取消</button>
          <button type="button" className="btn btn-primary">发表</button>
        </div>
      </div>
    </form>
  }
}