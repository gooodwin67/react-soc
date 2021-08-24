
let initialState = {
    users: [
        { id: 1, following: true, avatarurl: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png', name: 'Andrey', status: 'Comon Chels', location: { country: 'Russia', city: 'Smolensk' } },
        { id: 2, following: false, avatarurl: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png', name: 'Pahsa', status: 'Comon Chels2', location: { country: 'Ukraine', city: 'Kiyev' } },
        { id: 3, following: true, avatarurl: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png', name: 'Nikolay', status: 'Comon Chels3', location: { country: 'Belarus', city: 'Smolensk' } },
        { id: 4, following: true, avatarurl: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png', name: 'Sergey', status: 'Comon Chels4', location: { country: 'Russia', city: 'Smolensk' } },
        { id: 5, following: false, avatarurl: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png', name: 'Marina', status: 'Comon Chels5', location: { country: 'Russia', city: 'Smolensk' } },
        { id: 6, following: true, avatarurl: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png', name: 'Oleg', status: 'Comon Chels6', location: { country: 'Russia', city: 'Smolensk' } }
    ]
};

const usersReducer = (state = initialState, action) => {
    let copyState;
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


export default usersReducer;