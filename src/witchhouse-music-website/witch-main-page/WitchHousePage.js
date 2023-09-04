import './WitchHousePage.css';
import '../../common/styles/photos.css';

import React, {useState} from 'react'
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import {Link} from "react-router-dom";

import {Thissadnesswilllastforever} from "../components/thissadnesswilllastforever";
import {BloodText} from "../components/BloodText";
import WebampMusic from "../components/webamp/WebampMusic"

export function WitchHousePage() {
    // eslint-disable-next-line no-restricted-globals
    if (screen.width <= 900) {
        document.getElementById("viewport").setAttribute("content", "width=865px; initial-scale=1");
    }
    return (
        <div className="witch-house-page">
            <WebampMusic/>
                <section className="info-section">
                    <div  className="container">
                        <div className="head-container">
                            <hr/>
                            <Thissadnesswilllastforever/>
                            <hr/>
                            <BloodText/>
                        </div>
                        <div className="info-container">
                            <div className="info-text">
                               Witch house is an occult-themed dark electronic music genre and visual aesthetic that emerged in the early 2010s.
                                The music is heavily influenced by chopped and screwed hip-hop soundscapes, industrial and noise experimentation, and features use of synthesizers, drum machines, obscure samples, droning repetition and heavily altered, ethereal, indiscernible vocals.
                                <br/><br/>   The witch house visual aesthetic includes occult, witchcraft, shamanism and horror-inspired artworks, collages and photographs as well as significant use of typographic elements such as Unicode symbols. Many works by witch house visual artists incorporate themes from horror films, the television series Twin Peaks, and mainstream pop culture celebrities. Common typographic elements in artist and track names include triangles, crosses, and other Unicode symbols, which are seen by some as a method of keeping the scene underground and harder to search for on the Internet.
                            </div>
                            <hr/>
                            <div className="vv17ch-container">
                                <div>
                                    <div className="vv17ch">
                                        <img src={require('./resources/angel-right.png')} loading="lazy" className="vv17chImg"/>
                                    </div>
                                    <div className="vv17ch">
                                        <img src={require('./resources/vedmindom.png')} loading="lazy" className="vv17chImg"/>
                                        <a className="vv17chCaption">Ведьмин дом</a>
                                    </div>
                                    <div className="vv17ch">
                                        <img src={require('./resources/vv17chou7.jpg')} loading="lazy" className="vv17chImg"/>
                                        <a className="vv17chCaption">vv17chou7</a>
                                    </div>
                                    <div className="vv17ch">
                                        <img src={require('./resources/angel-left.png')} loading="lazy" className="vv17chImg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <section className="music-section">
                <div  className="container">
                    <div className="music-container">
                        <div className="row">
                            <div className="column">
                                <Link to="/radostmoja">
                                    <GlitchClip onHover={false} className="s">
                                        <img src={require('./resources/radostmoja.png')} loading="lazy" className="s"/>
                                    </GlitchClip>
                                </Link>
                            </div>
                            <div className="column">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Link to="/suicidewave">
                                        <div style={{fontSize: "100px"}}>SUICIDEWAVE</div>
                                </Link>
                            </div>
                            <div className="column">
                                <Link to="/suicidewave">
                                    <div style={{fontSize: "100px"}}>CAIN</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
);
}
