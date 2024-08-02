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

export function Kashtanka() {
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

    const images = [
        {
            original: require('./images/kashtanka1.jpg'),
            thumbnail: require('./images/kashtanka1.jpg'),
        },
        {
            original: require('./images/kashtanka2.jpg'),
            thumbnail: require('./images/kashtanka2.jpg'),
        },
        {
            original: require('./images/kashtanka3.jpg'),
            thumbnail: require('./images/kashtanka3.jpg'),
        },
        {
            original: require('./images/kashtanka4.jpg'),
            thumbnail: require('./images/kashtanka4.jpg'),
        },
        {
            original: require('./images/kashtanka5.jpg'),
            thumbnail: require('./images/kashtanka5.jpg'),
        },
        {
            original: require('./images/kashtanka6.webp'),
            thumbnail: require('./images/kashtanka6.webp'),
        },
    ];

    return (
        <div className="bands kashtanka">
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
                    <h id="head">Kashtanka</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, russian emo, screamo, post-hardcore <br />
                    <b> Годы активности: </b> 2015-present <br />
                    <b> Место основания: </b> Volgograd, Volgogradskaya oblast', Russia <br />
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
                                «Итак, наша мёртвая группа заняла третье место с альбомом "Взаимность" 2018-го года в топе десятых по версии подписчиков паблика Boring Emo. Спасибо всем, кто упоминал нас в голосовании.
                                <br /><br />
                                Вот вам по этому случаю маленькая история касательно записи этого альбома от барабанщика группы Антона. Возможно, некоторые подумают, что у нас зашкаливает ЧСВ, но, как говорится, из песни слов не выкинешь.
                                <br /><br />
                                "Перед тем, как ехать записывать барабаны, я позвонил Мише, и сказал:"Ты в курсе, что мы сейчас едем записывать один из великих эмо-альбомов?". Он спросил:"Да? Ты это чувствуешь?". И я ответил:"Да, я это чувствую"."
                                <br /><br />
                                Поэтому занимайтесь любимым делом, верьте в себя, не отступайте перед трудностями - и всё получится.
                                <br /><br />
                                Спасибо за внимание🖤»
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
                                                src={require('./images/Ошибки.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> ​О​ш​и​б​к​и​ (2016) {open1 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('​О​ш​и​б​к​и​')
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
                                                src={require('./images/Иже с нами.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />И​ж​е С Н​а​м​и​ (2016) {open2 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs2 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('И​ж​е')
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
                                                src={require('./images/Взаимность.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />В​з​а​и​м​н​о​с​т​ь​ (2018) {open3 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs3 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('В​з​а​и​м​н​о​с​т​ь​')
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
                                                src={require('./images/Прощай Вернись.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />П​р​о​щ​а​й​. В​е​р​н​и​с​ь (2020) {open4 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs4 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('П​р​о​щ​а​й​')
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
                                                src={require('./images/Вечное лето.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />В​е​ч​н​о​е л​е​т​о​ (Cover) (2020) {open5 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs5 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('В​е​ч​н​о​е')
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
                                <h4>Kashtanka: Цех live</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/Fxqsr6DqaLI?si=K6KtG_eafcm0VVfl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Kashtanka – Ошибки (Live, 16.10.2022, Бумажная фабрика, Москва)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/JUfk4F-OvBE?si=yEJj2PGTtUkUvny8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Прощальный концерт Каштанки (16.10.2022)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/iRt7ufFMHus?si=p9hOXfGrHeMdFP8e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
