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

export function Asthenia() {
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
            original: require('./images/asthenia1.webp'),
            thumbnail: require('./images/asthenia1.webp'),
        },
        {
            original: require('./images/asthenia2.webp'),
            thumbnail: require('./images/asthenia2.webp'),
        },
        {
            original: require('./images/asthenia3.webp'),
            thumbnail: require('./images/asthenia3.webp'),
        },
        {
            original: require('./images/asthenia4.webp'),
            thumbnail: require('./images/asthenia4.webp'),
        },
        {
            original: require('./images/asthenia15.webp'),
            thumbnail: require('./images/asthenia15.webp'),
        },
        {
            original: require('./images/asthenia6.webp'),
            thumbnail: require('./images/asthenia6.webp'),
        },
        {
            original: require('./images/asthenia7.png'),
            thumbnail: require('./images/asthenia7.png'),
        },
    ];

    return (
        <div className="bands asthenia">
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
                    <h id="head">Asthenia</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, hardcore, screamo <br />
                    <b> Годы активности: </b> 2010-present <br />
                    <b> Место основания: </b> Tokyo, Japan <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://astheniatokyo.wordpress.com/" target="_blank" rel="noreferrer">site</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://astheniatokyo.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Hiroshi Sasagawa, Shintaro Fukusato, Rakuya Katagiri</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Hiroki Tajiri</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Rakuya Katagiri</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Shintaro Fukusato</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Kent Fujita</li>
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
                                Asthenia (от др.-греч. ἀσθένεια — бессилие) - это эмо-хардкор группа из Токио, Япония.
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
                                <h4>asthenia - Live at Koiwa BushBash, 5/21/2022</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/PnDL1ejt6Eo?si=dcw80gU26umJQY3u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>asthenia "生活" 2019.11.23</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/lvrN47QDIx4?si=ZJrs16VTL8AVldtB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Asthenia UK tour Documentary -teaser-</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/gMljgyud9BM?si=7vKy_KZS1zPCOlir" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

