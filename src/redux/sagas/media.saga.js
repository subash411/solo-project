import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//worker saga
function* createMedia (action) {
    //const id = action.payload.id
    try{
        yield axios.post('api/media', action.payload);
        
    } catch (error) {
        console.log('media like request failed', error)
    }
} //end

function* fetchMedia() {
    try{
        
        const response = yield axios.get('/api/media');
        yield put ({
            type: 'SET_MEDIA',
            payload: response.data
        })
    } catch (error) {
        console.log('media get request failed', error);
    }
}
function* mediaSaga() {
    yield takeLatest ('SET_MEDIA', createMedia);
    yield takeLatest ('FETCH_MEDIA', fetchMedia);
    yield takeLatest ('DELETE_MEDIA', deleteMedia);
   // yield takeLatest ('LIKE_MEDIA', moreLikes);
}

function* deleteMedia (action) {
    const id = action.payload.id
    try{
        yield axios.delete(`/api/media/${id}`);
        yield put ({
          type: 'FETCH_MEDIA'
        })
    } catch (error) {
        console.log('media delete request failed', error);
    }

    

}

export default mediaSaga;