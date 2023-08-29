import React from "react";
import ScrollListener from "../../common/components/ScrollListener";
import Background from '../../common/backgrounds/main-background.png';
import Background1 from '../resources/Frog_Croaking.gif';
import Background2 from '../resources/ppl-roses.png';
export function CatsFroggiesPage() {
    return (
        <div>
            {/* Ваш код для секций */}
            <div id="section1" style={{backgroundImage: `url(${Background})`, minHeight: '100vh'}}>
                pip
            </div>
            <div id="section2" style={{backgroundImage: `url(${Background1})`, backgroundRepeat: 'repeat', minHeight: '100vh'}}>
                pi
            </div>
            <div id="section3" style={{backgroundImage: `url(${Background2})`,backgroundRepeat: 'repeat', minHeight: '100vh'}}>
                a
            </div>

            <ScrollListener />
        </div>
    );
}
