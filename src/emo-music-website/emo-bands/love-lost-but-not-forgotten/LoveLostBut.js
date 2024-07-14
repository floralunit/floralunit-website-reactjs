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

export function LoveLostBut() {
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
            original: require('./images/lovelost1.webp'),
            thumbnail: require('./images/lovelost1.webp'),
        },
        {
            original: require('./images/lovelost2.webp'),
            thumbnail: require('./images/lovelost2.webp'),
        },
        {
            original: require('./images/lovelost3.webp'),
            thumbnail: require('./images/lovelost3.webp'),
        },
        {
            original: require('./images/lovelost4.webp'),
            thumbnail: require('./images/lovelost4.webp'),
        },
        {
            original: require('./images/lovelost5.webp'),
            thumbnail: require('./images/lovelost5.webp'),
        },
        {
            original: require('./images/lovelost6.webp'),
            thumbnail: require('./images/lovelost6.webp'),
        },
        {
            original: require('./images/lovelost7.webp'),
            thumbnail: require('./images/lovelost7.webp'),
        },
        {
            original: require('./images/lovelost8.webp'),
            thumbnail: require('./images/lovelost8.webp'),
        },
        {
            original: require('./images/lovelost9.webp'),
            thumbnail: require('./images/lovelost9.webp'),
        },
    ];

    return (
        <div className="bands love-lost">
            <div className='bands-container'>
                <br />
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <Link className='link-back' to="/emo">
                        <img src={require("../../../main-website/resources/pixels/rYgMZnK.gif")} style={{ height: '15px' }} alt='' />
                        <span >&nbsp;back to emo page&nbsp;</span>
                        <img src={require("../../../main-website/resources/pixels/rYgMZnK.gif")} style={{ width: '15px' }} alt='' />
                    </Link>
                </div>
                <div className="header">
                    <h id="head">Love Lost But Not Forgotten</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, emoviolence, metalcore, grindcore <br />
                    <b> Годы активности: </b> 1997–2003 (6 лет), 2005, 2008, 2010 <br />
                    <b> Место основания: </b> St. Peters, Missouri, U.S. <br />
                    <b> Лейблы: </b> Happy Couples Never Last, Normal Records <br />
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Nathan Prater</li>
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Mike Schmitz</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Scott Fogelbach</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Jason Emerick</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Chris Grady</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Matt Prater</li>
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
                                Love Lost but Not Forgotten - американская скримо-группа, образованная в 1997 году в пригороде Сент-Питерса, штат Миссури, из бывших участников End Over End и The Paxidils. Известные своей жестокостью на сцене и уникальным вокалом, которые обеспечивал состав, в который иногда входили два основных вокалиста (Пратер и Шмидт, оба были солистами группы на протяжении всей ее карьеры) и трио гитаристов (Фогельбах и Эмерик также всегда играли в группе). Группа совершила множество туров по Соединенным Штатам и выступала с такими группами, как Converge и Godflesh. С момента своего распада в 2003 году группа дала три различных кратких реюнион-концерта в 2005, 2008 и 2010 годах.
                                <br /><br />
                                Группа была образована в 1997 году в Сент-Питерсе, штат Миссури, вокалистами Майком Шмицем и Натаном Пратером, басистом Крисом Грейди, барабанщиком Мэттом Пратером и гитаристами Джейсоном Эмериком и Скоттом Фогельбахом. Группа приступила к записи двух демозаписей. Первая была выпущена в 1998 году, вторая, под названием Unfound, была выпущена в 1999 году. В том же году группа выпустила 7-дюймовый сплит-альбом с Джошуа Fit For Battle на лейбле Normal Records. В конце концов, группа приобрела Эй Джея Доерхоффа, своего третьего гитариста, и подписала контракт с Happy Couples Never Last. Их дебютный одноименный альбом был выпущен в июне 2000 года и получил высокую оценку андеграундной панк-сцены за свой стиль. Группа гастролировала с такими группами, как Pg. 99, и к 2002 году они выпустили третье демо, а также свой второй полноформатный альбом "Upon the Right, I Saw a New Misery". И Шмитц, и Доерхофф покинули группу еще до начала работы над альбомом. Хотя оба этих альбома уже вышли из печати, в конечном итоге они были переизданы в цифровом формате издательством Robotic Empire Archivist imprint.
                                <br /><br />
                                К августу 2002 года Мэтт Пратер покинул группу. Чтобы занять его место, группа наняла барабанщиков на короткий срок. К апрелю 2003 года группа взяла паузу. Это было связано с тем, что у отца Джейсона Эмерика в то время недавно обнаружили рак. Только в октябре того же года группа официально распалась. Их последнее выступление состоялось в июле 2003 года. После их распада Грейди и Фогельбах в последний раз выступили в группе. Фогельбах также присоединился к One Cycle Occurred. Натан Пейтер впоследствии присоединился к Unholy Effers.
                                <br /><br />
                                С момента своего распада в 2003 году группа трижды воссоединялась для проведения разовых концертов. Их первое воссоединение состоялось 15 января 2005 года в the Creepy Crawl, после того, как о нем было объявлено еще в декабре 2004 года. В состав группы вошли Фогельбах, Грейди, Эмерик, а также Натан и Мэтт Пратеры. Этот состав снова воссоединился, чтобы отыграть концерт в июле 2008 года в Fubar, заведении в Сент-Луисе, штат Миссури, которым управляет друг группы. Группа снова выступит в Fubar с благотворительным концертом 1 октября 2010 года.
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
                                                src={require('./images/Love Lost But Not Forgotten.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> Love Lost But Not Forgotten (2000) {open1 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Forgotten')
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
                                                src={require('./images/Upon the Right, I Saw a New Misery.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Upon the Right, I Saw a New Misery (2002) {open2 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs2 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Misery')
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
                                <h4>love lost but not forgotten live llbnf 7 4 01</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/2eJUeHTpszw?si=M1EtwVnsyrQLuSbO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>love lost but not forgotten live in NC 2001</h4>
                                <br />
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/sre7cwOwsVU?si=8uLlunydoKO5xwre" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
