import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import newsReducer from './news-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebarPage: sidebarReducer,
    newsPage: newsReducer
});

let store = createStore(reducers);


export default store