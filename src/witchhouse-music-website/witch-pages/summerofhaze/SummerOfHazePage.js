import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import "../../styles/links-block.css"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import { SummerPhotos } from './photos/photos.js';
import main_background from '../../resources/images/663506957634210197.gif'
import second_background from '../../resources/images/0cfa3ed997bab0fde000502da0e9e91f.gif'

import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Wizlove } from './Wizlove.js';

export function SummerOfHazePage() {
    useEffect(() => {
        document.title = `Summer Of Haze | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_72', 283385573, 72,'8ef3cbc4fe365ab7fb')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-150736684_99', -150736684, 99,'f333c7ea823c4b7d3f')");
    webamp.close();
    const [photosSummer, setPhotosSummer] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/75159019' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215740747' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/841134904' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/841134556' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308683298' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/841134868' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/841133824' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/841134409' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/841134652' },
        ];

        if (photosSummer.length === 0) {
            const photos = SummerPhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosSummer(shuffle(shuffledArray));
        }
    }, [photosSummer.length]);

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
                <Wizlove />
                <hr />
                <br />
                <div className="header-with-bg" style={{
                    height: '153px',
                    objectFit: 'contain',
                    background: `linear-gradient(
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.2)
    ),url(${second_background})`,
                    backgroundSize: 'auto 183px',
                    padding: '0 20px',
                    lineHeight: '153px',
                    margin: '0 auto',
                    maxWidth: '700px'
                }}>
                    <div style={{ fontFamily: 'LCD5', color: 'white', fontSize: '50px' }}>
                        <p>
                            &nbsp;SUMMER OF HAZE&nbsp;
                        </p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Центрирование по горизонтали
                    alignItems: 'center', // Центрирование по вертикали
                }}>
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        margin: '-70px 0 0 0'
                    }}>
                        <img
                            src={require("../../resources/images/weed.gif")}
                            style={{ height: '50px' }}
                            alt=''
                        />
                        <span style={{ whiteSpace: 'nowrap' }}>∞</span> {/* Текст в одну строку */}
                        <img
                            src={require("../../resources/images/weed.gif")}
                            style={{ height: '50px' }}
                            alt=''
                        />
                    </div>
                </div>

                <Link className='link-back' to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    <span style={{ backgroundColor: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <br />
            </section>
            <section id='section2' style={{ margin: '0 100px' }}>
                <div className='photo-gallery'>
                    <GalleryWithMusic items={photosSummer} className='photo-gallery'></GalleryWithMusic>
                </div>
            </section>
            <br />
            <section id='section3' style={{ margin: '0 50px', textAlign: 'center' }} >
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/summerofhaze" target="_blank" rel="noreferrer">Вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/summer-of-haze" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://summerofhaze.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/summerofhaze" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ width: '400px', margin: '10px' }}>
                        <div id="vk_playlist_283385573_72"></div>
                    </div>
                    <div style={{ width: '400px', margin: '10px' }}>
                        <div id="vk_playlist_-150736684_99"></div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe style={{ margin: '10px' }} width="560" height="315" src="https://www.youtube.com/embed/BAIRHN_39sQ?si=q7JUP3YWpZqmbeD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe style={{ margin: '10px' }} width="560" height="315" src="https://www.youtube.com/embed/L5U7xwcWE0o?si=BX99hqsQg6VqHFwq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe style={{ margin: '10px' }} width="560" height="315" src="https://www.youtube.com/embed/G5kcnCJwImA?si=5c3MY-lg1aHyJdL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </div>
            </section>
        </div>
    );
}
