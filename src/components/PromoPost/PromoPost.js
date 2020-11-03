import React from 'react';
import './PromoPost.scss';


class PromoPost extends React.Component {

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
            <section className="post promo-post">  
        
        <div className="post-body">
            <h2 className="post-title">Приветствую вас на моём сайте.</h2>    
                <div className="post-wrapper">
                    <div className="post-section">
                        <h2  className="post-title dmitrii">Меня зовут Дмитрий Антонов.</h2>
                        <p className="post-text about">
                            Родился я в славном городе Тверь в 1981г. Сменил 10 школ, а затем в 2002 году успешно окончил ГУАП (ЛИАП).
                            Всю сознательную жизнь я посветил управлению продажами. С 2019 года я решил сменить сферу деятельности.
                            В данный момент я занимаюсь Frontend разработкой.
                            На этой странице вы узнаете какими навыками я уже обладаю и что изучаю в данный момент.
        
                        </p>
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
        </section>
        )    

    }
}
export default PromoPost;