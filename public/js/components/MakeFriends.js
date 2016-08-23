import React, {Component} from 'react';
import FriendList from '../containers/FriendList'
import {store} from '../main';

export default class MakeFriends extends Component{
  componentDidMount(){
    store.dispatch({type:'SET_FRIENDS'})
  }
  render(){
    return <div>
      <Tabs />
      <FriendList/>
    </div>
  }
}
 class Tabs extends Component{
  render(){
    return <div>
      <span className="findFriendConditon" >根据帐号查找</span>
      <span className="findFriendConditon" >根据条件查找</span>
    </div>
  }
}