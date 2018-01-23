import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';
import startAdmission from './uploadAlbum';

const rootReducer = combineReducers({
  // form,
  admission:startAdmission,
});
export default rootReducer;
