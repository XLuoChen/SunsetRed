import React, {Component} from "react";
import {Link} from 'react-router';
export default class MoodDiaries extends Component {
  componentDidMount() {
    this.props.getDaries();
  }

  render() {
    return <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <center>
          <Link to="/writeDiaryPage">
            <button className="btn btn-primary" style={{width: '500px', margin: '30px'}}>
              写心情日记&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </button>
          </Link>
        </center>
        <DiaryList moodDiaries={this.props.moodDiaries}/>
      </div>
    </div>
  }
}

class DiaryList extends Component {
  render() {
    const diary = this.props.moodDiaries.map((moodDiary, index)=> {
      return <Diary moodDiary={moodDiary} key={index}/>
    });
    return <div className="list-group">
      {diary}
    </div>
  }
}

class Diary extends Component {
  render() {
    return <a href="javascript:void(0)" className="list-group-item row">
      <div className="row">
        <div className="col-md-6">
          <h4 className="list-group-item-heading">昵称：{this.props.moodDiary.name}<br/><br/><Link
            to={`/moodDiaries/${this.props.moodDiary.userId}`}>日记主题：{this.props.moodDiary.title}</Link></h4>
        </div>
        <div className="col-md-4 col-md-offset-2">
          <p className="list-group-item-text"> 类型：{this.props.moodDiary.sort} <br/><br/>日期：****</p>
        </div>
      </div>
    </a>
  }
}