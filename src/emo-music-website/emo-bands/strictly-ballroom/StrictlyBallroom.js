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

export function StrictlyBallroom() {
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
    const [isShownSongs3, setIsShownSongs3] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleClickShowSongs3 = () => {
        setIsShownSongs3(current => !current);
        setOpen3(open => !open);
    };

    const images = [
        {
            original: require('./images/strictly6.webp'),
            thumbnail: require('./images/strictly6.webp'),
        },
        {
            original: require('./images/strictly1.webp'),
            thumbnail: require('./images/strictly1.webp'),
        },
        {
            original: require('./images/strictly2.webp'),
            thumbnail: require('./images/strictly2.webp'),
        },
        {
            original: require('./images/strictly3.webp'),
            thumbnail: require('./images/strictly3.webp'),
        },
        {
            original: require('./images/strictly4.webp'),
            thumbnail: require('./images/strictly4.webp'),
        },
        {
            original: require('./images/strictly5.webp'),
            thumbnail: require('./images/strictly5.webp'),
        },
        {
            original: require('./images/strictly7.webp'),
            thumbnail: require('./images/strictly7.webp'),
        },
        {
            original: require('./images/strictly8.webp'),
            thumbnail: require('./images/strictly8.webp'),
        },
    ];

    return (
        <div className="bands strictly-ballroom">
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
                    <h id="head">Strictly Ballroom</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, indie emo, post rock, screamo <br />
                    <b> Годы активности: </b> 1994-1999, 2001 (5 лет) <br />
                    <b> Место основания: </b> Los Angeles, California, U.S <br />
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Chris Gunst, <br />Jimmy Tamborello </li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Chris Gunst, <br />Koji Motonishi (1995-96), <br />Paul Larson (1996-99)</li>
                                                <li> <img src={require('../../resources/instruments-images/synthesizer.png')} className={'instrument-image'} alt={''} /> Jimmy LaValle (1998-99)</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Jimmy Tamborello </li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Brian Tamborello (1994-95), <br />Ian MacKinnon (1995-98), <br />Chris Hathwell (1998-99), Jimi Hey (1997-99)</li>
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
                                Strictly Ballroom - андеграундная эмо/хардкор панк/инди рок группа из Лос-Анджелеса, штат Калифорния, существовавшая с 1994 по 1999 год.
                                <br />
                                <br />
                                Группа была образована в 1994 году Крисом Гунстом (гитара/вокал) и Джимми Тамборелло (бас/вокал), которые встретились, когда оба работали диджеями на студенческом радио KXLU в Лос-Анджелесе. Звук группы был описан прессой и некоторыми фанатами как "Enocore" из-за их использования звуковых ландшафтов, напоминающих Брайана Ино, смешанных с звуками хардкор панка. Strictly Ballroom была связана с эмо хардкор сценой середины и конца 1990-х годов и выступала в известных клубах, таких как Jabberjaw в Лос-Анджелесе. Гунст позже основал группу Beachwood Sparks, а Тамборелло — Postal Service. Оба проекта впоследствии выпустили альбомы на лейбле Sub Pop Records, последний из которых получил платиновую сертификацию от Ассоциации звукозаписывающей индустрии Америки.
                                <br />
                                <br />
                                По словам Тони Киуэла, президента Sub Pop Records, "Strictly Ballroom не очень часто покидали Калифорнию, но они были довольно влиятельной частью местной музыкальной сцены, пока существовали. Достаточно сказать, что есть странная группа людей, которые были очень близки и активно участвовали в этой маленькой сцене и все они продолжили заниматься относительно интересными вещами."
                                <br />
                                <br />
                                Первоначальный состав включал младшего брата Тамборелло, Брайана Тамборелло, на ударных. Иан Макиннон (также диджей KXLU в то время) позже заменил младшего Тамборелло. Кодзи Мотониши присоединился на гитаре в 1995 году. Мотониши ушел в 1996 году, его заменил Пол Ларсон. Около 1997 года Хосе Сальгеро (также диджей KXLU в то время) присоединился на вертушках, а Джими Хей — на ударных и клавишах. В 1998 году к группе присоединился Джимми Лаваль на клавишах, а Макиннон ушел, его заменил Крис Хэтвелл. Strictly Ballroom распалась в 1999 году, но участники продолжили сотрудничать и присоединяться к другим музыкальным проектам.
                                <br />
                                <br />
                                <h4>Использование песен в других медиа</h4>
                                <br />
                                В 2022 году Vans использовала две песни Strictly Ballroom — "Fire (Remix) (1997)" и "New Angels (1995)" в короткометражном фильме по сноуборду "It's Love". Короткометражка, снятая Таннером Пендлтоном и частично отснятая в Исландии, демонстрирует стильное уличное катание на сноуборде.
                                <br />
                                <br />
                                В 2023 году журнал Thrasher использовал песню Strictly Ballroom "New Angels (1995)" в видеоролике о скейтбординге "Lad is Pro as", который представляет новоиспеченного профессионального австралийского скейтбордиста Роуэна Дэвиса в его дебютной профессиональной части для Girl Skateboards.
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
                                                src={require('./images/Strictly Ballroom.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> Strictly Ballroom (1995) {open1 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('1995')
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
                                                src={require('./images/7.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />7'' (1996) {open2 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs2 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes("1996")
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
                                            <div onClick={handleClickShowSongs3} className={'albumList'}><img
                                                src={require('./images/Hide Here Forever.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Hide Here Forever (1997) {open3 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs3 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('1997')
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
                                <h4>Strictly Ballroom Band History</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/I74lMkfZJeI?si=JhWU5Xtpphg3e2M8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Strictly Ballroom (Live at The Smell 3.17.1999)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/eU9xa6dxVMQ?si=DIiuApT7EzJXY5TD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Strictly Ballroom -live (1/4) 5/22/98 Hollywood Athletic Club, Los Angeles, CA</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/IS5y_Wnel1k?si=MF4NHsrgwAfPbckR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
