import React from 'react';
import './Messages.css';

export class Messages extends React.Component {
    render() {

        return (
            <div className='messages-wrap'>
                <div className='dialogs_block'>
                    {this.props.dialogsElements}
                </div>

                <div className='messages_block'>
                    <div className='messages_elements'>
                        {this.props.messageElements}
                    </div>

                </div>
            </div>
        )
    }
}