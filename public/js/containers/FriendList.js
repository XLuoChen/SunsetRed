import FriendList from '../components/FriendList';
import {connect} from 'react-redux';

const mapStateToProps =(state)=>{
  return{
    value:state.value
  }
}

export default connect(mapStateToProps)(FriendList);