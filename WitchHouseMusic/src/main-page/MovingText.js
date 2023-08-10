import React from 'react'
import './MovingText.css';

export function MovingText() {
    return (
        <div className="marqueeBody">
            <div className="marquee">
                <h3>
                    <div className="marquee-wrapper">
                        <div className="marquee-title">
                            / We think <span className="text-stroke-white">creative</span>
                            &amp; make them
                            <span className="text-stroke-white">easy</span> / We think
                            <span className="text-stroke-white">creative</span>
                            &amp; make them
                            <span className="text-stroke-white">easy</span>
                        </div>
                        <div className="marquee-title">
                            / We think <span className="text-stroke-white">creative</span>
                            &amp; make them
                            <span className="text-stroke-white">easy</span> / We think
                            <span className="text-stroke-white">creative</span>
                            &amp; make them
                            <span className="text-stroke-white">easy</span>
                        </div>
                    </div>
                </h3>
            </div>
        </div>
    );
}
