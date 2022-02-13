import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//worker saga
function* createVideo (action) {
    console.log('createVideo', action.payload);
    try{
        yield axios.post('api/video', action.payload);

        yield put ({
            type: 'FETCH_VIDEO'
        })   
    } 
    catch (error) {
        console.log('video like request failed', error)
    }
} //end

function* fetchVideo() {
    try{
        
        const response = yield axios.get('/api/video');
        console.log('fetchVideo response', response.data);
        
        yield put ({
            type: 'SET_VIDEO',
            payload: response.data
        })
    } catch (error) {
        console.log('video get request failed', error);
    }
}
function* videoSaga() {
    yield takeLatest ('SET_VIDEO', createVideo);
    yield takeLatest ('FETCH_VIDEO', fetchVideo);
    yield takeLatest ('DELETE_VIDEO', deleteVideo);
}

function* deleteVideo (action) {
    console.log("videoId in delete saga", action.payload);
    const videoId = action.payload
    try{
        yield axios.delete(`/api/video/${videoId}`);

        yield put ({
          type: 'FETCH_VIDEO'
        })
    } catch (error) {
        console.log('video delete request failed', error);
    }
}; // end of deleteVideo

export default videoSaga;