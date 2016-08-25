import {connect} from "react-redux";
import DiaryContent from "../components/DiaryContent";

const mapDispatchToProps = (dispatch)=> {
  return {
    getDiaryContent: (userId)=> {
      dispatch({type: "GET_CONTENT", userId})
    }
  }
};
const mapStateToProps = (state)=> {
  return {
    diaryContent: state.moodDiaries.diaryContent
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DiaryContent)