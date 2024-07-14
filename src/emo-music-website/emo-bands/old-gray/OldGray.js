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

export function OldGray() {
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
            original: require('./images/oldgray2.webp'),
            thumbnail: require('./images/oldgray2.webp'),
        },
        {
            original: require('./images/oldgray3.webp'),
            thumbnail: require('./images/oldgray3.webp'),
        },
        {
            original: require('./images/oldgray1.webp'),
            thumbnail: require('./images/oldgray1.webp'),
        },
        {
            original: require('./images/oldgray4.webp'),
            thumbnail: require('./images/oldgray4.webp'),
        },
        {
            original: require('./images/oldgray5.webp'),
            thumbnail: require('./images/oldgray5.webp'),
        },
    ];

    return (
        <div className="bands old-gray">
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
                    <h id="head">Old Gray</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, midwest emo, twinkly <br />
                    <b> Годы активности: </b> 2011-2018 (7 лет) <br />
                    <b> Место основания: </b> Hooksett, New Hampshire, U.S. <br />
                    <b> Лейбл: </b> Flower Girl Records <br />
                    <b><a style={{ textDecoration: 'underline' }} href="https://oldgray.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Cameron Boucher</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Adam Ackerman</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Charlie Singer</li>
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
                                Old Gray - американская эмо-группа из Хуксетта и Оберна, штат Нью-Гэмпшир.
                                <br /><br />
                                Old Gray начали свою деятельность в 2011 году. Группа была образована Кэмероном Баучером, Чарли Сингером, Зейном Макдэниелом и Рафаэлем Бастеком. В 2013 году Баучер сформировал панк-группу Sorority Noise, в которой позже появился Сингер. Из-за заметного роста популярности Sorority Noise, Old Gray часто приходилось подолгу бездействовать, чтобы дать несколько разовых концертов. С тех пор они выпустили два полноформатных альбома, три мини-альбома, шесть сплитов и два сингла. Их дебютный альбом An Autobiography был выпущен в 2013 году. Их второй полноформатный альбом Slow Burn был выпущен 9 декабря 2016 года на лейбле Boucher's Flower Girl Records.
                                <br /><br />
                                В апреле 2018 года группа объявила о своих финальных концертах, но отменила их из-за психологического состояния Буше после того, как третья сторона заявила, что их друг подвергся сексуальному насилию. В декабре 2018 года эти утверждения были опровергнуты в совместном сообщении как Баучера, так и заинтересованного лица, заявив, что "на них было оказано давление, чтобы они сделали это заявление" и что "все, что произошло, не было целенаправленным или злонамеренным".

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
                                                src={require('./images/demo.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> Demo (2011) {open1 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Demo')
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
                                                src={require('./images/Do I Dare Disturb the Universe.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> Do I Dare Disturb the Universe (2011) {open2 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs2 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Universe')
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
                                                src={require('./images/Everything I Let Go & The Things I Refuse To.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />Everything I Let Go & The Things I Refuse To (2012) {open3 ?
                                                    <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs3 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Refuse')
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
                                                src={require('./images/An Autobiography.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />An Autobiography (2013) {open4 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs4 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Autobiography')
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
                                                src={require('./images/slow burn.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />slow burn (2016) {open5 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs5 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('burn')
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
                                                src={require('./images//singles.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} />singles/split {open6 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs6 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('singles')
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
                                <h4>Old Gray - "I Still Think About Who I Was Last Summer" Live at Little Elephant (1/3)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/BrMz4Jm1Dss?si=fiG_xhSZ-4RGHGQm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Old Gray - "Wolves" Live @ BLED Fest 2014</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/O5EBvZdyBgU?si=w8JkOrze_Siqy3S6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Old Gray - Live at Little Man's Garage 7/25/12</h4>
                                <br />
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/41MS8-lN3Cs?si=1Vo6npD-nk56vExu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
