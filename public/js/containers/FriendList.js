import FriendList from '../components/FriendList';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
  return {
    friends: state.Friends.friends,
    promptMessage: state.Friends.promptMessage
  }
};

export default connect(mapStateToProps)(FriendList);