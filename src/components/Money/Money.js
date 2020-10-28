import React from 'react';
import './Money.scss';

import {getResourse} from '../../service/function.js';


class Money extends React.Component {

    state={
        USD:'',
        EUR:'',
        date:'',
    }

    componentDidMount(){
        getResourse('https://api.exchangeratesapi.io/latest?base=USD').then( data  => {
            const rate = data.rates.RUB;                                 
            this.setState({USD: rate.toFixed(2)});                  
        });
        getResourse('https://api.exchangeratesapi.io/latest?base=EUR').then( data  => {
            const rate = data.rates.RUB;                                 
            this.setState({EUR: rate.toFixed(2)});                  
        });
        
        this.setState({date: new Date().toLocaleDateString("ru-RU")});        
    }
    render(){
    return(
            <div className="card money">
                <div className="card-header">
                    <h2 className="card-title">Курс рубля на {this.state.date}:</h2>

                </div>
                <div className="card-body">
                    <a rel="noreferrer" target="_blank" href="https://exchangeratesapi.io/" className="card-body-title">https://exchangeratesapi.io/</a>
                    
                        <p className="card-text card-joke">
                            {`1 USD = ${this.state.USD} RUB`}
                        </p>
                        <p className="card-text card-joke">
                            {`1 EUR = ${this.state.EUR} RUB`}
                        </p>
                </div>
            </div> 
    )}
}

export default Money;