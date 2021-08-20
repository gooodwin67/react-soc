import React from 'react';
import './Message.css';
import MessageItemContainer from './messageitem/MessageItemContainer';
import { Message } from './Message';
import { addMessageCreactor, changeMessageCreator } from '../../../redux/messages-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        input: state.input,
        text: state.messagesPage.messagesData[0].messages.map(el => <MessageItemContainer id={el.id} key={el.id} me={el.me} text={el.text} />)
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
