import React from 'react';
import './Message.css';

export class Message extends React.Component {
    render() {


        let editInputNewMessage = (e) => {
            this.props.editInputNewMessage(this.props.id, e)
        }

        let addMessage = () => {
            this.props.addMessage(this.props.id)
        }

        return (
            <React.Fragment>
                <div>
                    {this.props.text}
                </div>

                <div className='send_message_block'>
                    <textarea onChange={editInputNewMessage} placeholder='Type your message' value={this.props.input}></textarea>
                    <a onClick={addMessage} className='send'>Send</a>
                </div>
            </React.Fragment>
        )
    }
}

