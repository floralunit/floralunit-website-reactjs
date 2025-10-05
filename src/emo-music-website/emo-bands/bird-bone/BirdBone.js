import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import AlbumListPage from "../../components/AlbumListPage";

export function BirdBone() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Bird Bone | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/1.jpg'),
            thumbnail: require('./images/1.jpg'),
        },
        {
            original: require('./images/3.jpg'),
            thumbnail: require('./images/3.jpg'),
        },
        {
            original: require('./images/2.jpg'),
            thumbnail: require('./images/2.jpg'),
        },
        {
            original: require('./images/4.jpg'),
            thumbnail: require('./images/4.jpg'),
        },
        {
            original: require('./images/5.jpg'),
            thumbnail: require('./images/5.jpg'),
        },
        {
            original: require('./images/6.jpg'),
            thumbnail: require('./images/6.jpg'),
        },
        {
            original: require('./images/7.jpg'),
            thumbnail: require('./images/7.jpg'),
        },
        {
            original: require('./images/8.jpg'),
            thumbnail: require('./images/8.jpg'),
        },
        {
            original: require('./images/9.jpg'),
            thumbnail: require('./images/9.jpg'),
        },
        {
            original: require('./images/10.jpg'),
            thumbnail: require('./images/10.jpg'),
        }
    ];

    return (
        <div className="bands bird-bone">
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
                    <h id="head">Bird Bone</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, midwest emo, math rock <br />
                    <b> Годы активности: </b> 2017–present <br />
                    <b> Место основания: </b> Yaroslavl, Russia <br />
                    <b> Лейблы: </b> Punk Fiction <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://birdbone.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://vk.com/birdbone/" target="_blank" rel="noreferrer">vk</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Сева Шапошников, Никита Виноградов</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Никита Виноградов</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Александр Королев</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Владислав Лайминг</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Дмитрий Морозов</li>
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
                                <img src={require('./images/ava.jpg')} style={{ float: 'left', width: '100px', margin: '0 20px' }} alt={''} />

                                Bird Bone - российская эмо-команда из Ярославля, образованная в 2017 году. До создания коллектива каждый из участников слушал и играл разную музыку, что позволило Bird Bone сочетать эти жанры в своих песнях. Смешивая в основном эмо, мат-рок, поп-панк и скримо, группа создаёт эмоциональную музыку, полную запоминающихся мелодий, сложных рифф и ярких вокальных партий.
                                <br /><br />
                                С 2021 участники группы живут в разных странах: Сева в Нидерландах, а Влад в Армении, поэтому в России концерты исполняются втроем, а за пределами - в соло или дуэтом.
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
                                <h4>Bird Bone: Цех live</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/TVjKkR3hxE0?si=n4vgdr7Ie_8IAEzp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Голубой Emo-Rock 2024 — новогоднее музыкальное шоу от группы Bird Bone и друзей</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/JoNthE5HBtc?si=1H4z45EOCKn8No26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Bird Bone — Призраки зимы (Пророк Санбой AI cover)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/dBMmsunPEn8?si=Te69OtDAoO87Wni5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Bird Bone — Вы не можете спать, когда рядом враги (LYRIC VIDEO)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/iYWeN2vUOJ0?si=Em700SOu0CXdKaDf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

