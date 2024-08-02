import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import { SongLyrics } from "../../components/SongLyrics"
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

export function DnejFevralya() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    const [selectedSong, setSelectedSong] = useState(null);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [isShownSongs1, setIsShownSongs1] = useState(false);
    const [open1, setOpen1] = useState(false);
    const handleClickShowSongs1 = () => {
        setIsShownSongs1(current => !current);
        setOpen1(open => !open);
    };
    const [isShownSongs2, setIsShownSongs2] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleClickShowSongs2 = () => {
        setIsShownSongs2(current => !current);
        setOpen2(open => !open);
    };

    const images = [
        {
            original: require('./images/30dnej1.jpg'),
            thumbnail: require('./images/30dnej1.jpg'),
        },
        {
            original: require('./images/30dnej2.jpg'),
            thumbnail: require('./images/30dnej2.jpg'),
        },
        {
            original: require('./images/30dnej3.jpg'),
            thumbnail: require('./images/30dnej3.jpg'),
        },
        {
            original: require('./images/30dnej4.jpg'),
            thumbnail: require('./images/30dnej4.jpg'),
        }
    ];

    return (
        <div className="bands thirty-days">
            <div className='bands-container'>
                <br />
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <Link className='link-back' to="/emo">
                        <img src={require("../../../main-website/resources/pixels/zJZuQV8.gif")} style={{ height: '15px' }} alt='' />
                        <span >&nbsp;back to emo page&nbsp;</span>
                        <img src={require("../../../main-website/resources/pixels/zJZuQV8.gif")} style={{ width: '15px' }} alt='' />
                    </Link>
                </div>
                <div className="header">
                    <h id="head">30 дней февраля</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emocore, post-hardcore, russian <br />
                    <b> Годы активности: </b> 2004 – 2007 (3 года) <br />
                    <b> Место основания: </b> Москва, Россия <br />
                </div>
                <div className="data">
                    <br />
                    <div className="tab-bar radius">
                        <button className={toggleState === 1 ? "tab selected" : "tab"} onClick={() => toggleTab(1)}
                            data-text="О группе">
                            <span className="icon">О группе</span>
                        </button>
                        <button className={toggleState === 2 ? "tab selected" : "tab"} onClick={() => toggleTab(2)}
                            data-text="Дискография">
                            <span className="icon">Дискография / Тексты песен</span>
                        </button>
                        <button className={toggleState === 3 ? "tab selected" : "tab"} onClick={() => toggleTab(3)}
                            data-text="Видосы">
                            <span className="icon">Видосы</span>
                        </button>
                    </div>
                    <br />
                    <div className={"bands-data"}>
                        <div className="content-tabs">
                            <div
                                className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                                <div className={"Parent"}>
                                    <div style={{ width: '40%' }}>
                                        <div>
                                            <h3> Состав </h3>
                                            <ol className="rectangle">
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> (2004-2005) Стас, (2005-2007) Алексей</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} />(2004-2005) Паша, (2005-2007) Александр (Газон), Вадим </li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} />(2004-2005) Александр (Псих), (2005-2007) Антон (Клем)</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} />Александр</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div style={{ width: '60%', margin: '0 auto' }}>
                                        <div className="image-gallery-bands">
                                            <ImageGallery items={images} thumbnailPosition='right' originalWidth={50} slideInterval={1500} />
                                        </div>
                                    </div>
                                </div>
                                <h3> Биография </h3>
                                <br />
                                30.02 – одна из самых харизматичных эмо команд России. Родом из Москвы. Образована в конце января 2004. Множество выступлений, частые репетиции, преданная аудитория.
                                Пик популярности 30.02 приходится на 2005 год, когда ребята выпустили свою дебютную EP пластинку «Твоя сестра Саши», ставшую настоящим эталоном жанра.
                                В немногочисленных пресс-релизах группу характеризовали как «дерзкую, пронзительную, заставляющую сопереживать, историю чей-то околосердечной тоски».
                                <br /><br />
                                Группа «30 Дней февраля» одна из тех команд, которые уверенно развивались в течении своего существования. За небольшой отрезок времени, которые группа провела в непрерывных репетициях и промо выступлениях, у ребят появились преданные поклонники.
                                Ничего удивительного, ведь группа, объединяющая в себе энергетику The Used, Glassjaw и Finch просто обречена на успех.
                                <br /><br />
                                <div>
                                    Информация взята с <a href="https://www.last.fm/ru/music/30+Дней+Февраля"
                                        target="_blank"
                                        style={{ textDecoration: 'underline' }}
                                        title="переход на last.fm"
                                        rel="noopener noreferrer">last.fm </a>
                                </div>

                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <div className={"Parent"}>
                                <div className={"child1"}>
                                    <h3 style={{ textAlign: 'center' }}>Альбомы</h3>
                                    <ul type="none">
                                        <li>
                                            <div onClick={handleClickShowSongs1} className={'albumList'}><img
                                                src={require('./images/Твоя сестра Саши.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> Твоя сестра Саши (2005)
                                                {open1 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('2005')
                                                        ).map(u => (
                                                            <>
                                                                <li key={u.key}
                                                                    onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                            </>
                                                        ))}
                                                    </div>
                                                </ol>
                                            )}
                                        </li>
                                        <li>
                                            <div onClick={handleClickShowSongs2} className={'albumList'}><img
                                                src={require('./images/demo.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Singles/Demo
                                                {open2 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs2 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Demo')
                                                        ).map(u => (
                                                            <>
                                                                <li key={u.key}
                                                                    onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                            </>
                                                        ))}
                                                    </div>
                                                </ol>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                                <div className={"child2"} style={{ borderLeft: '1px solid gray' }}>
                                    {selectedSong ? <SongLyrics song={selectedSong} /> : <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        Нажми по альбому, чтобы открыть список песен. Нажми по песне, чтобы появился сам трек, текст песни (если он есть) и мой перевод (если он есть).
                                        <br />
                                        <img src={require('../../resources/heart-boy-smoking.gif')} style={{ height: "auto", width: '200px', margin: '0 auto', textAlign: 'center' }} alt={''} />
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <h4>30 Дней Февраля - Live in Red Club 28.04.2005</h4>
                                <br />
                                <iframe src="https://vk.com/video_ext.php?oid=-4782435&id=153106958" width="500" height="300" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                                <br /><br />
                                <h4>30 Дней Февраля - Так страшно за тебя (live at R-Club, 06.11.2005)</h4>
                                <br />
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/LhpD4eBaWYo?si=TM1xge5mQ6LBN3oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
