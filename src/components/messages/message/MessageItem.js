import React from 'react';
import './MessageItem.css';

export class MessageItem extends React.Component {
    render() {
        //console.log(this.props.me)
        return (

            <React.Fragment>
                {this.props.me ?
                    (<div className='message_item message_item_me'>{this.props.text}</div>)
                    :
                    (<div className='message_item message_item_notme'>{this.props.text}</div>)
                }
                

            </React.Fragment>


        )
    }
}
