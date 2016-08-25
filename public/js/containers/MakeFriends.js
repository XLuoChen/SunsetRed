import MakeFriends from '../components/MakeFriends';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=> {
  return {
    onFindFriends: ()=> {
      dispatch({type: 'GET_FRIENDS'});
    },
    onSearch: (conditon)=> {
      dispatch({type: "SEARCH", condition: conditon});
    }
  }
};

export default connect(()=> {return {}}, mapDispatchToProps)(MakeFriends);