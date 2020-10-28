import React from 'react';
import './User.scss';


const User = ({mainDB}) => {
    

    return(
        
            <div className="user">
                <a href ="https://dmirii.github.io/myPort/" className="user-info">
                    <img src="/portoreact/img/DimaA.jpg" alt="user" className="user-avatar"/>
                    <span className="user-name">Dimaaru</span>
                    
                </a>
                <a href="/" className="exit">
                    <svg className="icon icon-exit">
                    <use xlinkHref="/portoreact/img/icons.svg#poweroff"> </use>
                    </svg>
                </a>
            </div>
)}

export default User;