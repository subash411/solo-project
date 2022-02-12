import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//worker saga
function* createMeme (action) {
    console.log('createMeme', action.payload);
    try{
        yield axios.post('api/meme', action.payload);

        yield put ({
            type: 'FETCH_MEME'
        })   
    } 
    catch (error) {
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
function* memeSaga() {
    yield takeLatest ('SET_MEME', createMeme);
    yield takeLatest ('FETCH_MEME', fetchMeme);
    yield takeLatest ('DELETE_MEME', deleteMeme);
}

function* deleteMeme (action) {
    console.log("memeId in delete saga", action.payload);
    const memeId = action.payload
    try{
        yield axios.delete(`/api/meme/${memeId}`);

        yield put ({
          type: 'FETCH_MEME'
        })
    } catch (error) {
        console.log('meme delete request failed', error);
    }
}; // end of deleteMeme

export default memeSaga;