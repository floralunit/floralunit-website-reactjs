import React, {useState} from 'react'
import './MainPage.css';
import {Thissadnesswilllastforever} from "./thissadnesswilllastforever";
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
            <Thissadnesswilllastforever/>
            <BloodText/>
                <section className="info-section">
                    <div  className="container">
                        <div className="info-text">
                            Witch house (sometimes referred to as drag)[1] is a microgenre of electronic music that is musically characterized by high-pitched keyboard effects, heavily layered basslines and trap-style drum loops, while it aesthetically employs occult and gothic-inspired themes.[2][3]

                            The witch house visual aesthetic includes occultism, witchcraft, shamanism, terror and horror-inspired artworks, collages and photographs as well as significant use of hidden messages and typographic elements such as Unicode symbols.[4][5] Artworks by witch house visual artists have incorporated imagery from horror films such as The Blair Witch Project,[6][dead link] the television series Twin Peaks,[7] and the fantasy show Charmed,[8][9] as well as mainstream pop culture celebrities of the 2000s. Common typographic elements in titles, such as by Salem and White Ring, include triangles, crosses and Unicode symbols, which are seen by some as a method of gatekeeping (in an effort to keep the scene underground and more difficult to search for on the Internet).
                        </div>
                        <hr/>
                        <div className="vv17chContainer">
                            <div>
                                <div className="vv17ch">
                                    <img src={require('./resources/vedmindom.png')} loading="lazy" className="vv17chImg"/>
                                    <span className="vv17chCaption">Ведьмин дом</span>
                                </div>
                                <div className="vv17ch">
                                    <img src={require('./resources/vv17chou7.jpg')} loading="lazy" className="vv17chImg"/>
                                    <span className="vv17chCaption">vv17chou7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
