import React, { useEffect } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import girl from '../../resources/images/12_.gif'
import forest from '../../resources/images/663506957637434225.gif'
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

export function PlachzemlyaPage() {
    useEffect(() => {
        document.title = `Плачь Ʒемля | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_90', 283385573, 90,'6d9f5d5bee86c27f0c')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-150736684_153', -150736684, 153,'ea7662c3c9b902967d')");
    webamp.close();
    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${girl})`);
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${girl})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${forest})`);
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
    ),url(${forest})`,
                        backgroundSize: 'auto 183px',
                        padding: '0 20px',
                        lineHeight: '183px'
                    }}>
                        <div style={{ fontFamily: 'Abbadon', letterSpacing: '25px', color: 'white' }}>
                            <p>
                                Плачь Ʒемля
                            </p>
                        </div>
                    </div>
                </GlitchSquiggly>
                <Link className='link-back' to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src={require("../../resources/images/plant2_1.png")} className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                    <div style={{ margin: '20px', width: '400px' }}>
                        <div id="vk_playlist_283385573_90"></div>
                    </div>
                    <img src={require("../../resources/images/plant2.png")} className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/plachzemlya" target="_blank" rel="noreferrer">vk</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/saudadeblack" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://plachzemlya.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                </div>
                <br />
                <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '850px' }}>
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br />

                        <iframe src="https://vkvideo.ru/video_ext.php?oid=-115494169&id=456239150&hd=2" width="560" height="315" title="VK video player" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                        <br /><br />
                        <iframe src="https://vkvideo.ru/video_ext.php?oid=283385573&id=456239743&hd=2" width="360" height="640" title="VK video player" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                        <br /><br />
                        <div style={{ width: '400px' }}>
                            <div id="vk_playlist_-150736684_153"></div>
                        </div>
                    </div>
                </div>
                <br />
            </section>
            <br />
        </div>
    );
}
