import React, {Component} from "react";
import {Link} from "react-router";
class Value extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onGet} className="btn btn-info">快点我吧</button>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Value;
