import React from 'react';
import './Card.scss';

import {getResourse} from '../../service/function.js';


class Card extends React.Component {
    state={
        joke:'',
    }

    componentDidMount(){
        
        getResourse('https://icanhazdadjoke.com/',{ method: 'GET', headers: {'Accept': 'application/json' }})
        .then( data  => {           
            this.setState({joke:data.joke})
        }); 
    }
    render(){
    return(
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Случайны анекдот:</h2>
                </div>
                <div className="card-body">
                    <a rel="noreferrer" target="_blank" href="https://icanhazdadjoke.com/api" className="card-body-title">https://icanhazdadjoke.com/api</a>
                        <p className="card-text card-joke">
                            {this.state.joke}
                        </p>
                </div>
            </div> 
    )}
}

export default Card;