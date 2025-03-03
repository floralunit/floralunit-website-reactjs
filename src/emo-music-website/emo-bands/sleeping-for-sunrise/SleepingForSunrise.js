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

export function SleepingForSunrise() {
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
            original: require('./images/sleeping1.webp'),
            thumbnail: require('./images/sleeping1.webp'),
        },
        {
            original: require('./images/sleeping2.jpg'),
            thumbnail: require('./images/sleeping2.jpg'),
        }
    ];

    return (
        <div className="bands sleeping-for-sunrise">
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
                    <h id="head">Sleeping for Sunrise</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo90s, midwest emo, indie emo <br />
                    <b> Годы активности: </b> 1997-2002 (5 лет) <br />
                    <b> Место основания: </b> Chicago, Illinois, U. S. <br />
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Blake Zweig</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Blake Zweig</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> James Konczyk</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Jay Ranz</li>
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
                                «Sleeping For Sunrise» (с англ. — «Сон на рассвете») — американская инди-эмо-рок-группа, основанная в 1997 году в городе Уилинг, Иллинойс. Известна русским зрителям по появлению в фильме Алексея Балабанова «Брат 2» в клубе «Metro» со свой песней «Lafayette».
                                <br /><br />
                                Группа была основана в 1997 году Блейком Цвейгом, Джеем Ранцем и Джим Кончиком, когда они учились в Университете штата Иллинойс. Первый альбом был записан в этои же году под названием «Sleeping For Sunrise» с тремя песнями. В 1998 году вышел альбом «Skyline Symmetry» с 10 песнями, включая «Lafayette». Группа играла в стиле мидвест-эмо, набиравший популярность на Среднем Западе и в Иллинойсе в частности. Группа просуществовала около 5 лет, выступая с такими группами, как Braid, Promise Ring, American Football и другими инди-эмо-мемо-рок-группами той эпохи.
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
                                <h4>Sleeping For Sunrise – Lafayette БРАТ 2</h4>
                                <br />
                                <iframe src="https://vk.com/video_ext.php?oid=-89203441&id=456240517&hd=1&autoplay=1" width="500" height="300" allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Sleeping For Sunrise Live at The Down Under Bar Columbia, MO May 20th 1997</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/I0tn9FPGKXs?si=a-jMW50GlIjKbdx3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

