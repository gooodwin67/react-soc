import React from 'react';
import './Music.css';

export class Music extends React.Component {
    render() {
        return (
            <div>
                Music<span>{this.props.state}</span>
            </div>
        )
    }
}