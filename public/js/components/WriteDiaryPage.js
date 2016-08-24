import React, {Component} from "react";
export default class WriteDiaryPage extends Component {
  render() {
    return <div className="col-md-6 col-md-offset-3">

      <form className="form-horizontal">
        <div className="form-group">
          <label for="diaryTitle" className="col-sm-2 control-label">日记主题：</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="diaryTitle" placeholder="日记主题"/>
          </div>
        </div>
        <div className="form-group">
          <label for="diaryName" className="col-sm-2 control-label">昵称：</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="diaryName" placeholder="昵称"/>
          </div>
        </div>
        <div className="form-group">
          <label for="diaryContent" className="col-sm-2 control-label">日记内容:</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows="13" id="diaryContent"></textarea>
          </div>
        </div>
        <div className="form-group">
          <label for="diaryType" className="col-sm-2 control-label">类型：</label>
          <div className="col-sm-10">
            <select className="form-control" id="diaryType">
              <option>个人日记</option>
              <option>音画欣赏</option>
              <option>生活日记</option>
              <option>游戏人生</option>
              <option>情感求助</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-6">
            <button type="submit" className="btn btn-primary" style={{width:'450px'}}>submit</button>
          </div>
        </div>
      </form>
    </div>
  }
}