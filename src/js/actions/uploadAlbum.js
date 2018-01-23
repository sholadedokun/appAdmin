import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  UPLOAD_ALBUM,
  ROOT_URL
} from './actionTypes';


export function uploadAlbum( album) {
  return function(dispatch) {
    return new Promise( (resolve)=>{
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/addAlbum`, album, {
            headers: {
                'Content-Type':  `multipart/form-data`
            }}).then(response => {
                // If request is good...
                // - Update state to with the localgovernment
                dispatch({ type: UPLOAD_ALBUM, payload:response.data });

                resolve(response)
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
            });
    })
  }
}
