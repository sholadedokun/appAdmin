import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  UPLOAD_ALBUM,
  ROOT_URL
} from './actionTypes';


export function uploadAlbum( album, title, description) {
  return function(dispatch) {
    return new Promise( (resolve)=>{
        // lets first upload the image to the server...
        axios.post(`${ROOT_URL}/upload`, album, {
            headers: {
                'Content-Type':  `multipart/form-data`
            }}).then(response => {
                let allPic=response.data.map((item)=>item.filename)
                let uploadAlbum={imagesUrl:`${allPic.toString()}`, title, description, website:'specdios'}
                axios.post(`${ROOT_URL}/appActions/uploadAlbum`, uploadAlbum)
                    .then(response => {
                        dispatch({ type: UPLOAD_ALBUM,
                            payload: response.data
                         });
                        //  resolve(response)
                    })
                    resolve(response)
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
            });
    })
  }
}
