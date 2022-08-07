const myReducer = (state = {
    hasImg: false
}, action) => {
    switch (action.type) {
        case 'ADD_DOG_URL':
            return { ...state, hasImg: true, ...action.payLoad }
        case 'DOG_URL_FAILED':
            return { ...state, hasImg: false, ...action.payLoad  }
        default:
            return state
    }
}

export default myReducer
