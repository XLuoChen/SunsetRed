import FriendList from '../components/FriendList';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
  return {
    friends: state.Friends.friends
  }
};

export default connect(mapStateToProps)(FriendList);