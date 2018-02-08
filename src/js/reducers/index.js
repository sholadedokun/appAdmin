import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';
import album from './albumReducer';

const rootReducer = combineReducers({
  album,
});
export default rootReducer;
