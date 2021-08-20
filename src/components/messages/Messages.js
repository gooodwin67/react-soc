import React from 'react';
import './Messages.css';

export class Messages extends React.Component {
    render() {
        
        let editInputNewMessage = (el) => {
            this.props.editInputNewMessage(el.target.value)
        }

        let addMessage = () => {
            this.props.addMessage(this.props.id, this.props.input)
        }

        return (
            <div className='messages-wrap'>
                <div className='dialogs_block'>
                    {this.props.dialogsElements}
                </div>

                <div className='messages_block'>

                    {this.props.messageElements}

                    <div className='send_message_block'>
                        <textarea onChange={editInputNewMessage} placeholder='Type your message' value={this.props.input}></textarea>
                        <a onClick={addMessage} className='send'>Send</a>
                    </div>


                </div>
                
            </div>
        )
    }
}