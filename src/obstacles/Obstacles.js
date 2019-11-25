import React, { Component } from 'react';
import './obstacles.css';
import translateYrotateY from '../Translate';

class Obstacles extends Component {
    componentDidMount () {
        document.addEventListener('scroll', () => {
            const yoff = window.pageYOffset;
            translateYrotateY('.left-obstacle', yoff, 0.02);
            translateYrotateY('.right-obstacle', yoff, 0.025);
        });
    }
    render () {
        return (
            <div>
                <div className="left-obstacle"><div></div></div>
                <div className="right-obstacle"><div></div></div>
            </div>
        );
    }
}
export default Obstacles;