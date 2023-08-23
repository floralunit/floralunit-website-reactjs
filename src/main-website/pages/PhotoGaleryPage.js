import React from "react";
import ScrollListener from "../../common/components/ScrollListener";
import Background from '../resources/main-background.png';
import Background1 from '../resources/Frog_Croaking.gif';
import Background2 from '../resources/ppl-roses.png';
import {Link} from "react-router-dom";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import "../../common/styles/photos.css"
export function PhotoGaleryPage() {
    return (
        <div>
            {/* Ваш код для секций */}
            <div id="section1" style={{backgroundImage: `url(${Background})`, minHeight: '100vh'}}>
                <div className="flex-container">
                    <div className="row">
                        <div className="column">
                            <img src={require('../resources/ppl-roses.png')} loading="lazy" className="s"/>
                            <img src={require('../resources/culbutefrog.gif')} loading="lazy" className="s"/>
                        </div>
                        <div className="column">
                            <img src={require('../resources/DUMBFROG.gif')} loading="lazy" className="s"/>
                        <div className="column">
                            <img src={require('../resources/ppl-roses.png')} loading="lazy" className="s"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section2" style={{backgroundImage: `url(${Background1})`, backgroundRepeat: 'repeat', minHeight: '100vh'}}>
                pi
            </div>
            <div id="section3" style={{backgroundImage: `url(${Background2})`,backgroundRepeat: 'repeat', minHeight: '100vh'}}>
                a
            </div>

            <ScrollListener />
            </div>
        </div>
    );
}
