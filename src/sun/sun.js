import React, { Component } from 'react';
import './sun.css';
import Rays from './rays'


class Sun extends Component {
    componentDidMount () {
        document.addEventListener('scroll', () => {
            const yoff = window.pageYOffset;
            if(yoff<window.innerHeight*2.5) {
                document.querySelector(`.sun`).style.transform = `translate(-50%, ${window.innerHeight-(yoff*0.38)}px)`;
                document.querySelector(`.rays`).style.opacity = `${(yoff-(window.innerHeight*1.3))/window.innerHeight}`;
            }
        });
    }
    render () {
        return (
            <div className="sun">
                    <Rays count={this.props.rayCount}/>
            </div>
        );
    }
}

export default Sun;