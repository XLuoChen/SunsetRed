import React, {Component, Proptypes} from "react";
import {connect} from "react-redux";
import MoodDiaries from "../components/MoodDiaries";

const mapStateToProps = (state)=> {
  return {moodDiaries: state.moodDiaries.moodDiaries}
};
const mapDispatchToProps = (dispatch)=> {
  return {
    getDaries: ()=> {
      dispatch({type: 'SET_DIARIES'});
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MoodDiaries)