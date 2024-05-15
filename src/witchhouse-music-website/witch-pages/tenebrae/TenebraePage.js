import React, { useEffect, useState } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import "../../../common/styles/gallery.css";
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import { photos } from './photos/photos.js';
import men from '../../resources/images/men.gif'
import women from '../../resources/images/1_.gif'
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

export function TenebraePage() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_79', 283385573, 79,'83ce6026d49f549acb')");
    webamp.close();
    const [photosTenebrae, setPhotosTenebrae] = useState([]);
    const musics = [
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182757750' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177343010' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89892279' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/88073326' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177338941' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/70652443' },

    ];
    useEffect(() => {
        if (photosTenebrae.length === 0) {
            const photosS = photos.map((obj) => ({ ...obj, type: "photo" }));
            const array = photosS.concat(musics);
            const shuffledArray = [...array];
            setPhotosTenebrae(shuffle(shuffledArray));
        }
    });

    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${men})`);
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight + section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${men})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${women})`);
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
                <img src={require("./header.gif")} style={{ width: '600px', height: 'auto', margin: '0 auto' }} alt='' />
                <br />
                <Link className='link-back' to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src={require("./women.png")} style={{ width: '18%', height: 'auto' }} alt='' />
                    <div style={{ width: '40%', margin: '20px' }}>
                        <div id="vk_playlist_283385573_79"></div>
                    </div>
                    <img src={require("./men.png")} style={{ width: '18%', height: 'auto' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.facebook.com/whatistenebrae" target="_blank" rel="noreferrer">facebook</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/tenebrae.music" target="_blank" rel="noreferrer">вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.last.fm/ru/music/%E2%80%A0Enebr%C3%A6" target="_blank" rel="noreferrer">last.fm</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/tenebraemusic" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://whatistenebrae.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://whatistenebrae.tumblr.com/" target="_blank" rel="noreferrer">tumblr</a>
                    <hr />
                </div>
                <br />
                <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '900px' }}>
                    <GalleryWithMusic items={photosTenebrae} className='photo-gallery'></GalleryWithMusic>
                </div>
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/K9dUJaUhcDg?si=f3fmQflf3d76pYFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
            <br />
        </div>
    );
}
