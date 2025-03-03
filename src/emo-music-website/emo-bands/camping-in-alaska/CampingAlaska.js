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

export function CampingAlaska() {
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
            original: require('./images/camping1.webp'),
            thumbnail: require('./images/camping1.webp'),
        },
        {
            original: require('./images/camping2.webp'),
            thumbnail: require('./images/camping2.webp'),
        },
        {
            original: require('./images/camping3.webp'),
            thumbnail: require('./images/camping3.webp'),
        },
        {
            original: require('./images/camping4.webp'),
            thumbnail: require('./images/camping4.webp'),
        },
        {
            original: require('./images/camping6.jpg'),
            thumbnail: require('./images/camping6.jpg'),
        }
    ];

    return (
        <div className="bands camping-in-alaska">
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
                    <h id="head">Camping in Alaska</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, midwest emo <br />
                    <b> Годы активности: </b> 2012–present <br />
                    <b> Место основания: </b> Huntsville, Alabama, U. S. <br />
                    <b> Лейблы: </b> Broken World Media <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://campinginalaska.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Austin Davis</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Austin Davis, Jacob Hill</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Eli Long</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Jacob Hill, Eli Long</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Jacob Stewart</li>
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
                                <img src={require('./images/WELCOME HOME SON.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Camping in Alaska — это американская эмо-группа из Хантсвилла, штат Алабама, основанная в 2012 году, оказавшая значительное влияние на жанр эмо-ревайвала.
                                <br /><br />
                                <h4>История</h4>
                                Участники группы Остин Дэвис и Джейкоб Стюарт встретились, когда им было 11 лет, на занятиях тхэквондо. Они изначально сблизились благодаря общему равнодушию к занятиям и интересу к панк-музыке. В 15 лет они начали писать музыку вместе. После того как они развили свой звук в гараже родителей Дэвиса, группа начала выступать на DIY-шоу на севере Алабамы с добавлением Бена Кейпа и Джейкоба Хилла. В 2013 году группа выпустила свой дебютный альбом "Please Be Nice" (написанный строчными буквами), который стал хитом среди эмо-сцены 2010-х годов после того, как песня "C U in da Ballpit" (также написанная строчными буквами) приобрела значительную популярность на YouTube. Демозапись изначально была записана в гараже мамы Дэвиса, прежде чем группа арендовала студию на несколько часов, чтобы записать альбом более профессионально. Группа заявила, что несмотря на успех "C U in da Ballpit", они все ненавидят эту песню. Песня изначально не планировалась для альбома; она была написана за два часа после того, как группа поняла, что переоценила время, необходимое для записи других песен, и решила использовать эту возможность, чтобы написать и записать еще одну.
                                <br /><br />
                                Кейп ушел вскоре после выхода "Please Be Nice", и группа выпустила свой второй альбом — "BATHE" (написанный заглавными буквами) — в 2014 году; альбом вскоре был подхвачен Broken World Media и переиздан на кассете с лейблом в 2015 году. В 2016 году группа выпустила "WELCOME HOME SON" (также написанный заглавными буквами), который имел более темный и серьезный тон по сравнению с предыдущими релизами; альбом в основном затрагивает темы зависимости, бездомности и утраты, так как все участники группы имеют опыт борьбы с зависимостями. Темный тон контрастирует с "Please Be Nice", который фокусируется на темах скейтбординга, школьной жизни и времяпрепровождения на парковках.
                                <br /><br />
                                После выхода "WELCOME HOME SON" последовал перерыв, вызванный употреблением наркотиков участниками группы, но в 2022 году — с добавлением Дани Фандре, партнерши Дэвиса — группа выпустила "Lost and Found", сборник акустических демозаписей, записанных между 2017 и 2018 годами. В 2023 году группа выпустила "Hollow Eyes" (снова написанный заглавными буквами), после чего последовал тур в честь десятилетия "Please Be Nice". Группа объявила, что их предстоящий альбом будет называться "Eggbeater Jesus", в честь местной настенной росписи на церкви в Хантсвилле; название было выбрано потому, что во время своей бездомности Дэвис спал на улице возле церкви в морозную погоду.
                                <br /><br />
                                <h4>Влияние</h4>
                                "Camping in Alaska" считается влиятельной группой для Midwest emo и движения эмо-ревивала, особенно их дебютный альбом, который был описан как культовая классика. Группа упоминала такие коллективы, как Sunny Day Real Estate, Modest Mouse, Fugazi, Pavement и Jawbreaker как свои влияния.
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
                                <h4>Camping In Alaska - c u in da ballpit live in Huntsville, Al 12/10/2022</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/xkwya8Y6T38?si=ROOrPbJy_N3hQfpl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Camping in Alaska (LIVE) - Kung Fu Necktie - "please be nice" 10 Year Anniversary Tour</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/v3dbJ4z9_nY?si=kGFFgi0V9je2AQZG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>camping in alaska live @ fete lounge 10/17/23</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/lxwah9eNOBs?si=htuDDboIxHadU5g5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Camping In Alaska - why can't i be snowing? LIVE</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/tz_-rysSo5c?si=SEd_O1Iqh9rL7hc2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

