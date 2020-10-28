import React from 'react';
import './Radio.scss';

const audio = new Audio();
audio.type = 'audio/acc';
audio.src= 'https://listen5.myradio24.com/atmo';


class Radio extends React.Component {
    state={
        radio:'play',
    }

    radioPlay = e=>{
        e.preventDefault();
        if(audio.paused){
            audio.play();
            this.setState({radio:'stop'})            
        }
        else
        {
            audio.pause();
            this.setState({radio:'play'});
        }
        

    }

    componentDidMount(){
    
    }

    render(){
    return(
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Спокойное радио</h2>
                </div>
                <div className="radio-body card-body">

                    <div className="radio-link"> <a rel="noreferrer" target="_blank" href="https://radiopotok.ru/radiostations" className="card-body-title radio-title">Спокойное радио</a></div>
                
                     <div className="radio-manage">  
                      <a className="radio-play" href="/" onClick={this.radioPlay}>
                     <img className="radio-btn" alt="play" src={audio.paused ? `/portoreact/img/play.png`: `/portoreact/img/stop.png` }></img>
                     </a></div>
                        
                        
                </div>
            </div> 
    )}
}

export default Radio;