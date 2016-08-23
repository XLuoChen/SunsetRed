import React,{Component} from 'react';
import Airticle from './AirticleList';
import Menu from './Menu';

export default class Traveller extends Component {
  render() {
    return <div>
      Traveller
      <Menu/>
      <Airticle/>
    </div>
  }
}