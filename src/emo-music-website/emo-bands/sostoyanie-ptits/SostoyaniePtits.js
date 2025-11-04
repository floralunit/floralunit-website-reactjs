import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import AlbumListPage from "../../components/AlbumListPage";

export function SostoyaniePtits() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `состояние птиц | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/1.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/1.jpg'),
            thumbnail: require('./images/1.jpg'),
        },
        {
            original: require('./images/2.jpg'),
            thumbnail: require('./images/2.jpg'),
        },
        {
            original: require('./images/3.jpg'),
            thumbnail: require('./images/3.jpg'),
        },
        {
            original: require('./images/4.jpg'),
            thumbnail: require('./images/4.jpg'),
        },
        {
            original: require('./images/5.jpg'),
            thumbnail: require('./images/5.jpg'),
        },
        {
            original: require('./images/6.jpg'),
            thumbnail: require('./images/6.jpg'),
        }
    ];

    return (
        <div className="bands sostoyanie-ptits">
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
                    <h id="head">состояние птиц</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, hardcore, punk <br />
                    <b> Годы активности: </b> 2009 – 2013 <br />
                    <b> Место основания: </b> Saint Petersburg, Russia <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://bsos.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://vk.com/sostoyanieptic/" target="_blank" rel="noreferrer">vk.com</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://atomiqueband.bandcamp.com//" target="_blank" rel="noreferrer">bandcamp atomique</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://vk.com/atomiquepunk/" target="_blank" rel="noreferrer">vk.com atomique</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://serpukhovskayadrive.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp Серпуховская Драйв</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://vk.com/serpukhovskayadrive/" target="_blank" rel="noreferrer">vk.com Серпуховская Драйв</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> ?</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> ?</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> ?</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> ?</li>
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
                                <img src={require('./images/Self-titled.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Группа образовалась в 2009 году в городе Санкт-Петербург, Россия. Довольно тяжело однозначно охарактеризовать жанр группы.
                                <br /><br />
                                В 2010 году был выпущен безымянный EP, содержащий 5 композиций.
                                В начале 2011 года ребята выпускают второй EP, содержащий 3 композиции.
                                20 ноября 2011 года выходит сплит с шведской командой Heart On My Sleeve, содержающий 3 композиции от состояния птиц и 2 композиции от Heart On My Sleeve.
                                К концу лета 2012 выходит дебютный полноформатный релиз, а также 24 августа 2012 года ребята выступают на одной сцене со шведами Suis La Lune.
                                <br /><br />
                                К сожалению, 24 мая 2013 года группа заявила о прекращении своего существования.
                                <br /><br />
                                В 2019 году вышел альбом Под одеялом пространства экспериментальной эмо/пост блэк-метал группы Atomique, состоящей из бывших участников состояние птиц (Гоши, Димы и Сереги).
                                <br /><br />
                                Также из бывших участников состояние птиц была сформирована эмо-шугейз группа Серпуховская Драйв, и в 2022 вышел альбом Всё Равно.
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
                                <h4>🌲 #135 Состояние Птиц: главная отечественная группа моей души | ХВОЯ ПОДКАСТ</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/FjCPPdMFWco?si=YhyoERV4fipok7Xd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>Состояние Птиц - Dusche, St-Petersburg 24.08.12</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/H1BSEcdu9dw?si=j_hZD2snAhBUJWWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Состояние Птиц - Zoccolo, St. Petersburg 6.02.12</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/NNrZVRbCoyc?si=3UlQ1s29ROYpHV38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>СЕРПУХОВСКАЯ ДРАЙВ 10/09/23 клуб ЛАСТОЧКА</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/m8l7-I7p_ic?si=QOMt_gd2kAH2qPxm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

