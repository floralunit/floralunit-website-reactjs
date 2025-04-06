import React, { useEffect, useState } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import ave from '../../resources/images/childhood_friend.gif'
import { Link } from 'react-router-dom';

import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import { photos } from './photos/photos.js';

export function BlamevenusPage() {
    useEffect(() => {
        document.title = `BLAME VENUS | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_96', 283385573, 96,'a19686ba1d9b8669d8')");
    webamp.close();
    const [photosBlame, setPhotosBlame] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106572025' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182112575' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174336017' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228844209' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173020788' },

        ];

        if (photosBlame.length === 0) {
            const photosS = photos.map((obj) => ({ ...obj, type: "photo" }));
            const array = photosS.concat(musics);
            const shuffledArray = [...array];
            setPhotosBlame(shuffle(shuffledArray));
        }
    }, [photosBlame.length]);

    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.6)
      ),url(${ave})`);

    return (
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center', minHeight: '100vh' }}>
            <div className="crt"></div>
            <div className='text-background'>
                <p className="text-background-tubfuck"
                    style={{ fontFamily: 'Abbadon', letterSpacing: '20px' }}>
                    <span style={{ fontFamily: 'Arial' }}>BLAME VENUS</span></p>
            </div>
            <Link className='link-back' to="/witch-house">
                <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                <span>&nbsp;back to witch page&nbsp;</span>
                <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
            </Link>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                <img src={require("../../resources/images/people.png")} className='playlist-image' style={{ height: '350px', margin: '20px 0' }} alt='' />
                <div style={{ margin: '20px', width: '400px' }}>
                    <div id="vk_playlist_283385573_96"></div>
                </div>
                <img src={require("../../resources/images/people.png")} className='playlist-image' style={{ height: '350px', margin: '20px 0' }} alt='' />
            </div>
            <div className='links-block'>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://vk.com/blamevenus" target="_blank" rel="noreferrer">вконтакте</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/blamevenus" target="_blank" rel="noreferrer">soundcloud blamevenus</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/bl4ck-sun" target="_blank" rel="noreferrer">soundcloud bl4ck-sun</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://blamevenus.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp blamevenus</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://bl4cksunmusic.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp bl4ck-sun</a>
                <hr />
            </div>
            <br />
            <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '850px' }}>
                <GalleryWithMusic items={photosBlame} className='photo-gallery' style={{ margin: '20px' }}></GalleryWithMusic>
            </div>
            <br />
        </div>
    );
}
