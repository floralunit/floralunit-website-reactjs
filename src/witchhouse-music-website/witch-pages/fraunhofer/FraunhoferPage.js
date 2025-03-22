import React, { useEffect } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import second_background from '../../resources/images/663506957637469065.gif'
import main_background from '../../resources/images/18_.gif'
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

export function FraunhoferPage() {
    useEffect(() => {
        document.title = `fraunhofer diffraction | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_73', 283385573, 73,'eabe07992a90e79771')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-150736684_134', -150736684, 134,'a263508783a7a972ea')");
    webamp.close();
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
            <br />
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <div className='text-background'>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-fraunhofer'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>fraunhofer diffraction</div>
                        </p>
                    </div>
                </div>
                <Link className='link-back' to="/witch-house" >
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src={require("../../resources/images/angel10.png")} className='playlist-image' style={{ height: '200px', margin: '100px 0' }} alt='' />
                    <div style={{ margin: '20px', width: '400px' }}>
                        <div id="vk_playlist_283385573_73"></div>
                    </div>
                    <img src={require("../../resources/images/angel10_right.png")} className='playlist-image' style={{ height: '200px', margin: '100px 0' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ margin: '0 50px', textAlign: 'center' }} >
                <div className='links-block' >
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://ivoryrite.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/ivoryrite/" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/fraunhoferdiffraction/" target="_blank" rel="noreferrer">vk</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/ivory.rite/" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/voGZy4jJIOU?si=_aSIBmqRJ1CC3nXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/5J9OhDMKOoM?si=CrfSjifyWoH73yMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe style={{ margin: '10px' }} src="https://vk.com/video_ext.php?oid=283385573&id=456239747&hd=2&hash=2888d17b037e36ca" title="VK video player" width="325" height="646" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    <div style={{ margin: '20px', width: '400px' }}>
                        <div id="vk_playlist_-150736684_134"></div>
                    </div>
                    <iframe style={{ margin: '10px' }} src="https://vkvideo.ru/video_ext.php?oid=283385573&id=456239748&hd=2" title="VK video player" width="500" height="300" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                </div>
            </section>
            <br />
        </div>
    );
}
