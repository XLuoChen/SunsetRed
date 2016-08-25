import React, {Component} from 'react';
import FriendList from '../containers/FriendList'

export default class MakeFriends extends Component {
  componentDidMount() {
    this.props.onFindFriends();
  }

  search(condition) {
    this.props.onSearch(condition);
  }

  render() {
    return <div className="friendWhole">
      <Tabs search={this.search.bind(this)}/>
      <FriendList/>
    </div>
  }
}
class Tabs extends Component {
  search() {
    let searchCondition = {};
    if (this.refs.sex.value != '') {
      searchCondition.sex = this.refs.sex.value;
    }
    if (this.refs.age.value != '') {
      searchCondition.age = this.refs.age.value;
    }
    if (this.refs.city.value != '') {
      searchCondition.city = this.refs.city.value;
    }
    if (this.refs.hobby.value != '') {
      searchCondition.hobby = this.refs.hobby.value;
    }
    this.props.search(searchCondition);
  }

  render() {
    return <div className="search_box">
      <form>
        <label>性别：
          <select ref="sex">
            <option value="">不限</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </label>
        <label>年龄：
          <select ref="age">
            <option value="">不限</option>
            <option value="50-55">50-55</option>
            <option value="55-60">55-60</option>
            <option value="60-65">60-65</option>
            <option value="65-70">65-70</option>
          </select>
        </label>
        <label>城市
          <select ref="city">
            <option value="">请选择</option>
            <option value="北京">北京</option>
            <option value="西安">西安</option>
            <option value="河北">河北</option>
            <option value="山西">山西</option>
          </select>
        </label>
        <label>兴趣
          <select ref="hobby">
            <option value="">请选择</option>
            <option value="下棋">下棋</option>
            <option value="打太极">打太极</option>
            <option value="跳舞">跳舞</option>
            <option value="看报">看报</option>
          </select>
        </label>
        <label>
          <input type="button" value="立即搜索" className="searchFriend" onClick={this.search.bind(this)}/>
        </label>
      </form>
    </div>
  }
}