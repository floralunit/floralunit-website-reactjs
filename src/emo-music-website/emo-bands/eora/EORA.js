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

export function EORA() {
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
                            <><AlbumListPage albums={songsData} /></>
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

