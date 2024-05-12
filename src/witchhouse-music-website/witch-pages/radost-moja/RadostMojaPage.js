import React, { useEffect, useState } from 'react';
import { WITCH_BACKGROUND, WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const';
import "../../../common/styles/gallery.css";
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import RadostMojaPhotos from '../../../common/jsons/RadostMojaPhotos.json';
import "../../../common/styles/text-background.scss"
import forest from '../../resources/images/dark-forest.jpg'
import pain from '../../resources/images/PVnW.gif'
import girls from '../../resources/images/girls.gif'
import { Pomnim } from "./pomnim.js"
import Mrachneemrachnogo from './mrachneemrachnogo.js';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import "../../styles/links-block.css"
import { Link } from 'react-router-dom';

export function RadostMojaPage() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_57', 283385573, 57,'ca51d3f2bdf4685776')");
    webamp.close();
    const [photosRadost, setPhotosRadost] = useState([]);
    const musics = [
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146296601' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136815635' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100073656' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/97733282' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/95891674' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/93806159' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/85851188' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89783906' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/84421056' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/84420798' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/73476919' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/71575408' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/54515925' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198072149' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209861704' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209863388' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/159272833' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/159289964' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/165725952' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/143898802' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/143021984' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136066484' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136068924' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136064086' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/120655619' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/126082769' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/120655490' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/120654976' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/114081143' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/109373326' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/108868711' },

    ];
    useEffect(() => {
        if (photosRadost.length === 0) {
            const photos = RadostMojaPhotos.response.items.map(photo => ({
                src: photo.sizes.find(size => size.type === "x").url,
                width: 4,
                height: 3,
                title: photo.text,
                comments: photo.comments,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosRadost(shuffle(shuffledArray));
        }
    });

    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${pain})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight / 3) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH_BACKGROUND})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight + section3.offsetHeight / 3) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${forest})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${girls})`);
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
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <hr />
                <Pomnim />
                <hr />
                <br />
                <div className='text-background'>
                    <p className='text-background-radost' style={{ fontFamily: 'Abbadon', letterSpacing: '25px' }}>Радость моя</p>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <GlitchSquiggly onHover={false}>
                        <img src={require('./radost.png')}
                            style={{ width: '100px', margin: '0 auto' }} alt='' />
                    </GlitchSquiggly>
                    <Mrachneemrachnogo />
                    <GlitchSquiggly onHover={false} >
                        <img src={require('./radostmoja-norm.png')}
                            style={{ width: '100px', margin: '0 auto' }} alt='' />
                    </GlitchSquiggly>
                </div>
                <Link style={{ textAlign: 'center', color: '#8a0303', fontSize: '15px' }} to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/HahVxiQ.gif")} style={{ width: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/HahVxiQ.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <br />
            </section>
            <section id='section2' style={{ margin: '0 20px' }}>
                <div className='photo-gallery'>
                    <GalleryWithMusic items={photosRadost} className='photo-gallery'></GalleryWithMusic>
                </div>
            </section>
            <br />
            <section id='section3' style={{ margin: '0 50px', textAlign: 'center' }} >
                <GlitchSquiggly>
                    <h5 style={{ color: 'white' }}>Прими́ за́писи неизве́стные,</h5>
                    <h5 style={{ color: 'white' }}>му́зыку отве́рженную,</h5>
                    <h5 style={{ color: 'white' }}>слова́ отречённые,</h5>
                    <h5 style={{ color: 'white' }}>вечера́ потаённые.</h5>
                </GlitchSquiggly>
                <div className='links-block'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/radostmoja" target="_blank" rel="noreferrer">вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/radostmoya" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://radostmoja.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://radostimoja.tumblr.com/" target="_blank" rel="noreferrer">tumblr</a>
                    <hr />
                </div>
                <br />
                <div style={{ width: '500px', margin: '0 auto' }}>
                    <div id="vk_playlist_283385573_57" style={{ width: '500px', margin: '0 auto' }}></div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe width="500" height="300" style={{ margin: '10px' }} title='youtube' src="https://www.youtube.com/embed/YDYoWCIzlSM?si=Uiwi1TLxCAwg_Xhp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239695&hd=2" title='vk' width="500" height="300" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                    <iframe width="500" height="300" style={{ margin: '10px' }} title='youtube' src="https://www.youtube.com/embed/Tkg7BgN-PSc?si=L7IZkgwQ3xNX9H-y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                </div>
            </section>
            <br />
            <section id='section4' style={{ margin: '0 50px', textAlign: 'center' }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="no" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2466872&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="no" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3627373&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="no" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/5817551&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="no" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/9190387&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="yes" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/14894453&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="yes" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/17922124&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/24255867&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="yes" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/38800757&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                </div>
            </section>
        </div>
    );
}
