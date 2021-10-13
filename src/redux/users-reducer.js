
let initialState = {
    users: [],
    countOnPage: 50,
    totalCount: 200,
    currentPage: 1,
    isProgress: false,
    followIsProgress: 0,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER-FOLLOW':

            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.id) {
                        return { ...el, followed: true }
                    }
                    return el
                })
            }



        case 'USER-UNFOLLOW':
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.id) {
                        return { ...el, followed: false }
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
        case 'SET-IS-PROGRESS':
            return {
                ...state,
                isProgress: action.isProgress
            }
        case 'SET-FOLLOW-IS-PROGRESS':



            return {
                ...state,
                followingInProgress: action.isProgress
                    ? [...state.followingInProgress, action.id]
                    : [...state.followingInProgress.filter(id => id != action.id)]
            }




        default:
            return state
    }
    return state
}

export const userFollow = (id) => {
    return {
        type: 'USER-FOLLOW',
        id: id
    }
}
export const userUnFollow = (id) => {
    return {
        type: 'USER-UNFOLLOW',
        id: id
    }
}
export const setUsers = (users, totalCount) => {
    return {
        type: 'SET-USERS',
        users: users,
        totalCount: totalCount
    }
}
export const setPaginationPage = (page) => {
    return {
        type: 'SET-PAGINATION-PAGE',
        page: page
    }
}
export const setIsProgress = (isProgress) => {
    return {
        type: 'SET-IS-PROGRESS',
        isProgress
    }
}
export const setFollowIsProgress = (isProgress, id) => {
    return {
        type: 'SET-FOLLOW-IS-PROGRESS',
        isProgress,
        id
    }
}

export default usersReducer;