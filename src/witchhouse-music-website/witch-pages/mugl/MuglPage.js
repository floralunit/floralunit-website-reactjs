import React, { useEffect } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import mainbackground from '../../resources/images/caba.gif'
import secondbackground from '../../resources/images/663506957637434250.gif'
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

export function MuglPage() {
    useEffect(() => {
        document.title = `mugl | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_74', 283385573, 74,'53af2126e1f792a4a4')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-150736684_95', -150736684, 95,'1b967dd2e830e60227')");
    webamp.close();

    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${mainbackground})`);
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${mainbackground})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${secondbackground})`);
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
            <br />
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <GlitchSquiggly>
                    <div className="header-with-bg" style={{
                        height: '183px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${secondbackground})`,
                        backgroundSize: 'auto 183px',
                        padding: '0 20px',
                        lineHeight: '183px',
                        maxWidth: '700px',
                    }}>
                        <div style={{ fontFamily: 'Abbadon', letterSpacing: '25px', color: 'white', fontSize: '120px' }}>
                            <p>
                                Mugl
                            </p>
                        </div>
                    </div>
                </GlitchSquiggly>
                <Link className='link-back' to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    &nbsp;<span style={{ backgroundColor: 'white', color: 'black' }}>back to witch page</span>&nbsp;
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src={require("../../resources/images/eye1_left.png")} className='playlist-image' style={{ height: '100px', width: 'auto', margin: '100px 0' }} alt='' />
                    <div style={{ width: '400px', margin: '20px' }}>
                        <div id="vk_playlist_283385573_74"></div>
                    </div>
                    <img src={require("../../resources/images/eye1.png")} className='playlist-image' style={{ height: '100px', width: 'auto', margin: '100px 0' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block-background' >
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://mugl.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/mugly/" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/iammugl/" target="_blank" rel="noreferrer">vk</a>
                    <hr />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/pjBgDjgvc80?si=gZbjH_NvB4IJ-AEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/mibcLkE9ENw?si=X0rS-q1yoFdvCGYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/ExB5dcs4Iio?si=pWP9oTjxYDieRqhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div style={{ margin: '20px', width: '400px' }}>
                        <div id="vk_playlist_-150736684_95"></div>
                    </div>
                </div>
            </section>
            <br />
        </div>
    );
}
