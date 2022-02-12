import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//worker saga
function* createMedia (action) {
    console.log('createMedia', action.payload);
    try{
        yield axios.post('api/media', action.payload);

        yield put ({
            type: 'FETCH_MEDIA'
        })   
    } 
    catch (error) {
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
}

function* deleteMedia (action) {
    console.log("mediaId in delete saga", action.payload);
    const mediaId = action.payload
    try{
        yield axios.delete(`/api/media/${mediaId}`);

        yield put ({
          type: 'FETCH_MEDIA'
        })
    } catch (error) {
        console.log('media delete request failed', error);
    }
}; // end of deleteMedia

export default mediaSaga;