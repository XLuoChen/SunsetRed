import React, {Component} from "react";
import {connect} from "react-redux";
import ArticleList from "../components/ArticleList";

const mapStateToProps = (state)=> {
  return {articles: state.traveller.articles};
};

export default connect(mapStateToProps)(ArticleList);

