import React, {Component} from 'react';

export default class FriendList extends Component {
  render() {
    const friends = this.props.friends.map((ele, index)=> {
      return <div className="center-block">
      <div key={index} className="col-lg-3 col-lg-offet-3">
        <div className="thumbnail">
          <img src={`../../images/friends-pictures/${ele.imgName}`} alt="..."/>
          <div className="caption">
            <h3>{ele.name}</h3>
            <p>{ele.sex}&nbsp;{ele.city}&nbsp;{ele.hobby}</p>
            <p><a href="#" className="btn btn-primary" role="button">关注</a></p>
          </div>
        </div>
      </div>
        </div>
    });
    return <div className="raw">
      {friends}
    </div>
  }
}