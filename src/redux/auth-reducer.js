let initialState = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: 1
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-AUTH':
            return {
                ...state,
                data: action.data.data,
                isAuth: action.data.resultCode
            }
        default:
            return state
    }
}

export const setAuth = (data) => {
    return {
        type: 'SET-AUTH',
        data
    }
}

export default authReducer;