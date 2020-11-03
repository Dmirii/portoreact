import React from 'react';
import './Porto.scss';



class Porto extends React.Component {

    constructor(props){
        super(props);    
        this.postContent=props.postContent;
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
    <section className="post">
        <div className="post-body"> 
            <h2 className="post-title">Работа № {this.postContent[0]}</h2>
                <div className="post-wrapper">
                    <div className="post-section">
                    <div>
                        <h2  className="post-title  porto-title">{this.postContent[1]}</h2>
                    </div>
                        <p className="porto-txt">
                            {this.postContent[4]}
                        </p>
                    </div>
                    <a  rel="noreferrer" target="_blank" href={this.postContent[3]}>
                        <img src={this.postContent[6]} alt={this.postContent[1]} className="post-img"/>
                    </a>
                    
                </div>
                <div className="tags">
                <a  className="porto-git"  rel="noreferrer" target="_blank" href={this.postContent[2]}>
                                <img  alt="GitHub Repo" src="/portoreact/img/GitHub.png"/>
                            </a> 
                
                            {        
                    
                                this.postContent[5].map( (item,index)=>{
                                    return(
                                        <a key={index} href="/" className="tag">#{item}</a>                               
                                    )
                                })
                                
                            }    

            </div>   
            <p className="porto-label">
            Нажмите на картинку для просмотра работы. Нажмите на OctoCat для просмотра кода.
            </p> 
        </div>


        <div className="post-footer">
            <div className="post-buttons">
                <button className="likes post-button">
                <svg className="icon icon-like">
                <use xlinkHref="/portoreact/img/icons.svg#like"> </use>
                </svg>
                    <span className="likes-counter">{this.postContent[7][0]}</span>
                </button>
                <button className="comments post-button">
                    <svg className="icon icon-comment">
                    <use xlinkHref="/portoreact/img/icons.svg#comment"> </use>
                    </svg>
                    <span className="comments-counter">{this.postContent[7][1]}</span>
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
                    <a target="_blank" rel="noreferrer" href="https://dimaa.ru" className="author-username">dimaaru</a>
                    <span className="post-time">{this.postContent[8]}</span>
                </div>
                <a href="/" className="author">
                    <img src="/portoreact/img/DimaA.jpg" alt="tpdne" className="author-avatar"/>
                </a>
            </div>
        </div>


            </section> 
    ) 
}
};

export default Porto;