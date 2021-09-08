
let initialState = {
    users: [],
    countOnPage: 50,
    totalCount: 200,
    currentPage: 1
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
                users: action.users,
                totalCount: action.totalCount
            }
        case 'SET-PAGINATION-PAGE':
            return {
                ...state,
                currentPage: action.page
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
export const SetUsersAC = (users, totalCount) => {
    return {
        type: 'SET-USERS',
        users: users,
        totalCount: totalCount
    }
}
export const SetPaginationPageAC = (page) => {
    return {
        type: 'SET-PAGINATION-PAGE',
        page: page
    }
}

export default usersReducer;