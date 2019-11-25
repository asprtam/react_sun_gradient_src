import React, { Component } from 'react';
import './message.css';

class Message extends Component {
    componentDidMount () {
        document.addEventListener('scroll', () => {
            const yoff = window.pageYOffset;
            if(yoff>window.innerHeight*3.3) {
                document.querySelector(`.message`).style.opacity = `${(yoff-window.innerHeight)*0.0003}`;
            } else {
                document.querySelector(`.message`).style.opacity = `0`;
            }
        });
    }
    render () {
        return (
            <div className="message">
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default Message;