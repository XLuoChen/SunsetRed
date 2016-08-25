import {connect} from "react-redux";
import DiaryContent from "../components/DiaryContent";

const mapDispatchToProps = (dispatch)=> {
  return {
    getDiaryContent: (index)=> {
      dispatch({type: "GETCONTENT", index});
    }
  };
};
const mapStateToProps = (state)=> {
  return {
    diaryContent: state.diaryContent.diaryContent
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DiaryContent);