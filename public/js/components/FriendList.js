import React, {Component} from 'react';

export default class FriendList extends Component {
  render() {
    return <div>
      {this.props.value.map((ele, index)=> {
        return <div key={index} className="box">
          <a>
            <img className="friendImg" src={"../../images/" + ele.imgName}/>
            <span className="www-A1">{ele.name + " " + ele.sex + " " + ele.hobbies}</span></a>
        </div>
      })}
    </div>
  }
}