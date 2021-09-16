import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer'
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebarPage: sidebarReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);


export default store