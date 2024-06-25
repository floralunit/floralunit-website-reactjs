import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import "../../styles/links-block.css"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import { CainPhotos } from './photos/photos.js';
import main_background from '../../resources/images/bbcc.gif'
import second_background from '../../resources/images/bada.gif'

import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Cvltcain } from './cvltcain.js';

export function CainPage() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_70', 283385573, 70,'3ca40709ba88a6341f')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-2000487790_11487790', -2000487790, 11487790,'d1ce817271e68f3863')");
    webamp.close();
    const [photosCain, setPhotosCain] = useState([]);
    const musics = [
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228061492' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217579506' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217579501' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217579495' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/208423346' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/212120482' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228061501' },
    ];
    useEffect(() => {
        if (photosCain.length === 0) {
            const photos = CainPhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosCain(shuffle(shuffledArray));
        }
    });

    document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");

            if (window.scrollY <= section1.offsetHeight + section2.offsetHeight / 2) {
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
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="crt"></div>
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <hr />
                <Cvltcain />
                <hr />
                <div className='text-background'>
                    <div style={{ fontFamily: 'Arial', color: 'white' }}>
                        <p className='text-background-cain'>
                            † CΛIN <p className='text-rotated text-background-cain' style={{ fontFamily: 'Arial' }}>†</p>
                        </p>
                    </div>
                </div>
                <GlitchSquiggly>
                    <h1 style={{ fontFamily: 'Arial', color: 'white', letterSpacing: '30px', fontSize: '30px', margin: '-20px 0 0 0' }}>
                        汚いハスラム
                    </h1>
                </GlitchSquiggly>
                <Link className='link-back' to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <br />
            </section>
            <section id='section2' style={{ margin: '0 100px' }}>
                <div className='photo-gallery'>
                    <GalleryWithMusic items={photosCain} className='photo-gallery'></GalleryWithMusic>
                </div>
            </section>
            <br />
            <section id='section3' style={{ margin: '0 50px', textAlign: 'center' }} >
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/cult_of_cain" target="_blank" rel="noreferrer">Вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/cain667" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://cvltcain.bandcamp.com/music" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/kay_aides/" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ width: '400px', margin: '10px' }}>
                        <div id="vk_playlist_283385573_70"></div>
                    </div>
                    <div style={{ width: '400px', margin: '10px' }}>
                        <div id="vk_playlist_-2000487790_11487790"></div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe width="500" height="300" style={{ margin: '10px' }} src="https://www.youtube.com/embed/YslHSXm3MDI?si=WjtkT5izdwQ9Ljv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="500" height="300" style={{ margin: '10px' }} src="https://www.youtube.com/embed/YslHSXm3MDI?si=NZa1mKALX9LWB2p4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="500" height="300" style={{ margin: '10px' }} src="https://www.youtube.com/embed/4yFDuJp9Sm4?si=okVwI3lJA6k6j67P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>
        </div>
    );
}
