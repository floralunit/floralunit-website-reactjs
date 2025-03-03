import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import AlbumListPage from "../../components/AlbumListPage";

export function BotanicheskySad() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/botsad2.webp'),
            thumbnail: require('./images/botsad2.webp'),
        },
        {
            original: require('./images/botsad1.webp'),
            thumbnail: require('./images/botsad1.webp'),
        },
        {
            original: require('./images/botsad3.webp'),
            thumbnail: require('./images/botsad3.webp'),
        },
        {
            original: require('./images/botsad4.webp'),
            thumbnail: require('./images/botsad4.webp'),
        },
        {
            original: require('./images/botsad5.jpg'),
            thumbnail: require('./images/botsad5.jpg'),
        },
    ];

    return (
        <div className="bands botanichesky-sad">
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
                    <h id="head">botanichesky sad</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, pop-punk, punk <br />
                    <b> Годы активности: </b> 2017 - 2020 (3 года) <br />
                    <b> Место основания: </b> Moscow, Russia <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://vk.com/botsadband" target="_blank" rel="noreferrer">vk</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://botsad.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                    </div>

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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Света Пахотина</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Артем Комов</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Коля Кемайкин</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Глеб Стрельцов</li>
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
                                "Ботанический сад" - российская поп-панк, панк-рок и эмо-рок-группа из Москвы, Россия.
                                <br /><br />
                                Выпустив свой первый альбом в июле 2017 года, "Ботанический сад" положили начало своей музыкальной карьере, выпустив одноименный альбом из шести песен.
                                <br /><br />
                                В состав группы входят Светлана “Света” Геннадиевна Пахотина (вокал), Артем Александрович Комов (гитара), Глеб Алексеевич Стрельцов (ударные) и Николай “Коля” Сергеевич Кемайкин (бас).
                                <br /><br />
                                Название "Ботанический сад" происходит от названия станции метро на Московском центральном кольце Московского метрополитена.
                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <><AlbumListPage albums={songsData} /></>
                        </div>
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <h4>botanichesky sad - Сегодня просто не мой день (LIVE - Punk Fiction - 28/09/2019)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/hkPaojGMUvw?si=WYiFOxMLsJw8mxLf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>ПОДПОЛЬЕ SESSIONS #3 - BOTANICHESKY SAD</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/arQ5NS7m8fk?si=cESqYbSkpenjUeco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>botanichesky sad - даю тебе слово (Music Video)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/QMK9v9QovCc?si=_5pgST-qHvdyEhFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Botanichesky Sad @ АНТИ | experience 2019</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/D24TuhJDTww?si=s-AfVHaD-NA8kT95" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

