import React from 'react'
import './MovingText.css';

export function MovingText() {
    return (
        <div className="marqueeBody">
            <div className="marquee">
                <h3>
                    <div className="marquee-wrapper">
                        <div className="marquee-title">
                            <span className="text-stroke-white">this sadness will last forever </span>
                            &nbsp;&nbsp;
                            <span className="text-stroke-white">this sadness will last forever </span>
                            &nbsp;&nbsp;
                            <span className="text-stroke-white">this sadness will last forever </span>
                            &nbsp;&nbsp;
                            <span className="text-stroke-white">this sadness will last forever </span>
                            &nbsp;&nbsp;
                            <span className="text-stroke-white">this sadness will last forever </span>
                            &nbsp;&nbsp;
                            <span className="text-stroke-white">this sadness will last forever </span>
                        </div>
                    </div>
                </h3>
            </div>
        </div>
    );
}
