import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//worker saga

function* fetchGallery() {
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        const response = yield axios.get('/api/gallery', config);
        yield put ({
            type: 'SET_GALLERY',
            payload: response.data
        })
    } catch (error) {
        console.log('gallery get request failed', error);
    }
}
function* gallerySaga() {
    yield takeLatest ('FETCH_GALLERY', fetchGallery)
}

export default gallerySaga;