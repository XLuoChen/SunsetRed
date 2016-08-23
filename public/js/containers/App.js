import React, {Component} from "react";
import NavigatorBar from '../components/NavigatorBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavigatorBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
