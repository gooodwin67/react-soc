import React from 'react';
import './Message.css';
import { MessageItem } from './messageitem/MessageItem';
import { Message } from './Message';
import { addMessageCreactor, changeMessageCreator } from '../../../redux/messages-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    console.log(state)
    return {
        input: state.input,
        text: state.messagesPage.messagesData[state.id - 1].messages.map(el => <MessageItem id={state.id} key={el.id} />)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        editInputNewMessage: (id, text) => {
            dispatch(changeMessageCreator(id - 1, text))
        },
        addMessage: (id) => {
            dispatch(addMessageCreactor(id - 1))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;
