import React from 'react';
import './Post.scss';



const Post = ({postContent  }) =>{
    
    
   

    return(
    <section className="post">

    
<div className="post-body"> 
    <h2 className="post-title">{postContent[1]}</h2>

        <div className="post-wrapper">
            <div className="post-section">
                {/* <h2  className="post-title dmitrii">Кратко:</h2> */}
                <ul>
                    { 
                        postContent[2].map( (item,index)=>{
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                        
                    }
                    
                </ul>
            </div>
            <img src={postContent[0]} alt="навыки" className="post-img"/>
        </div>
        <div className="tags">
        { 
                        postContent[3].map( (item,index)=>{
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
            <span className="likes-counter">{postContent[4][0]}</span>
        </button>
        <button className="comments post-button">
            <svg className="icon icon-comment">
            <use xlinkHref="/portoreact/img/icons.svg#comment"> </use>
            </svg>
            <span className="comments-counter">{postContent[4][1]}</span>
        </button>
        <button className="save post-button">
        <svg className="icon icon-save">
        <use xlinkHref="/portoreact/img/icons.svg#save"> </use>
        </svg>
        </button>
        <button  className="share post-button">
        <svg className="icon icon-share">
        <use xlinkHref="/portoreact/img/icons.svg#share"> </use>
        </svg>
        </button>
    </div>

  

    <div className="post-author">
        <div className="author-about">
            <a href="https://dimaa.ru" rel="noreferrer" target="_blank" className="author-username">dimaaru</a>
            <span className="post-time">{postContent[5]}</span>
        </div>
        <a href="/" className="author">
            <img src="/portoreact/img/DimaA.jpg" alt="tpdne" className="author-avatar"/>
        </a>
    </div>
</div>


    </section>    
)};

export default Post;