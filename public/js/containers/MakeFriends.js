import MakeFriends from '../components/MakeFriends';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=> {
  return {
    onSearch: (conditon)=> {
      dispatch({type: "SEARCH", condition: conditon});
    }
  }
};

export default connect()(MakeFriends);