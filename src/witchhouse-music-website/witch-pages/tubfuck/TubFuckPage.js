import React, { useEffect, useState } from 'react';
import { GREEN_BACKGROUND, API_URL, RABBIT_BACKGROUND, WITCH1_BACKGROUND, WITCH2_BACKGROUND, WITCH_BACKGROUND, WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const';
import "../../../common/styles/gallery.css";
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import RadostMojaPhotos from '../../../common/jsons/RadostMojaPhotos.json';
import "../../../common/styles/text-background.scss"
import { Thissadnesswilllastforever } from '../../components/thissadnesswilllastforever.js';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import {UseScriptUrl, UseScriptText} from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';

export function TubfuckPage() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_78', 283385573, 78,'05c48c40d79915851b')");
    webamp.close();
    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH_BACKGROUND})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight / 3) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH_BACKGROUND})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH2_BACKGROUND})`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="crt"></div>
            <section id='section1' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <hr />
            <hr />
            <br/>
                <div className='text-background'>
                    <p style={{ backgroundImage: `url(require("../../../common/styles/blood-forest.jpg"))`, fontFamily: 'Abbadon', letterSpacing: '20px' }}>
                        <span style={{fontFamily: 'Arial'}}>†▼</span>BF<span style={{fontFamily: 'Arial'}}>▼</span>CK</p>
                </div>
                <br/>
                <br/>
            </section>
            <section id='section2' style={{ margin: '0 20px' }}>
            <div id="vk_playlist_283385573_78"></div>

            </section>
<br/>
            <section id='section3' style={{ margin: '0 50px', textAlign:'center' }}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', color:'white', textDecoration:'none'}}>
                    <a style={{margin:'0 10px'}} href="https://vk.com/radostmoja" target="_blank" rel="noreferrer">вконтакте</a>
                    <a style={{margin:'0 10px'}} href="https://soundcloud.com/radostmoya" target="_blank" rel="noreferrer">soundcloud</a>
                    <a style={{margin:'0 10px'}} href="https://radostimoja.tumblr.com/" target="_blank" rel="noreferrer">tumblr</a>
                </div>
                <br/>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>

                </div>
            </section>
        </div>
    );
}
