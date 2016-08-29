import React, {Component} from 'react';
import Menu from './Menu';

export default class TravellerArticlePublication extends Component {
  onPublish() {
    const title = this.refs.title.value;
    this.refs.title.value = '';
    const content = this.refs.content.value;
    this.refs.content.value = '';
    this.props.publish(title, content);
  }

  render() {
    return <div>
      <Menu/>
      <form role="form">
        <div className="form-group col-lg-offset-2 col-lg-6">
          标题
          <input type="text" className="form-control" placeholder="请输入文章标题" ref="title"/>
          正文
          <textarea className="form-control" rows="10" ref="content"/>
          <div className="col-lg-offset-8" id="publishButton">
            <button type="button" className="btn btn-default buttonInterval">取消</button>
            <button type="button" className="btn btn-primary" onClick={this.onPublish.bind(this)}>发表</button>
          </div>
        </div>
      </form>
    </div>
  }
}
