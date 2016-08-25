import React, {Component} from "react";

export default class HappinessShare extends Component {
  componentDidMount() {
    this.props.getFilterHappiness();
  }

  setFilterHappiness() {
    this.props.getFilterHappiness();
  }

  render() {
    return <div className="center-block">
      <div className="happinessShare">
        <button className="btn btn-primary center-block">
          我要晒幸福
        </button>
        <div className="happinessList">
          <HappinessList filterHappiness={this.props.filterHappiness}/>
        </div>
        <div>
          <button className="btn btn-primary center-block" onClick={this.setFilterHappiness.bind(this)}>
            换一批
          </button>
        </div>
      </div>
    </div>
  }
}

class HappinessList extends Component {
  render() {

    const happinessList = this.props.filterHappiness.map((item, index) => {
      return <div key={index}>
        <PersonShow happinessItem={item}/>
      </div>
    });
    return <div>
      {happinessList}
    </div>
  }
}

class PersonShow extends Component {
  render() {
    return <div className="happiness">
      <img src={this.props.happinessItem.image}
           alt={this.props.happinessItem.name}/>
      <div className="happinessTag">{this.props.happinessItem.name}</div>
      <div className="personShow">
        {this.props.happinessItem.text}
      </div>
    </div>
  }
}