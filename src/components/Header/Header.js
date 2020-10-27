import React from 'react';


import './Header.scss';


const Header = (props) => (
    <header className="header">
        <div className="header-wrapper">
            <a href="./index.html" className="header-logo "> 
                Dima A
            </a>
            <nav className="header-nav">
                <ul className="header-menu">
                    <li className= "header-menu-item"><a href="/" className="header-menu-link">Обо мне</a></li>
                    <li className="header-menu-item"><a href="/porto" className="header-menu-link">Портфолио</a></li>
                    <li className="header-menu-item"><a href="/contact" className="header-menu-link">Контакты</a></li>
                    <li className="header-menu-item"><a href="/" className="header-menu-link">Обратная связь</a></li>
                </ul>  
            </nav>         
            <div className="input-group search">
                <input type="search" className="search-input" placeholder="Поиск по сайту"/>
                <button className="search-button">  
                    <img src="/img/search.svg" alt="icon:search"/>
                </button>
            </div>           
            <a href="/" data-menu-toggle className="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>        
    </header>
)

export default Header;