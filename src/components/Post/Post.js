import React from 'react';
import './Post.scss';



class Post extends React.Component{
    
    
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
    <h2 className="post-title">{this.postContent[1]}</h2>

        <div className="post-wrapper">
            <div className="post-section">
                {/* <h2  className="post-title dmitrii">Кратко:</h2> */}
                <ul>
                    { 
                        this.postContent[2].map( (item,index)=>{
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                        
                    }
                    
                </ul>
            </div>
            <img src={this.postContent[0]} alt="навыки" className="post-img"/>
        </div>
        <div className="tags">
        { 
                        this.postContent[3].map( (item,index)=>{
                            return(
                                <a key={index} href="/" className="tag">#{item}</a>                               
                            )
                        })
                        
                    }     
    </div>   
</div>


<div className="post-footer">
    <div className="post-buttons">
        <button className="likes post-button">
        <svg className="icon icon-like">
        <use xlinkHref="/portoreact/img/icons.svg#like"> </use>
        </svg>
            <span className="likes-counter">{this.postContent[4][0]}</span>
        </button>
        <button className="comments post-button">
            <svg className="icon icon-comment">
            <use xlinkHref="/portoreact/img/icons.svg#comment"> </use>
            </svg>
            <span className="comments-counter">{this.postContent[4][1]}</span>
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
            <a href="https://dimaa.ru" rel="noreferrer" target="_blank" className="author-username">dimaaru</a>
            <span className="post-time">{this.postContent[5]}</span>
        </div>
        <a href="/" className="author">
            <img src="/portoreact/img/DimaA.jpg" alt="tpdne" className="author-avatar"/>
        </a>
    </div>
</div>


    </section>    
)}
};

export default Post;