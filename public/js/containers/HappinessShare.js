import {connect} from "react-redux";
import HappinessShare from '../components/HappinessShare';

const mapStateToProps = (state)=> {
  return {
    filterHappiness: state.showHappiness.filterHappiness
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    getFilterHappiness: () => {
      dispatch({type: 'SET_HAPPINESS'});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HappinessShare);