import React, {Component} from "react";
import {connect} from "react-redux";
import HappinessPublish from '../components/HappinessPublish';

const mapDispatchToProps = (dispatch)=> {
  return {
    onAdd: (name, text)=> {
      dispatch({type: 'ADD_HAPPINESS', name, text});
    }
  }
};

export default connect(()=>{return {}},mapDispatchToProps)(HappinessPublish);
