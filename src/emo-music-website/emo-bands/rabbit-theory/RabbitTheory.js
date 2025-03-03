import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import AlbumListPage from "../../components/AlbumListPage";

export function RabbitTheory() {
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
            original: require('./images/logo.gif'),
            thumbnail: require('./images/logo.gif'),
        },
    ];

    return (
        <div className="bands rabbit-theory">
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
                    <h id="head">The Rabbit Theory</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, post rock, indie rock <br />
                    <b> Годы активности: </b> 2005–2013 (8 лет) <br />
                    <b> Место основания: </b> Zürich, Switzerland <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://web.archive.org/web/20060622083603/http://www.quiet.ch/therabbittheory/" target="_blank" rel="noreferrer">site</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://therabbittheory.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
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
                                <h3> Биография </h3>
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'column', float:'left' }}>
                                    <img src={require('./images/logo1.gif')} style={{ width: '170px', margin: '0 20px' }} alt={''} />
                                    <img src={require('./images/logo.gif')} style={{ width: '170px', margin: '0 20px' }} alt={''} />
                                </div>
                                "The Rabbit Theory" — это трехголовый и шестиногий робот, сражающийся за надежду против ветряных мельниц, идиотизма и разочарования с помощью громких барабанов, резкой, но все же ревущей гитары, глубокого и мощного баса и едва ли не напевных/криковых вокалов. Назовите это мат-роком с инди-акцентом. Назовите это инди-роком с пост-роковой ноткой. Назовите это пост-хардкором с солнечной стороны. В условиях обновленной тенденции к несостоятельности и безразличию их песни, конечно же, затрагивают эти темы. Тем не менее, время от времени встречаются и интроспективные композиции.
                                <br /><br />
                                На данный момент "The Rabbit Theory" записали 6 песен в формате DIY в известном цюрихском андеграундном пространстве около февраля 2005 года при температуре едва 4 градуса. Эти записи доступны для загрузки на их сайте. В ноябре 2005 года было записано еще 7 песен в DIY-формате в репетиционном помещении, сведенном в студии, название которой они забыли, Робом Александером и отмастерено Андреасом Тиллиандером в Repeatle Studios в Стокгольме, Швеция. 2 песни были выпущены 28 января 2006 года как часть ограниченного и пронумерованного сплита 7" с Dying In Motion (ZH) на Quiet Records (QR.016-7, 200 экз.), 4 песни из этой сессии попали на пронумерованный и ограниченный CD-R EP (QR.017-CDR, 50 экз., распродан). Договор о дистрибуции был заключен с Ape Must Not Kill Ape. В сентябре 2006 года "The Rabbit Theory" запишут саундтрек для анимационного фильма художника из Цюриха Кристиана Эберхарда. Позже будет записано около 7 песен, которые выйдут на: 1) сборнике для/от Ape Must Not Kill Ape Records, 2) DIY-кассетной компиляции для/от лейбла из Мюнхена, 3) сплите 12" с друзьями Pete The Pirate Squid из Дрездена, Берлина и Мальмё.
                                <br /><br />
                                "The Rabbit Theory" сыграли около 20 концертов за 1.5 года живых выступлений. В июле 2006 года они успешно провели DIY-тур по Германии и Бельгии на протяжении 10 дней. (Это означает: мы все еще играем вместе и на самом деле нам это нравится...)
                                <br /><br />
                                <h4>Вещи, которые нам нравятся:</h4>
                                Группы такие как Fugazi, Rites of Spring, Radiohead, Sonic Youth, Margate, The Casket Lottery, Minor Threat, The Crystal Committee, Rilo Kiley, Bright Eyes, Mates of State, Pele, Aloha, Alias, Clouddead, The Je Ne Sais Quoi, Your Halo is a Radar, Ed Greene, Seven Feet Four, Rosebud, Fingerpoke, Solitune, Lem Phago, Favez, Chewy, Pendleton, Toboggan, Honey for Petzi, Kvlr, Royal Downfall, Dani Göldin & Bit-Tuner, Descendents / All, Sektion Kuchikäschtli, Pretty Girls Make Graves, Bloc Party (несмотря на хайп), Mano Negra, Awol One, Sole, Düreförsög, Quicksand, Alarma Man, Salty Pirates, Sleater-Kinney, Bikini Kill, Team Dresch, Liz Phair, Isolation Years, Britta Persson, Fireside, Up-C Down-C, Shokei, Pete The Pirate Squid, Notwist, Sometree, Sans Secours, Karate, The Van Pelt, Helmet, Lali Puna, Gorilla Biscuits, Afghan Whigs, Motorpsycho, Smashing Pumpkins, Ton Steine Scherben, Yage, Jimmy Eat World, Dag Nasty, Ms. John Soda, Texas Is The Reason, Pop Unknown, Get Up Kids, Lemonheads, Juno, Hot Water Music, Mineral, Hüsker Dü, Starmarket, Time Spent Driving, Brandtson, Drive Til Morning, The Cardigans, Olavi Vierta, Logh и Nada Surf. Нам также нравятся лампы из секонд-хендов 50-х годов, речи и книги Ноама Хомского, чтение в целом, выполнение дел в формате DIY, изучение нового, помощь другим и коллективная работа, справедливость и хорошие тексты песен.
                                <br /><br />
                                <h4>Вещи, которые нам не нравятся:</h4>
                                Идиоты. Невежливые идиоты (думаю, это уже включено в категорию идиотов). Жадность. Тоталитаризм в любом его проявлении. Многонациональные компании без заботы о людях. Приватизация общественных благ и в целом деньги и их влияние на то, как люди относятся друг к другу и к миру. Некоторые из нас не одобряют идею о том, что животных мучают и убивают ради небольшой доли аппетита.
                                <br /><br />
                                Спасибо за ваш интерес.
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
                                <h4>the rabbit theory - the bridge between the two peaks of mount kilimanjaro</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/bgX6-xVkH8E?si=LQ5ssRfEwkrp31pW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>the rabbit theory - vad fan hände med att förändra världen?</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/2z-pMZnXRac?si=oTVyAUNu6iaJ6mUh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Maybe Tomorrow (cover) - The Rabbit Theory - Live</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/IKMPPod0iv8?si=II7ATRSNj3yTqCf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

