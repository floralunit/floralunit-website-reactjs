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

export function EORA() {
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
    const [isShownSongs7, setIsShownSongs7] = useState(false);
    const [open7, setOpen7] = useState(false);
    const handleClickShowSongs7 = () => {
        setIsShownSongs7(current => !current);
        setOpen7(open => !open);
    };
    const [isShownSongs8, setIsShownSongs8] = useState(false);
    const [open8, setOpen8] = useState(false);
    const handleClickShowSongs8 = () => {
        setIsShownSongs8(current => !current);
        setOpen8(open => !open);
    };

    const images = [
        {
            original: require('./images/eora2.jpg'),
            thumbnail: require('./images/eora2.jpg'),
        },
        {
            original: require('./images/eora1.webp'),
            thumbnail: require('./images/eora1.webp'),
        },
        {
            original: require('./images/eora3.jpg'),
            thumbnail: require('./images/eora3.jpg'),
        },
        {
            original: require('./images/eora4.jpg'),
            thumbnail: require('./images/eora4.jpg'),
        },
        {
            original: require('./images/eora5.jpg'),
            thumbnail: require('./images/eora5.jpg'),
        }
    ];

    return (
        <div className="bands eora">
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
                    <h id="head">EORA</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, post-metal, post-hardcore, emocore <br />
                    <b> Годы активности: </b> 2010-present <br />
                    <b> Место основания: </b> Kirov, Kirovskaya oblast', Russia <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://vk.com/eoraband/" target="_blank" rel="noreferrer">vk</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://eora.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Вадим Козырев, Станислав Козырев, Евгений Казаковцев</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Станислав Козырев</li>
                                                <li> <img src={require('../../resources/instruments-images/synthesizer.png')} className={'instrument-image'} alt={''} /> Вадим Козырев</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Алексей Изместьев</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Евгений Казаковцев</li>
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
                                <img src={require('./images/eora.jpg')} style={{ float: 'left', width: '120px', margin: '0 20px' }} alt={''} />
                                EORA - одна из значимых фигур российского скримо, была образована в 2010 году в Кирове и быстро завоевала внимание поклонников благодаря своему уникальному звучанию и эмоциональной подаче. Музыка EORA сочетает в себе элементы эмо и скримо, что позволяет им создавать глубокие и насыщенные музыкальные композиции, наполненные искренними текстами и мощной энергетикой.
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
                                                src={require('./images/Мы н​и​к​о​г​д​а не б​ы​л​и с​ч​а​с​т​л​и​в​ы з​д​е​с​ь.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> Мы н​и​к​о​г​д​а не б​ы​л​и с​ч​а​с​т​л​и​в​ы з​д​е​с​ь (2011) {open1 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('с​ч​а​с​т​л​и​в​ы')
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
                                                src={require('./images/П​о​с​л​е​д​с​т​в​и​я.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />П​о​с​л​е​д​с​т​в​и​я (2012) {open2 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs2 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('П​о​с​л​е​д​с​т​в​и​я')
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
                                                src={require('./images/Н​а​г​р​а​д​а за в​е​р​н​о​с​т​ь.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Н​а​г​р​а​д​а за в​е​р​н​о​с​т​ь (2013) {open3 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs3 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('в​е​р​н​о​с​т​ь')
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
                                                src={require('./images/Split w. Ravin, Elephant Opinions & H​ý​aena.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Split w. Ravin, Elephant Opinions & H​ý​aena (2014) {open4 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs4 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Ravin')
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
                                                src={require('./images/Split w. Yarn of Norna.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Split w. Yarn of Norna (2014) {open5 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs5 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Norna')
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
                                                src={require('./images/В​с​ё​, ч​е​г​о я б​о​я​л​с​я.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />В​с​ё​, ч​е​г​о я б​о​я​л​с​я (2015) {open6 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs6 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('б​о​я​л​с​я')
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
                                            <div onClick={handleClickShowSongs7} className={'albumList'}><img
                                                src={require('./images/У​т​е​ш​е​н​и​е.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />У​т​е​ш​е​н​и​е (2022) {open7 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs7 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('У​т​е​ш​е​н​и​е')
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
                                            <div onClick={handleClickShowSongs8} className={'albumList'}><img
                                                src={require('./images/пальцы.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Пальцы (2023) {open8 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs8 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Пальцы')
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
                                <h4>EORA - Всё, чего я боялся (Official Live Video)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/R-BxGU-Jx6U?si=GxD1wjSRwz8WufkS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>eora - не забыть. не смириться\и ты не вспомнишь мое лицо (live 27.05.15 Zoccolo 2.0)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/1RFS2oJG6nM?si=LelwjMxKjx9yO_YU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Eora - О том, что никогда не случится @ Ласточка(18.06.22)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/sQstzF8FeTM?si=w28zbO9FvLwex_ZF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

