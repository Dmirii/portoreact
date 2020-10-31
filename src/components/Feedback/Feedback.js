import React from 'react';
import './Feedback.scss';




class Feedback extends React.Component {
    state={
        joke:'',
    }

    componentDidMount(){
        
        
    }
    render(){
    return(

        <main className="posts">
            <form action="" className="add-post">
                <input placeholder="Заголовок вашего сообщения" name="post-title" className="add-title"></input>
                <textarea placeholder="Текст вашего сообщения" name="post-text" id="text" className="add-text"></textarea>
                <div className="add-buttons">
                    <button type="submit" className="button add-button">
                        <svg className="icon icon-fire">
                            <use xlinkHref="./img/icons.svg#Fier"></use>
                        </svg>
                            Отправить мне сообщение
                    </button>
                </div>
            </form>
        </main>
    )}
}

export default Feedback;