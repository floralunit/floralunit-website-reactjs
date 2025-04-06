import React, { useEffect } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import ave from '../../resources/images/335155b9fccc08edd74fbdbfeafac2a2.gif'
import { Link } from 'react-router-dom';

export function MarazmPage() {
    useEffect(() => {
        document.title = `ΛΛ4Я4ZΛΛ | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_97', 283385573, 97,'8da1c369e3ff13a4e0')");
    webamp.close();
    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `linear-gradient(
        rgba(0, 0, 0, 0.4), 
        rgba(0, 0, 0, 0.4)
      ),url(${ave})`);

    return (
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center', minHeight: '100vh' }}>
            <div className="crt"></div>
            <div className='text-background'>
                <p className="text-background-marazm"
                    style={{ fontFamily: 'Abbadon', letterSpacing: '10px' }}>
                    <span style={{ fontFamily: 'Arial' }}>ΛΛ4Я4ZΛΛ</span></p>
            </div>
            <Link className='link-back' to="/witch-house">
                <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                <span>&nbsp;back to witch page&nbsp;</span>
                <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
            </Link>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                <img src={require("../../resources/images/moon_1.png")} className='playlist-image' style={{ height: '150px', margin: '100px 20px' }} alt='' />
                <div className='vk-playlist'>
                    <div id="vk_playlist_283385573_97"></div>
                </div>
                <img src={require("../../resources/images/moon.png")} className='playlist-image' style={{ height: '150px', margin: '100px 20px' }} alt='' />
            </div>
            <div className='links-block'>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://vk.com/m4r4zm" target="_blank" rel="noreferrer">вконтакте</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/m4r4zm" target="_blank" rel="noreferrer">soundcloud</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://m4r4zm.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                <hr />
            </div>
            <br />
        </div>
    );
}
