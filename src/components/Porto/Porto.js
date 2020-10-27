import React from 'react';
import './Porto.scss';



const Porto = ({postContent  }) =>{

    return(
    <section className="post">

    
<div className="post-body"> 
    <h2 className="post-title">Работа № {postContent[0]}</h2>

        <div className="post-wrapper">
            <div className="post-section">

            <div>
                <h2  className="post-title  porto-title">{postContent[1]}</h2>
            </div>
                <p className="porto-txt">
                    {postContent[4]}
                </p>
            </div>
            <a  rel="noreferrer" target="_blank" href={postContent[3]}>
                <img src={postContent[6]} alt={postContent[1]} className="post-img"/>
            </a>
            
        </div>
        <div className="tags">
        <a  className="porto-git"  rel="noreferrer" target="_blank" href={postContent[2]}>
                        <img  alt="GitHub Repo" src="/img/GitHub.png"/>
                    </a> 
                  
        { 
            
                        postContent[5].map( (item,index)=>{
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
        <use xlinkHref="/img/icons.svg#like"> </use>
        </svg>
            <span className="likes-counter">{postContent[7][0]}</span>
        </button>
        <button className="comments post-button">
            <svg className="icon icon-comment">
            <use xlinkHref="/img/icons.svg#comment"> </use>
            </svg>
            <span className="comments-counter">{postContent[7][1]}</span>
        </button>
        <button className="save post-button">
        <svg className="icon icon-save">
        <use xlinkHref="/img/icons.svg#save"> </use>
        </svg>
        </button>
        <button  className="share post-button">
        <svg className="icon icon-share">
        <use xlinkHref="/img/icons.svg#share"> </use>
        </svg>
        </button>
    </div>

  

    <div className="post-author">
        <div className="author-about">
            <a href="https://dmirii.github.io/myPort/" className="author-username">dimaaru</a>
            <span className="post-time">{postContent[8]}</span>
        </div>
        <a href="/" className="author">
            <img src="/img/DimaA.jpg" alt="tpdne" className="author-avatar"/>
        </a>
    </div>
</div>


    </section>    
)};

export default Porto;