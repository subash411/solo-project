const memeReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_MEME':
            return action.payload;
            default: 
            return state;
    }
}

export default memeReducer;