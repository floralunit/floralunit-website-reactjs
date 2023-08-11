import React, {useState} from 'react'
import './MainPage.css';
import {MovingText} from "../components/MovingText";
import {BloodText} from "../components/BloodText";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import {Link} from "react-router-dom";
import WebampMusic from "../webamp/WebampMusic"

export function MainPage() {
    const rawHTML = `
<img src="./resources/radostmoja.png" loading="lazy" class="l"/>
`;

    return (
        <div>
            <WebampMusic/>
            <MovingText/>
            <BloodText/>
            <div className="name">
                <Link to="/radostmoja">
                    <GlitchClip onHover={false} className="s">
                        <img src={require('./resources/radostmoja.png')} loading="lazy" className="s"/>
                    </GlitchClip>
                </Link>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="p"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="p"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="s"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="s"/>

            <h2>2019</h2>

            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy" className="s"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy"
                 className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy"
                 className="l"/>
            <img src={require('./resources/2015_01.jpg')} loading="lazy"
                 className="l"/>
            <img src={require('./resources/2015_01.jpg')}
                 loading="lazy" className="p"/>
                <img src={require('./resources/2015_01.jpg')}
                     loading="lazy"
                     className="l"/>
                <img src={require('./resources/2015_01.jpg')}
                     loading="lazy"
                     className="l"/>
                <img src={require('./resources/2015_01.jpg')}
                     loading="lazy"
                     className="l"/>
                <img
                    src={require('./resources/2015_01.jpg')}
                    loading="lazy"
                    className="p"/>
            </div>
        </div>
);
}
