import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//worker saga
function* fetchMedia() {
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        const response = yield axios.get('/api/media', config);
        yield put ({
            type: 'SET_MEDIA',
            payload: response.data
        })
    } catch (error) {
        console.log('media get request failed', error);
    }
}
function* mediaSaga() {
    yield takeLatest ('FETCH_MEDIA', fetchMedia);
    yield takeLatest ('DELETE_MEDIA', deleteMedia);
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