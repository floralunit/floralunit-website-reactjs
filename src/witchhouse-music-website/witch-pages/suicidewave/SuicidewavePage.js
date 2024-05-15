import React, { useEffect, useState } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const';
import "../../../common/styles/gallery.css";
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import { photos } from './photos/photos.js';
import "../../../common/styles/text-background.scss"
import flowers from '../../resources/images/8_.gif'
import anna from '../../resources/images/19_.gif'
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

export function SuicidewavePage() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_67', 283385573, 67,'d689d653b6d03c3ef3')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-150736684_196', -150736684, 196,'208bde7723fb38faf7')");
    webamp.close();
    const [photosSuicide, setPhotosSuicide] = useState([]);
    const musics = [
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187986' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187308' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187251' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187281' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187317' },

    ];
    useEffect(() => {
        if (photosSuicide.length === 0) {
            const photosS = photos.map((obj) => ({ ...obj, type: "photo" }));
            const array = photosS.concat(musics);
            const shuffledArray = [...array];
            setPhotosSuicide(shuffle(shuffledArray));
        }
    });

    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${flowers})`);
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${flowers})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${anna})`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', minWidth: '900px' }}>
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
    ),url(${anna})`,
                        backgroundSize: 'auto 183px',
                        padding: '0 20px',
                        lineHeight: '183px'
                    }}>
                        <div style={{ fontFamily: 'Abbadon', letterSpacing: '25px', color: 'white' }}>
                            <p>
                                SUICIDEW<span className='text-rotated' style={{ fontFamily: 'Abbadon', margin: '0 10px 0 -25px' }}>V</span>VЕ
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
                    <img src={require("../../resources/images/angel3_l.png")} style={{ height: '450px', width: 'auto' }} alt='' />
                    <div style={{ width: '400px', margin: '20px' }}>
                        <div id="vk_playlist_283385573_67"></div>
                    </div>
                    <img src={require("../../resources/images/angel3.png")} style={{ height: '450px', width: 'auto' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.last.fm/ru/music/SUICIDEW%CE%9BV%D0%95" target="_blank" rel="noreferrer">last.fm</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/suicidewaveunofficial" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.dropbox.com/sh/0hrark555q0u9xq/AAAtgxPk1mqB4YZ9gjejp4wYa?e=1&dl=0" target="_blank" rel="noreferrer">full discography</a>
                    <hr />
                </div>
                <br />
                <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '850px' }}>
                    <GalleryWithMusic items={photosSuicide} className='photo-gallery'></GalleryWithMusic>
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br />
                        <br />
                        <div id="vk_playlist_-150736684_196"></div>
                    </div>
                </div>
                <br />
            </section>
            <br />
        </div>
    );
}
