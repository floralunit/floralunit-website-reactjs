import React from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import flowers from '../../resources/images/women.gif'
import roses from '../../resources/images/roses.gif'
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

export function EtalybovbPage() {
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_80', 283385573, 80,'bfe1f760189520551a')");
    webamp.close();

    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${flowers})`);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', minWidth: '900px' }}>
            <div className="crt"></div>
            <br />
            <div className="header-with-bg" style={{
                height: '183px',
                objectFit: 'contain',
                background: `linear-gradient(
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.2)
    ),url(${roses})`,
                backgroundSize: 'auto 183px',
                padding: '0 20px',
                lineHeight: '183px',
                margin: '0 auto',
                minWidth: '600px'
            }}>
                <div style={{ fontFamily: 'Arial', color: 'white' }}>
                    <p>
                        ǝțâ ΛЮƂǪɃЬ
                    </p>
                </div>
            </div>
            <br />
            <Link className='link-back' to="/witch-house">
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                </Link>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                <img src={require("../../resources/images/fairy_l.png")} style={{ height: '400px', width: 'auto' }} alt='' />
                <div style={{ width: '400px', margin: '20px' }}>
                    <div id="vk_playlist_283385573_80"></div>
                </div>
                <img src={require("../../resources/images/fairy.png")} style={{ height: '400px', width: 'auto' }} alt='' />
            </div>
            <div className='links-block'>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://vk.com/coolness36" target="_blank" rel="noreferrer">вконтакте</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/etalybovb" target="_blank" rel="noreferrer">soundcloud</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://www.last.fm/ru/music/%C7%9D%C8%9B%C3%A2+%CE%9B%D0%AE%C6%82%C7%AA%C9%83%D0%AC" target="_blank" rel="noreferrer">last.fm</a>
                <hr />
            </div>
            <br />
            <div style={{ margin: '0 auto', width: "400px", background: 'rgb(0,0,0,0.5)' }}>
                <iframe width="400px" height="80" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/199375719&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <GlitchSquiggly>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Освободи себя от холода в сердце</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Разбуди в душе ураган страстей</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Если тебе некуда деться</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Вина красного в стакан налей</h5>
                    <br />
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Потухли твои глаза</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Я вижу в них пустоту</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Холодная как смерть слеза</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Стекает по твоему рту</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Мне нечего тебе сказать</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Потому что ты меня не слышишь</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Сегодня все повторится опять</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Но сердце не станет тише</h5>
                </GlitchSquiggly>
            </div>
            <br />
        </div>
    );
}
