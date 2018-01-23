import {
UPLOAD_ALBUM
} from '../actions/actionTypes';

export default function(state = {error:'', album:[]}, action) {
  switch(action.type) {
    case UPLOAD_ALBUM:
      return { ...state, error: '', album: action.payload };
  }
  return state;
}
