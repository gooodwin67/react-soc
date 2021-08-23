

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
            let nextId = action.id
            return {
                ...state,
                posts: [...state.posts, { id: nextId, text: action.text, likes: 0, ilike: 0, likeClass: '' }],
                input: ''
            }
        }
        case 'DEL-POST': {
            return {
                ...state,
                posts: (() => {
                    let posts = [...state.posts]
                    let elPos = posts.indexOf(posts.find(el => el.id === action.id))
                    posts.splice(elPos, 1);
                    return posts
                })()
            }


        }
        case 'ADD-LIKE': {
            return {
                ...state,
                posts: (() => {
                    let posts = [...state.posts]
                    let elPos = posts.indexOf(posts.find(el => el.id === action.id))
                    if (posts[elPos].ilike == 0) {
                        posts[elPos].likes += 1;
                        posts[elPos].ilike = 1;
                        posts[elPos].likeClass = 'like_button';
                    }
                    else {
                        posts[elPos].likes -= 1;
                        posts[elPos].ilike = 0;
                        posts[elPos].likeClass = '';
                    }
                    return posts;
                })()
            }
        }
        case 'CHANGE-POST': {
            return {
                ...state,
                input: action.text
            }

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