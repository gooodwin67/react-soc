
let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER-FOLLOW':

            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.id) {
                        return { ...el, following: true }
                    }
                    return el
                })
            }



        case 'USER-UNFOLLOW':
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.id) {
                        return { ...el, following: false }
                    }
                    return el
                })
            };
        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            }

        default:
            return state
    }
    return state
}

export const UserFollowAC = (id) => {
    return {
        type: 'USER-FOLLOW',
        id: id
    }
}
export const UserUnFollowAC = (id) => {
    return {
        type: 'USER-UNFOLLOW',
        id: id
    }
}
export const SetUsersAC = (users) => {
    return {
        type: 'SET-USERS',
        users: users
    }
}

export default usersReducer;