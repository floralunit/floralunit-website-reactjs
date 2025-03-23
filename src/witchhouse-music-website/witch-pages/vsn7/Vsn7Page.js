import React, { useEffect, useState } from 'react';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import second_background from '../../resources/images/dddb_2.gif'
import main_background from '../../resources/images/baca.gif'
import { Vsn7Photos } from './photos/photos.js';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';
import { Vesna } from './vesna.js';

export function Vsn7Page() {
    useEffect(() => {
        document.title = `VSN7 | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_92', 283385573, 92,'0d5cb9f444966c0979')");
    webamp.close();

    const [photosVesna, setPhotosVesna] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294311776' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294314385' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/251419418' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1557526753' }
        ];

        if (photosVesna.length === 0) {
            const photos = Vsn7Photos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosVesna(shuffle(shuffledArray));
        }
    }, [photosVesna.length]);

    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight) {
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
            <hr color='white' />
            <Vesna />
            <hr color='white' />
            <br />
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <GlitchSquiggly>
                    <div className="header-with-bg" style={{
                        height: '183px',
                        objectFit: 'contain',
                        background: `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
    ),url(${second_background})`,
                        backgroundSize: 'auto 183px',
                        padding: '0 20px',
                        lineHeight: '183px'
                    }}>
                        <div style={{ fontFamily: 'Arkhip', letterSpacing: '25px', color: 'white' }}>
                            <p>
                                VSN7
                            </p>
                        </div>
                    </div>
                </GlitchSquiggly>
                <h1 style={{ fontFamily: 'Arial', color: 'white', fontSize: '30px', margin: '-20px 0 0 0' }}>
                    NEDOSTUPNOSTЬ
                </h1>
                <br />
                <Link className='link-back' to="/witch-house" >
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src={require("../../resources/images/butterfly.png")} className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                    <div style={{ margin: '20px', width: '400px' }}>
                        <div id="vk_playlist_283385573_92"></div>
                    </div>
                    <img src={require("../../resources/images/butterfly.png")} className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                </div>
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/vesna_vsn7" target="_blank" rel="noreferrer">vk</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/vsn7" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/vsn7_vesna/" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <br />
            </section>
            <section id='section2' style={{ margin: '0 100px' }}>
                <div className='photo-gallery'>
                    <GalleryWithMusic items={photosVesna} className='photo-gallery'></GalleryWithMusic>
                    <br />
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/E63P4pO20E4?si=5_p_CVNCzO0EQkem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wSrhoJK-kBc?si=ZuQJytN248CxWAcv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                </div>
            </section>
            <br />
        </div>
    );
}
