import React from 'react';
import './MessageItem.css';
import { MessageItem } from './MessageItem';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

    return {
        null: null
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        null: null
    }
}


const MessageItemContainer = connect(mapStateToProps, mapDispatchToProps)(MessageItem);

export default MessageItemContainer