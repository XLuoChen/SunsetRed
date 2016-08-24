import React, {Component} from 'react';
import FriendList from '../containers/FriendList'
import {store} from '../main';

export default class MakeFriends extends Component {
  componentDidMount() {
    store.dispatch({type: 'SET_FRIENDS'});
  }

   onSearch(condition){
     store.dispatch({type:"SEARCH", condition});
  }

  render() {
    return <div className="friendWhole">
      <Tabs onSearch={this.onSearch.bind(this)}/>
      <FriendList/>
    </div>
  }
}
class Tabs extends Component {
  search(){
    const searchCondition = {
      sex:this.refs.sex.value,
      age:this.refs.age.value
    };
    this.props.onSearch(searchCondition);
  }
  render() {
    return <div className="search_box">
      <form>
        <label>性别：
          <select ref="sex">
            <option selected>不限</option>
            <option >男</option>
            <option >女</option>
          </select>
        </label>
        <label>年龄：
          <select ref="age">
            <option selected>不限</option>
            <option>50-55</option>
            <option>55-60</option>
            <option>60-65</option>
            <option>65-70</option>
          </select>
        </label>
        <label>城市
          <select id="province">
            <option selected>请选择</option>
            <option>北京</option>
            <option>天津</option>
            <option>河北</option>
            <option>山西</option>
          </select>
        </label>
        <label>
          <input type="button" value="立即搜索" className="searchFriend" onClick={this.search.bind(this)}/>
        </label>
      </form>
    </div>
  }
}