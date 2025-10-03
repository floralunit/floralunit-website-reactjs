import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import AlbumListPage from "../../components/AlbumListPage";

export function Orchid() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');


    useEffect(() => {
        document.title = `Orchid | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/1.webp'),
            thumbnail: require('./images/1.webp'),
        },
        {
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
        },
        {
            original: require('./images/4.webp'),
            thumbnail: require('./images/4.webp'),
        },
        {
            original: require('./images/5.webp'),
            thumbnail: require('./images/5.webp'),
        },
        {
            original: require('./images/6.webp'),
            thumbnail: require('./images/6.webp'),
        },
        {
            original: require('./images/7.webp'),
            thumbnail: require('./images/7.webp'),
        },
        {
            original: require('./images/8.webp'),
            thumbnail: require('./images/8.webp'),
        },
        {
            original: require('./images/9.webp'),
            thumbnail: require('./images/9.webp'),
        }
    ];

    return (
        <div className="bands orchid">
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
                    <h id="head">Orchid</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, post-hardcore, emoviolence <br />
                    <b> Годы активности: </b> 1997–2002, 2024–present <br />
                    <b> Место основания: </b> Amherst, Massachusetts, U.S. <br />
                    <b> Лейблы: </b> Ebullition, Clean Plate <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.last.fm/music/Orchid/" target="_blank" rel="noreferrer">last.fm</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Jayson Green</li>
                                                <li> <img src={require('../../resources/instruments-images/synthesizer.png')} className={'instrument-image'} alt={''} /> Jayson Green, Will Killingsworth</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Will Killingsworth</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Brad Wallace, Geoff Garlock</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Jeffrey Salane</li>
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
                                <img src={require('./images/Chaos Is Me.png')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Orchid - американская скримо-группа из Амхерста, штат Массачусетс. Изначально группа существовала с 1997 по 2002 год, выпустив несколько мини-альбомов (EP), сплитов и три студийных альбома. В состав группы входят вокалист Джейсон Грин, барабанщик Джеффри Сэлейн, гитаристы Уилл Киллингсворт и Брэд Уоллес, а также басист Джефф Гарлок.                                <br /><br />

                                За время своего первоначального существования Orchid выпустили три полноформатных альбома и отыграли свой последний концерт в тот же день, когда вышел их финальный альбом. Группа воссоединилась для тура в 2024 году, впервые за 22 года.
                                <br /><br />
                                <h4>История</h4>
                                Группа была образована, когда Джейсон Грин, Уилл Киллингсворт и Брэд Уоллес учились в Хэмпшир-колледже, а Джефф Сэлейн - в Массачусетском университете в Амхерсте, в начале 1998 года.
                                <br /><br />
                                Orchid выпустили три альбома: Chaos Is Me в 1999 году, Dance Tonight! Revolution Tomorrow в 2000 году и Gatefold в 2002 году. Группа отыграла свой последний концерт в первоначальном составе 9 июля 2002 года, в день выхода Gatefold.
                                <br /><br />
                                В 2005 году посмертно был выпущен компиляционный альбом под названием Totality. Он состоял из 24 треков, включавших редкие и труднодоступные материалы с би-сайдов и сплитов, которые ранее были доступны только на виниле.
                                <br /><br />
                                Позже Джейсон Грин основал хардкор-панк супергруппу под названием Violent Bullshit с участниками групп Black Army Jacket и The Fiery Furnaces. Сейчас Джейсон Грин, Уилл Киллингсворт и Джефф Гарлок играют вместе в группе Ritual Mess.
                                <br /><br />
                                Грин записал вокал для песни «Pow Pow», ведущего сингла с альбома LCD Soundsystem This Is Happening 2010 года.
                                <br /><br />
                                Группа получала много предложений о воссоединении, самое выгодное из которых поступило от фестиваля Roadburn в Нидерландах, но Грин не рассказывал об этом своим товарищам по группе, так как они не были заинтересованы в возвращении. После интервью порталу Machine Music с Грином, Киллингсвортом и Уоллесом группа начала процесс воссоединения. В декабре 2023 года Orchid объявили о воссоединении и туре на 2024 год. Первый за 22 года концерт группы состоялся 5 мая 2024 года в клубе The Drake в Амхерсте, Массачусетс. Для концертов воссоединения оригинальный басист Брэд Уоллес вернулся в группу в качестве второго гитариста.
                                <br /><br />
                                <h4>Стиль</h4>
                                Музыкальный стиль Orchid - это диссонансный, быстрый и хаотичный звук. Он сочетает мелодичный и поэтичный подход пост-хардкора и эмо с экстремальностью пауэр-виоленса и грайндкора. Итальянский сайт "Emotional Breakdown" дал положительный отзыв о компиляции Orchid Totality, заявив: «Orchid - это концентрированная сущность самой пронзительной музыки, какую только можно представить: голосовые связки, которые напрягают до разрыва, музыка звучит мрачно и отчаянно. Они обладают всеми этими характеристиками как безоговорочные мастера, научившие многих последователей, во всей своей циничной красе».
                                <br /><br />
                                <h4>Наследие</h4>
                                Orchid считаются выдающейся и классической группой в жанре скримо. Ларс Готрич из NPR Music назвал Orchid важным влиянием на эмоциональный пост-хардкор. Сам Грин говорил: «Мы просто называли себя хардкор-группой».
                                <br /><br />
                                Канадская пост-хардкор группа Silverstein записала кавер на песню «Destination: Blood!» для своего альбома Short Songs. Также вышел трибьют-альбом Epilogue of a Car Crash!. Группа Piet Onthel записала кавер на «Weekend At The Fire Academy» для своего демо в 2018 году. Группа Letters of Marque записала кавер на «Lights Out» для благотворительной компиляции Spring Roots & Lullabies.
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
                                <h4>Orchid - Last Show Ever (Full Set) 7/9/02: Cambridge, MA</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/OTdt-PbcYZY?si=cXBgUmZF2F_6ib4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Orchid Live at Louis st house in New Brunswick NJ 8/3/1998</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/aW_BGdaD1PU?si=9lFldfhN5vVpPM51" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Orchid - Live at The Drake, Amherst [2024-05-05]</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/OZOZzzxOxGo?si=P88VfFs3FCCFBSgT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

