import React from 'react';
import './Messages.css';
import { Dialogs } from './dialogs/Dialogs.js';
import { Route } from 'react-router-dom';
import MessageContainer from './message/MessageContainer';
import { connect } from 'react-redux';
import { Messages } from './Messages';

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.messagesPage.dialogsData.map(el => <Dialogs name={el.name} avatar={el.avatar} id={el.id} key={el.id} />),
        messageElements: state.messagesPage.dialogsData.map((el) => {

            let a1 = '/messages/' + el.id;
            if (state.messagesPage.messagesData[el.id - 1]) {
                return <Route path={a1} render={() => <MessageContainer id={el.id} key={el.id} />} key={el.id} />

            }
        })
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        null: null
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer