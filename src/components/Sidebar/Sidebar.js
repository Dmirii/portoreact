import React from 'react';
import './Sidebar.scss';

import User from '../User/User.js';
import Card from '../Card/Card.js';
import Radio from '../Radio/Radio.js';
import Money from '../Money/Money.js';
import SidebarNav from '../SidebarNav/SidebarNav.js';

const Sidebar = ({mainDB}) => {

    return(
        <aside className="sidebar">
            <User/>
            <SidebarNav menuList={mainDB.menuList}   />
            <a target="_blanck" href="./newPost.html" className="button button-new-post">
                <svg className="icon icon-fire">
                <use xlinkHref="portoreact/img/icons.svg#Fier"> </use>
                </svg>
                    Обратная связь    </a>
            <Money/>
            <Radio/>
            <Card/>
            <div className="promo">
            </div>
        </aside>
)};

export default Sidebar;