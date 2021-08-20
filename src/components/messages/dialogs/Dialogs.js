import React from 'react';
import './Dialogs.css';
import { NavLink } from 'react-router-dom';


export class Dialogs extends React.Component {
    render() {
        
        return (
            <div>
                <NavLink to ={'/messages/' + this.props.id}>
                    <div className = 'dialogs_name_block'>
                        <img className = 'dialog_avatar' src = {this.props.avatar} />
                        <h4>{this.props.name}</h4></div>
                </NavLink>
            </div>
        )
    }
}