import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer';

let store = {
    renderEntireTree() {
        console.log('state changed');
    },
    state: {
        sidebarPage: {
            friendsPage: {
                friends: [
                    {id:1, name: 'Andrey', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                    {id:2, name: 'Pasha', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                    {id:3, name: 'Nikolay', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                    {id:4, name: 'Sergey', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                    {id:5, name: 'Marina', avatar: 'https://img2.freepng.ru/20180718/hvr/kisspng-customer-service-avatar-computer-icons-clip-art-graphic-people-5b4ff12a305f78.9820452915319657381982.jpg'},
                    {id:6, name: 'Oleg', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                    {id:7, name: 'Natasha', avatar: 'https://img2.freepng.ru/20180718/hvr/kisspng-customer-service-avatar-computer-icons-clip-art-graphic-people-5b4ff12a305f78.9820452915319657381982.jpg'}
                ]
            }
        },
        profilePage: {
            input: '',
            posts: [
                {id:1, text: 'Lorem ipsum dolor sit amet', likes: 10, ilike: 0},
                {id:2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likes: 0, ilike: 0},
                {id:3, text: 'Lorem ipsum dolor sit amet, consectetur.', likes: 5, ilike: 0}
            ]
        },
        messagesPage: {
            input: '',
            dialogsData: [
                {id:1, name: 'Andrey', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                {id:2, name: 'Pasha', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                {id:3, name: 'Nikolay', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                {id:4, name: 'Sergey', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'},
                {id:5, name: 'Marina', avatar: 'https://img2.freepng.ru/20180718/hvr/kisspng-customer-service-avatar-computer-icons-clip-art-graphic-people-5b4ff12a305f78.9820452915319657381982.jpg'},
                {id:6, name: 'Oleg', avatar: 'https://www.pinclipart.com/picdir/middle/78-789013_digital-product-designer-avatar-clipart.png'}
            ],
            messagesData:[
                
                {   
                    dialogId: 1,
                    input: '',
                    messages:
                    [
                        {id:1, text: 'Hello', me: 1},
                        {id:2, text: 'How are you', me: 0},
                        {id:3, text: 'Norm', me: 1}
                    ]
                },
                {   
                    dialogId: 2,
                    input: '',
                    messages:
                    [
                        {id:1, text: 'Hello2', me: 1},
                        {id:2, text: 'How are you2', me: 0},
                        {id:3, text: 'Norm2', me: 1},
                        {id:4, text: 'ok2', me: 0}
                    ]
                },
                {   
                    dialogId: 3,
                    input: '',
                    messages:
                    [
                        {id:1, text: 'Hello3', me: 1},
                        {id:2, text: 'How are you3', me: 0},
                        {id:3, text: 'Norm3', me: 1}
                    ]
                },
                {   
                    dialogId: 4,
                    input: '',
                    messages:
                    [
                        {id:1, text: 'Hello4', me: 1},
                        {id:2, text: 'How are you3', me: 0},
                        {id:3, text: 'Norm3', me: 1}
                    ]
                },
                {   
                    dialogId: 5,
                    input: '',
                    messages:
                    [
                        
                    ]
                },
                {   
                    dialogId: 6,
                    input: '',
                    messages:
                    [
                        
                    ]
                }
                
            ]
        }
    },
    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    dispatch(action) {

        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.messagesPage = messagesReducer(this.state.messagesPage, action)

        this.renderEntireTree(this.state);
    }
}


export default store;