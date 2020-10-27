import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarNav.scss';


const SidebarNav = ({menuList}) => {
    

    return(
            <nav className="sidebar-nav">
                <ul className="sidebar-menu">
                    {
                        menuList.map( (item,index) =>{
                            return(<li key={index} className="sidebar-menu-item">
                                <Link to={item[1]} className="sidebar-menu-link">{item[0]}</Link>
                            </li> )  
                        })
                    }
                </ul>
            </nav>

)}

export default SidebarNav;