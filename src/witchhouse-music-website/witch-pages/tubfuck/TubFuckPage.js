import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const';
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import ave from '../../resources/images/5EjD.gif'
import { Link } from 'react-router-dom';

export function TubfuckPage() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_78', 283385573, 78,'05c48c40d79915851b')");
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
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <div className="crt"></div>
            <div className='text-background'>
                <p className="text-background-tubfuck"
                    style={{ fontFamily: 'Abbadon', letterSpacing: '20px' }}>
                    <span style={{ fontFamily: 'Arial' }}>†▼</span>BF<span style={{ fontFamily: 'Arial' }}>▼</span>CK</p>
            </div>
            <GlitchSquiggly>
                <h5 style={{ color: 'white' }}>D E P R E S S I V E</h5>
                <h5 style={{ color: 'white' }}>O C C V L T</h5>
                <h5 style={{ color: 'white' }}>D R V G</h5>
                <h5 style={{ color: 'white' }}>S H I T</h5>
            </GlitchSquiggly>
            <Link className='link-back' to="/witch-house">
                <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                <span>&nbsp;back to witch page&nbsp;</span>
                <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
            </Link>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                <img src={require("../../resources/images/angel2_l.png")} style={{ width: '15%' }} alt='' />
                <div style={{ width: '40%', margin: '20px' }}>
                    <div id="vk_playlist_283385573_78"></div>
                </div>
                <img src={require("../../resources/images/angel2.png")} style={{ width: '15%' }} alt='' />
            </div>
            <div className='links-block'>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://vk.com/xtubfuckx" target="_blank" rel="noreferrer">вконтакте</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/tvbfvck" target="_blank" rel="noreferrer">soundcloud</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://tubfuck.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://www.mixcloud.com/tvbfvck/" target="_blank" rel="noreferrer">mixcloud</a>
                <hr />
            </div>
            <br />
            <div style={{ margin: '0 auto' }}>
                <iframe title='youtube' src="https://vk.com/video_ext.php?oid=-48990715&id=456239018" width="426" height="240" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            </div>

        </div>
    );
}
