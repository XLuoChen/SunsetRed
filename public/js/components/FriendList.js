import React from 'react';

export default class FriendList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      followed: []
    }
  }

  followFriends(id){
    if (!this.state.followed.some(ele => ele === id)){
      this.setState({
        followed:[...this.state.followed,id]
      },() => {
        this.props.onFollowFriends(id);
      });
    } else {
      this.setState({
        followed:[...this.state.followed.filter(ele => ele != id)]
      },() =>{
        this.props.cancelFollow(id);
      });
    }
  }
  render() {
    // const friends = this.props.friends.map((ele, index)=> {
    //   return <div key={index} className="center-block">
    //     {/*<div className="col-lg-3 col-lg-offet-3">*/}
    //       {/*<div className="thumbnail">*/}
    //         {/*<img src={`../../images/friends-pictures/${ele.imgName}`} alt="..."/>*/}
    //         {/*<div className="caption">*/}
    //           {/*<h3>{ele.name}</h3>*/}
    //           {/*<p>{ele.sex}&nbsp;{ele.city}&nbsp;{ele.hobby}</p>*/}
    //           {/*<p className="btn btn-primary" role="button" onClick={this.props.onFollowFriends.bind(this,ele.id)}>关注</p>*/}
    //         {/*</div>*/}
    //       {/*</div>*/}
    //     {/*// </div>*/}
    //   </div>;
    const friends = this.props.friends.map((item,index) => {
      return <div id="show-friends" className="inline" key={index}>
        <img src="../../images/friends-pictures/f.jpg" alt="friends" className="photo"/>
        <p>
          <span className="username">{item.name}</span>
          <span className="sex">{item.sex}</span>
          <span className="city">{item.city}</span>
        </p>
        <button className="btn btn-default" onClick={this.followFriends.bind(this,item.id)}>
          {this.state.followed.some(ele => ele === (item.id)) ? 'x 取消关注' : '+ 关注'}
        </button>
      </div>;
    });
    return <div className="raw">
      {this.props.promptMessage}{friends}
    </div>;
  }
}
