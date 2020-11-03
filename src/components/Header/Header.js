import React from 'react';
import { Link } from 'react-router-dom';


import './Header.scss';


const Header = (props) => {

    const burgerActive = event =>{
        console.log('activ')
        event.preventDefault();
        let sideBarMenu = document.querySelector('.sidebar');
        sideBarMenu.classList.toggle('burger-active');
    };
    // const burgeroff = event=>{
    //     console.log('off')
    //     event.preventDefault();
    //     let sideBarMenu = document.querySelector('.sidebar');
    //     sideBarMenu.classList.remove('burger-active');
    // }
    
    return(
    <header className="header">
        <div className="header-wrapper">
            <a href="./index.html" className="header-logo "> 
                Dima A
            </a>
            <nav className="header-nav">
                <ul className="header-menu">
                    <li   className= "header-menu-item"><Link  to="/" className="header-menu-link">Обо мне</Link></li>
                    <li className="header-menu-item"><Link  to="/porto" className="header-menu-link">Портфолио</Link></li>
                    <li className="header-menu-item"><Link to="/contact" className="header-menu-link">Контакты</Link></li>
                    <li className="header-menu-item"><Link to="/feedback" className="header-menu-link">Обратная связь</Link></li>
                </ul> 
            </nav>         
            <div className="input-group search">
                <input type="search" className="search-input" placeholder="Поиск по сайту"/>
                <button className="search-button">  
                    <img src="/portoreact/img/search.svg" alt="icon:search"/>
                </button>
            </div>           
            <a href="/" onClick={burgerActive} data-menu-toggle className="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>        
    </header>
)}

export default Header;