import React from 'react';
import './Contact.scss';


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.contactInfo= props.contactInfo;
    }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://yastatic.net/share2/share.js";
        script.async = true;
        document.body.appendChild(script);
    }


    render(){
        let sideBarMenu = document.querySelector('.sidebar');
        if(sideBarMenu){
            sideBarMenu.classList.remove('burger-active');
        }
    return(
            <div className="post contact">
                <div className="post-body">                
                <h2 className="post-title">Со мной связатся просто:</h2>    
                    <div className="post-wrapper">
                        <div className="contact-list">
                        <div className="contact-items">
                    <div className="contact-item"><i className="material-icons">settings_cell</i>
                        <div className="contact__descr ">телефон:</div><a href="tel:89117335515">+7 911-733-5515</a>
                    </div>
                    <div className="contact-item"><i className="material-icons">connect_without_contact</i>
                        <div className="contact__descr">вконтакте:</div><a className="" href="https://vk.com/dimaa_ru"  rel="noreferrer" target="_blank">vk.com/dimaa_ru</a>
                    </div>
                    <div className="contact-item"><i className="material-icons">mail_outline</i>
                        <div className="contact__descr">почта:</div><a href="mailto:dimaa@dimaa.ru">dimaa@dimaa.ru</a>
                    </div>
                    <div className="contact-item"><i className="material-icons">storage</i>
                        <div className="contact__descr">gitHub:</div><a rel="noreferrer" href="https://github.com/Dmirii/" target="_blank">github.com/Dmirii/</a>
                    </div>
                    </div>
                        
                        </div>
                        <img src="/portoreact/img/DimaA.jpg" alt="Дима А" className="post-img"/>
                    </div>    
                    <div className="tags">
                    <a href="/" className="tag">#dimaA</a>
                    <a href="/" className="tag">#JS</a>
                    <a href="/" className="tag">#SCSS</a>
                    <a href="/" className="tag">#react</a>
                    </div>
            </div>    
            <div className="post-footer">
    <div className="post-buttons">
        <button className="likes post-button">
        <svg className="icon icon-like">
        <use xlinkHref="/portoreact/img/icons.svg#like"> </use>
        </svg>
            <span className="likes-counter">26</span>
        </button>
        <button className="comments post-button">
            <svg className="icon icon-comment">
            <use xlinkHref="/portoreact/img/icons.svg#comment"> </use>
            </svg>
            <span className="comments-counter">157</span>
        </button>
        <button className="save post-button">
        <svg className="icon icon-save">
        <use xlinkHref="/portoreact/img/icons.svg#save"> </use>
        </svg>
        </button>

        <div className="ya-share2" 
                data-curtain 
                data-color-scheme="whiteblack"
                data-limit="0" data-more-button-type="short" data-services="collections,vkontakte,facebook,odnoklassniki,messenger,whatsapp">
        </div>

    </div>
    <div className="post-author">
        <div className="author-about">
            <a href="https://dmirii.github.io/myPort/" className="author-username">dimaaru</a>
            <span className="post-time">08.04.2020</span>
        </div>
        <a href="/" className="author">
            <img src="/portoreact/img/DimaA.jpg" alt="tpdne" className="author-avatar"/>
        </a>
    </div>    
</div>
            </div>
    )
    }
}

export default Contact;