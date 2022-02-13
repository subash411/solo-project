const videoReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_VIDEO':
            return action.payload;
            default: 
            return state;
    }
}

export default videoReducer;