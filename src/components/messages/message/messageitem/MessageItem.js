import React from 'react';
import './MessageItem.css';

export class MessageItem extends React.Component {
    render() {
        return (

            <React.Fragment>


                {this.props.state.me ?
                    (<div className='message_item message_item_me'>{this.props.state.text}</div>)
                    :
                    (<div className='message_item message_item_notme'>{this.props.state.text}</div>)
                }

            </React.Fragment>


        )
    }
}