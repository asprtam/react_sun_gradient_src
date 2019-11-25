import React, { Component } from 'react';

class Rays extends Component {
    createRays = (count) => {
        const raysTable = [];
        let rayWidth;
        for (let i = 0; i < count; i++) {
            rayWidth = ((i%2)+1)*3;
            raysTable.push(<div style={{width: `${rayWidth}vw`, transform: `translate(-50%, -50%) rotateZ(${(i)*(360/count)}deg) translate(${12+rayWidth/2}vw, 0)`}} className="ray"></div>)
        }
        return raysTable;
    }
    render () {
        return (
            <div className="rays">
                {this.createRays(this.props.count)}
            </div>
        ); 
    }
}

export default Rays;