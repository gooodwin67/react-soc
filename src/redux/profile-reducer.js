

let initialState = {
    input: '',
    posts: [
        { id: 1, text: 'Lorem ipsum dolor sit amet', likes: 10, ilike: 0, likeClass: '' },
        { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likes: 0, ilike: 0, likeClass: '' },
        { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur.', likes: 5, ilike: 1, likeClass: 'like_button' }
    ]
}



const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let copyState = { ...state }
            copyState.posts = [...state.posts]
            let nextId = action.id
            copyState.posts.push({
                id: nextId,
                text: action.text,
                likes: 0,
                ilike: 0,
                likeClass: ''
            })
            copyState.input = '';
            return copyState;
        }
        case 'DEL-POST': {
            let copyState = { ...state }
            copyState.posts = [...state.posts]
            let elPos = copyState.posts.indexOf(copyState.posts.find(el => el.id === action.id))
            copyState.posts.splice(elPos, 1);
            return copyState;
        }
        case 'ADD-LIKE': {
            let copyState = { ...state }
            copyState.posts = [...state.posts]
            let elPos = copyState.posts.indexOf(copyState.posts.find(el => el.id === action.id))
            if (copyState.posts[elPos].ilike == 0) {
                copyState.posts[elPos].likes += 1;
                copyState.posts[elPos].ilike = 1;
                copyState.posts[elPos].likeClass = 'like_button';
            }
            else {
                copyState.posts[elPos].likes -= 1;
                copyState.posts[elPos].ilike = 0;
                copyState.posts[elPos].likeClass = '';
            }
            return copyState;
        }
        case 'CHANGE-POST': {
            let copyState = { ...state }
            copyState.input = action.text;
            return copyState;
        }
        default:
            return state
    }


}



export const addPostCreator = (text, id) => {
    return {
        type: 'ADD-POST',
        text: text,
        id: id
    }
}
export const delPostCreator = (id) => {
    return {
        type: 'DEL-POST',
        id: id
    }
}
export const addLikeCreator = (id) => {
    return {
        type: 'ADD-LIKE',
        id: id
    }
}
export const changePostCreator = (text) => {
    return {
        type: 'CHANGE-POST',
        text: text
    }
}


export default profileReducer;