import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  UPLOAD_ALBUM,
  UPLOAD_ALBUM_ERROR,
  ROOT_URL,
  FETCH_ALBUMS,
  FETCH_ALBUMS_ERROR,
} from './actionTypes';


export function uploadPhotos( album, state) {
  return function(dispatch) {
    return new Promise( (resolve)=>{
        // lets first upload the image to the server...
        axios.post(`${ROOT_URL}/upload`, album, {
            headers: {
                'Content-Type':  `multipart/form-data`
            }}).then(response => {
                let allPic=response.data.map((item)=>item.filename)

                resolve(allPic)
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
            });
    })
  }
}
export function uploadAlbum(uploadAlbum, id, METHOD) {
    return function(dispatch) {
        return new Promise( (resolve, reject)=>{
            axios[METHOD](`${ROOT_URL}/appActions/album${id}`, uploadAlbum)
                .then(response => {
                    dispatch({ type: UPLOAD_ALBUM,
                        payload: response.data
                     });
                     resolve(response)
                })
                .catch((error) => {
                    dispatch({type: UPLOAD_ALBUM_ERROR,
                        payload:'Error fetching images, Please Check your internet and try again.'
                    });
                    reject(error)
                });
        })
  }
}

export function fetchAlbum() {
    return function(dispatch) {
        return new Promise( (resolve, reject)=>{
            axios.get(`${ROOT_URL}/appActions/fetchImages` )
                .then(response => {
                    dispatch({ type: FETCH_ALBUMS,
                        payload: response.data
                    });
                    resolve()
                })
                .catch((error) => {
                    dispatch({type: FETCH_ALBUMS_ERROR,
                        payload:'Error fetching images, Please Check your internet and try again.'
                    });
                    reject(error)
                });
        })
  }
}
