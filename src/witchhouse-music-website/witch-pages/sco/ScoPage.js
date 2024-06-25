import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import "../../styles/links-block.css"
import "../../../common/styles/text-change-colors.scss"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const';
import { photos } from './photos/photos.js';
import main_background from '../../resources/images/bbcb.gif'
import second_background from '../../resources/images/caca.gif'
import text_background from '../../resources/images/acbb.gif'

import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { RakDushi } from './rakdushi.js';

export function ScoPage() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_71', 283385573, 71,'a6aa52abbd4abc7bb3')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-150736684_196', -150736684, 196,'208bde7723fb38faf7')");
    webamp.close();
    const [photosSco, setPhotosSco] = useState([]);
    const musics = [
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/236858194' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204101978' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261410697' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204106900' },

    ];
    useEffect(() => {
        if (photosSco.length === 0) {
            const photosS = photos.map((obj) => ({ ...obj, type: "photo" }));
            const array = photosS.concat(musics);
            const shuffledArray = [...array];
            setPhotosSco(shuffle(shuffledArray));
        }
    });

    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight / 2) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${second_background})`);
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
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <hr />
                <RakDushi />
                <hr />
                <br />
                <div className="header-with-bg" style={{
                    height: '183px',
                    objectFit: 'contain',
                    background: `linear-gradient(
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.2)
    ),url(${text_background})`,
                    backgroundSize: 'auto 183px',
                    padding: '0 20px',
                    lineHeight: '183px',
                    margin: '0 auto',
                    minWidth: '700px',
                    fontWeight: 'bold',
                    letterSpacing: '15px'
                }}>
                    <div className='sco-animate' style={{ fontFamily: 'Abbadon', color: 'white' }}>
                        <p>
                            <span style={{ fontFamily: 'Arial' }}>△</span>Sco<span style={{ fontFamily: 'Arial' }}>△</span>
                        </p>
                    </div>
                </div>
                <br />
                <Link className='link-back' to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    &nbsp;<span style={{ backgroundColor: 'white', color: 'black' }}>back to witch page</span>&nbsp;
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <br />
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <div style={{ width: '400px', margin: '0 20px' }}>
                        <div id="vk_playlist_283385573_71"></div>
                    </div>
                    <div>
                        <br /><br /><br /><br />
                        <img src={require("../../resources/images/heart-boy.gif")} style={{ height: '250px', width: 'auto' }} alt='' />
                    </div>
                </div>
            </section>
            <br />
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/scowitchboy" target="_blank" rel="noreferrer">вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.last.fm/ru/music/Sco?ysclid=lxukj09pk3244676194" target="_blank" rel="noreferrer">last.fm</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/scowitchboy" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/scowitchaboi/" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://scowitchboy.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                </div>
                <br />
                <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '850px' }}>
                    <GalleryWithMusic items={photosSco} className='photo-gallery'></GalleryWithMusic>
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br /><br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AHO6Ph9RbAM?si=WuywFjHhxYVqhy18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <br />
            </section>
            <br />
        </div>
    );
}
