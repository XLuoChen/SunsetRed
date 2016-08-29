import {connect} from 'react-redux';
import TravellerArticlePublication from '../components/TravellerArticlePublication';

const mapDispatchToProps = (dispatch) => {
  return {
    publish: (title, content) => {
      dispatch({type: "PUBLISH_ARTICLE", title, content});
    }
  };
};

export default connect(()=> {
  return {}
}, mapDispatchToProps)(TravellerArticlePublication);
