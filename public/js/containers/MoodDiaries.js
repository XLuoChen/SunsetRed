import React, {Component, Proptypes} from 'react';
import {connect} from 'react-redux';
import MoodDiaries from '../components/MoodDiaries';
const mapStateToProps = (state)=> {
  return {moodDiaries: state.moodDiaries}
};
const mapDispanchToProps = (dispanch)=>{
  return {
    getDaries:()=>{
      return dispanch({type:'SET_DIARIES'})
    }
  }
};
export default  connect(mapStateToProps,mapDispanchToProps)(MoodDiaries)