import React from 'react';
import './Messages.css';
import { Dialogs } from './dialogs/Dialogs.js';
import MessageItemContainer from './message/MessageItemContainer';
import { editInputMessageCreator, addMessageCreactor } from './../../redux/messages-reducer.js';
import { connect } from 'react-redux';
import { Messages } from './Messages';

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.messagesPage.dialogsData.map(el => <Dialogs name={el.name} avatar={el.avatar} id={el.id} key={el.id} />),
        messageElements: state.messagesPage.messagesData[0].messages.map((el) => <MessageItemContainer id={el.id} text={el.text} me={el.me} key={el.id} />)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        editInputNewMessage: (text) => {
            dispatch(editInputMessageCreator(text))
        },
        addMessage: (id, input) => {
            dispatch(addMessageCreactor(id, input))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer