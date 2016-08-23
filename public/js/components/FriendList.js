import React, {Component} from 'react';

export default class FriendList extends Component {
  render() {
    return <div>
      {this.props.value.map((ele, index)=> {
        return<div key={index}>
          {"姓名" + ele.name + "性别" + ele.sex + "兴趣" + ele.hobbies}
        </div>
      })}
    </div>
  }
}