import React from "react";
import preloader from './../../../images/loader.svg';
import './Preloader.css';

let Preloader = (props) => {
    return (
        <div className='preloader'>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;