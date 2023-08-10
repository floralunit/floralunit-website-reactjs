import React, { useEffect, useRef } from 'react';
import './BloodText.css';
export class BloodText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentSize: {width: props.width,height: props.height}
        }
    }
    render(){
        return (
            <div className="bloodText">
                <svg version="1.1" viewBox="0 0 0 0" width="0" height="0"
                     style={{display:'none'}}>
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                           result="goo"/>
                        </filter>
                    </defs>
                </svg>

                <div className="goo">
                    <h1>WitchHouse</h1>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                </div>
            </div>
        );
    }
}