import React, {Component} from "react";

export default class DiaryContent extends Component {
  componentDidMount() {
    const index = this.props.params.index;
    this.props.getDiaryContent(index);
  }

  render() {
    return <div className="col-md-6 col-md-offset-3">
      <div className="panel panel-primary ">
        <div className="panel-heading">
         <center> <h1 className="panel-title ">日记主题：{this.props.diaryContent.title}&nbsp;&nbsp;&nbsp;&nbsp;<small>昵称：{this.props.diaryContent.name}</small></h1></center>
        </div>
        日记内容:
        <textarea className="panel-body" style={{'minHeight':'450px' ,minWidth:'100%'}} value={this.props.diaryContent.content}/>
        <div className="panel-footer text-right">类型：{this.props.diaryContent.sort}&nbsp;&nbsp;&nbsp;</div>
      </div>
    </div>;
  }
}