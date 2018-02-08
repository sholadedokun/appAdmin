import {
UPLOAD_ALBUM,
FETCH_ALBUMS,
} from '../actions/actionTypes';

export default function(state = {error:'', album:[]}, action) {
  switch(action.type) {
    case UPLOAD_ALBUM:
      return { ...state, error: '', album: action.payload };
    case FETCH_ALBUMS:
        return { ...state, error: '', allAlbums: action.payload };
  }
  return state;
}
