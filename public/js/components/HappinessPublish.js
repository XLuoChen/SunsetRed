import React, {Component} from "react";
import {Link} from 'react-router';

export default class HappinessPublish extends Component {
  onHappinessSubmit() {
    if (""){
      this.props.onAdd(this.refs.inputName.value, this.refs.inputText.value);

    }else {
      alert("请上传图片")
    }
  }

  render() {
    return <div className="happinessForm center-block">
      <input type="text" className="form-control" ref="inputName" placeholder="请输入昵称"/>
      <textarea type="text" className="form-control" rows="3" ref="inputText" placeholder="请输入您要说的话"/>
      <div >
        <input type="file" id="inputImgFile"/>
      </div>
      <Link to="/happiness">
        <button type="submit" className="btn btn-success" onClick={this.onHappinessSubmit.bind(this)}>提交</button>
        <button className="btn btn-warning">取消</button>
      </Link>
    </div>
  }
}
