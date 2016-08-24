import React, {Component} from "react";

export default class MoodDiary extends Component {
  componentDidMount() {
    this.props.getDaries();
  }

  render() {
    return <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <center>
          <button className="btn btn-primary">写心情日记</button>
        </center>
        <DiaryList moodDiaries={this.props.moodDiaries}/>
      </div>
    </div>
  }
}

class DiaryList extends Component {
  render() {
    return <div className="list-group">
      {this.props.moodDiaries.map((moodDiary, index)=> {
        return <a href="#" className="list-group-item row" key={index}>
          <div className="col-md-6">
            <h4 className="list-group-item-heading">昵称：{moodDiary.name}<br/><br/>日记主题：{moodDiary.title}</h4>
          </div>
          <div className="col-md-4 col-md-offset-2">
            <p className="list-group-item-text"> 类型：{moodDiary.sort} <br/><br/>日期：****</p>
          </div>
        </a>
      })}
    </div>
  }
}