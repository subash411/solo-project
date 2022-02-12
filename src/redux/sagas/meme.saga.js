import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//worker saga
function* createMeme (action) {
    //const id = action.payload.id
    try{
        yield axios.post('api/meme', action.payload);
        
    } catch (error) {
        console.log('meme like request failed', error)
    }
} //end

function* fetchMeme() {
    try{
        
        const response = yield axios.get('/api/meme');
        yield put ({
            type: 'SET_MEME',
            payload: response.data
        })
    } catch (error) {
        console.log('meme get request failed', error);
    }
}
function* mediaSaga() {
    yield takeLatest ('SET_MEME', createMeme);
    yield takeLatest ('FETCH_MEME', fetchMeme);
    yield takeLatest ('DELETE_MEME', deleteMeme);
   // yield takeLatest ('LIKE_MEDIA', moreLikes);
}

function* deleteMeme (action) {
    const id = action.payload.id
    try{
        yield axios.delete(`/api/meme/${id}`);
        yield put ({
          type: 'FETCH_MEME'
        })
    } catch (error) {
        console.log('meme delete request failed', error);
    }

    

}

export default mediaSaga;