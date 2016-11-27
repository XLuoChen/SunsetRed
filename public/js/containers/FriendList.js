import FriendList from '../components/FriendList';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
  return {
    friends: state.Friends.friends,
    promptMessage: state.Friends.promptMessage
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    onFollowFriends: (id)=> {
      dispatch({type: "FOLLOW_FRIENDS",id});
    },
    cancelFollow: (id) => {
      dispatch({type:'CANCEL_FOLLOW',id});
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(FriendList);
