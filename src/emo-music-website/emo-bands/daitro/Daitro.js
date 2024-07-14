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

export function Daitro() {
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
    const [isShownSongs4, setIsShownSongs4] = useState(false);
    const [open4, setOpen4] = useState(false);
    const handleClickShowSongs4 = () => {
        setIsShownSongs4(current => !current);
        setOpen4(open => !open);
    };
    const [isShownSongs5, setIsShownSongs5] = useState(false);
    const [open5, setOpen5] = useState(false);
    const handleClickShowSongs5 = () => {
        setIsShownSongs5(current => !current);
        setOpen5(open => !open);
    };
    const [isShownSongs6, setIsShownSongs6] = useState(false);
    const [open6, setOpen6] = useState(false);
    const handleClickShowSongs6 = () => {
        setIsShownSongs6(current => !current);
        setOpen6(open => !open);
    };

    const images = [
        {
            original: require('./images/daitro1.webp'),
            thumbnail: require('./images/daitro1.webp'),
        },
        {
            original: require('./images/daitro2.webp'),
            thumbnail: require('./images/daitro2.webp'),
        },
        {
            original: require('./images/daitro3.webp'),
            thumbnail: require('./images/daitro3.webp'),
        },
        {
            original: require('./images/daitro4.webp'),
            thumbnail: require('./images/daitro4.webp'),
        },
        {
            original: require('./images/daitro5.webp'),
            thumbnail: require('./images/daitro5.webp'),
        },
    ];

    return (
        <div className="bands daitro">
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
                    <h id="head">Daïtro</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo <br />
                    <b> Годы активности: </b> 2000-2012 (12 лет) <br />
                    <b> Место основания: </b> Lyon, France <br />
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Aurelien Verdant </li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Samuel </li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Julien Paget </li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Gwenaël Grosclaude </li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Benoît Desvignes </li>
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
                                Daïtro (альт. Daitro) — французская скримо-группа из Лиона, объединившая в своём звучании хаотический диссонанс эмоционального хардкора и элементы мелодичного пост-рока.
                                <br /><br />
                                Три друга и три подростка, Жульен, Бенуа и Самуэль искали себе занятие в своей маленькой деревне. Не зная ничего о музыке, хардкоре и DIY сцене, они решили учиться играть на инструментах. Прошло три года. Группа образовалась в 2000 году в Лионе, и состояла из 4х человек. Основателем группы считается Жульен, именно он, до 2004 года, не только играл на гитаре, но ещё и пел. В январе 2004 года к группе присоединился бывший вокалист группы Gantz, Аурелиен (Aurélien). В это же время, накануне большого европейского тура, из группы ушёл бас-гитарист Томас (Thomas), на его место пришёл старый друг Жульена – Гвен (Gwen), который до этого играл в фаст-хардкорной группе Simfela. Гвен должен был на время тура заменить бас-гитару, но как оказалось позже, в надобности искать кого-то ещё на это место, было не нужно. Так образовался конечный состав.
                                <br /><br />
                                По их словам на них больше всего повлияли такие группы как Yage, 12 Hour Turn, Breach.
                                В мае 2006 года Daitro отправились в весенний тур по Японии, по приглашению Йоши (Yoshi), владельца Токийского DIY лейбла «oto Records». Они пробыли там 2 недели и отыграли 10 выступлений совместно с Heaven In Her Arms, Missing You Is Killing Me, Endzweck и killie. По этому случаю Йоши и его лейбл выпустили японское издание альбома «Laisser Vivre Les Squelettes» на CD. В декабре 2007 года, ребята выступали по Германии, совместно с Sed Non Satiata и специально приглашёнными гостями из Японии - Heaven In Her Arms.
                                Последней работой стал сплит с Sed Non Satiata. Сплит готовился длительное время при поддержке одной Итальянской социальной организации, по планам группы релиз должен был состояться летом, однако в свете каких-то причин, а скорее всего денежных, официальный релиз был отложен до зимы. Не официальный релиз состоялся, конечно же, раньше, пара копий диска были проданы на выступлениях, и уже спустя короткий промежуток времени, в сети появились первые рипы. Этот сплит стал завершающим штрихом в существовании группы и самым бесценным. Этот релиз был задуман как благотворительный. Вырученные средства во Франции пошли в помощь различным социальным организациям, в Тулузе – глухим людям, в Бергамо – детям страдающим аутизмом. В Америке средства от продаж винила пошли детям, которые потеряли свои семьи.
                                Сплит был издан на CD и LP и был выпущен на Echo Canyon Records, дистро и DIY лейбле, организаторами, которого являются Гвен и Жульен. Так же Жульен организовал новую группу 12XU, совместно с друзьями с Hugues/Puzzle records, и пока что не ясно сайд - проект это, или же Daitro пришел конец. Он же занимается оформлением для различных DIY групп.
                                <br /><br />
                                В декабре 2008 года на официальном сайте появилось сообщение о готовящемся сплите с группой Daniel Striped Tiger. Однако уже целый год, новостей и обновлений каких-либо нет на этот счёт.
                                <br /><br />
                                Они поют и играют музыку с социальным и политическим подтекстом. Однако это не дает повода называть их полит - группой. Основная их цель помочь тем, кто нуждается. Работать, сочинять и делать музыку, для того чтобы заработать и отдать эти деньги, тем кто находится в беде, это большое дело. Которое ценят немногие, но эта борьба не ради славы, всё это делается, потому что у ребят большое сердце и чистая душа.
                                <br /><br />
                                Нашелся ответ, почему у группы до сих пор нет, да и не будет странички на ресурсе MySpace.
                                Жульен: «Знаете, некоторые люди пытались создать страничку, но мы просили их удалить её. Может я слишком и старомоден, и я не понимаю чего-то. Показывать свою популярность, тем, что у тебя больше 2000 друзей? Получать 30 сообщений в день от людей, которые говорят, что у вас замечательная группа и задавать один и тот де вопрос « когда вы приедете к нам в город выступить?» Я так же не понимаю, зачем люди уделяют столько времени этому. Вёб-профиль становится важнее чем то что ты делаешь для местной сцены».
                                <br /><br />
                                Факт! Daito, никогда не были в Австралии. Хотя и имели возможность и приглашения. И всё потому что у Гвена фобия к змеям.
                                <br /><br />
                                <div>
                                    Информация взята с <a href="https://www.last.fm/ru/music/Da%C3%AFtro"
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
                                                src={require('./images/Des Cendres, Je Me Consume.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> Des Cendres, Je Me Consume (2003) {open1 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Cendres')
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
                                                src={require('./images/split w Raein.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />split w/ Raein (2004) {open2 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs2 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Raein')
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
                                                src={require('./images/Laisser Vivre Les Squelettes.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Laisser Vivre Les Squelettes (2005) {open3 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs3 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Squelettes')
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
                                            <div onClick={handleClickShowSongs4} className={'albumList'}><img
                                                src={require('./images/US tour 7 inch.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />US tour 7 inch (2007) {open4 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs4 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('US')
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
                                            <div onClick={handleClickShowSongs5} className={'albumList'}><img
                                                src={require('./images/split w Sed Non Satiata.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />split w/ Sed Non Satiata (2007) {open5 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs5 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Satiata')
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
                                            <div onClick={handleClickShowSongs6} className={'albumList'}><img
                                                src={require('./images/Y.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Y (2009) {open6 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs6 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('2009')
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
                                <h4>Daïtro - nous sommes d'ici (live at kita kyushu - japan)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/5wPc8iVYD6s?si=kL1LM3eSdaxTtf0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/pH4O7giNoNc?si=Cow81aykQkeHshqt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
