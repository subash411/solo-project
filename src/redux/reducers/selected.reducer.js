const selectedReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_SELECTED':
            return action.payload;
            default: 
            return state;
    }
}

export default selectedReducer;