import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import "../../styles/links-block.css"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import { DepressedPhotos } from './photos/photos.js';
import main_background from '../../resources/images/Ote.gif'
import second_background from '../../resources/images/dabc.gif'

import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';

export function Depressed040Page() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_91', 283385573, 91,'b99a6fe2378f3679c6')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-2000487790_11487790', -2000487790, 11487790,'d1ce817271e68f3863')");
    webamp.close();
    const [photosDepressed, setPhotosDepressed] = useState([]);
    const musics = [
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023242209' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/237060749' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/941322226' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/237061011' }
    ];
    useEffect(() => {
        if (photosDepressed.length === 0) {
            const photos = DepressedPhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosDepressed(shuffle(shuffledArray));
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

            if (window.scrollY <= section1.offsetHeight - 100) {
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
                <div className='text-background'>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-depressed'>
                            <div style={{ fontFamily: 'dot', fontWeight: 'bold' }}>D E P R E S S E D 0 4 0</div>
                        </p>
                    </div>
                </div>
                <Link className='link-back' to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src={require("../../resources/images/rabbit.png")} className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                    <div style={{ margin: '20px', width: '400px' }}>
                        <div id="vk_playlist_283385573_91"></div>
                    </div>
                    <img src={require("../../resources/images/rabbit.png")} className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                </div>
                <div className='links-block'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://depressed040.tumblr.com/" target="_blank" rel="noreferrer">tumblr</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/depressed040" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://depressed040.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                </div>
                <br />
            </section>
            <section id='section2' style={{ margin: '0 100px' }}>
                <div className='photo-gallery'>
                    <GalleryWithMusic items={photosDepressed} className='photo-gallery'></GalleryWithMusic>
                    <br />
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3Q2QWoF7uYk?si=du4op_w5XeQyihf1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

            </section>
        </div>
    );
}
