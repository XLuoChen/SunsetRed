import React,{Component} from 'react';

export default class DiaryContent extends Component{
  componentDidMount() {
    const index=this.props.params.index;
    this.props.getDiaryContent(index);
  }
  render(){
    return <div>
      {this.props.diaryContent.name}
    </div>
  }
}