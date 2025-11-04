import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import AlbumListPage from "../../components/AlbumListPage";

export function TheSpiritOfVersailles() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `The Spirit of Versailles | floralunit world ❤`;
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
            original: require('./images/2.jpg'),
            thumbnail: require('./images/2.jpg'),
        },
        {
            original: require('./images/3.jpg'),
            thumbnail: require('./images/3.jpg'),
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
        }
    ];

    return (
        <div className="bands the-spirit-of-versailles">
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
                    <h id="head">The Spirit of Versailles</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, sreamo, emo violence, hardcore <br />
                    <b> Годы активности: </b> 1998 – 2001 <br />
                    <b> Место основания: </b> Sioux Falls, Minnehaha County, South Dakota, U. S. <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://canadianwastelandarchives.blogspot.com/2023/11/the-spirit-of-versailles-discography.html" target="_blank" rel="noreferrer">canadianwastelandarchives.blogspot.com</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> BJ Anderson</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Tanner Olsen</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Eric Evenson</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Matt McFarland</li>
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
                                <img src={require('./images/The Spirit of Versailles.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                The Spirit Of Versailles - американская хардкор-группа из Су-Фолс, Южная Дакота, чьё творчество стало яркой страницей в истории скримо конца 1990-х годов. Их музыка представляла собой уникальный сплав эмоциональной глубины и агрессии: нежные мелодичные вокальные партии внезапно сменялись пронзительными, разрывающими глотку криками. Несмотря на то, что в группе был один основной вокалист, БИ Эндерсон, остальные участники также подключались к вокалу, создавая многослойное и динамичное звучание, которое можно сравнить с <NavLink to="/emo/love-lost-but-not-forgotten">Love Lost But Not Forgotten</NavLink> или Joshua Fit for Battle, но при этом более структурированное и мелодично сложное.
                                <br /><br />
                                Группа была активна с июля 1998 по октябрь 2001 года. За это время состав коллектива претерпевал изменения, и лишь двое участников оставались в нём на всём протяжении этого периода: вокалист БИ Эндерсон и барабанщик Мэтт Макфарланд.
                                <br /><br />
                                За время своего существования The Spirit Of Versailles выпустили обширную дискографию, включающую два мини-альбома на 7-дюймовых виниловых пластинках, несколько сплитов (совместных релизов) с группами Saqqara, Caligari и Rise From Ruin, полноформатный альбом на 12-дюймовом виниле и CD, а также кассетный демо-релиз. Позднее весь их материал был собран в компиляции «Discography», выпущенной на CD и виниле. Группа была известна своими мощными живыми выступлениями и делила сцену со многими легендарными коллективами той эпохи, такими как <NavLink to="/emo/orchid">Orchid</NavLink>, Usurp Synapse, <NavLink to="/emo/saetia">Saetia</NavLink>, Jerome's Dream, <NavLink to="/emo/love-lost-but-not-forgotten">Love Lost But Not Forgotten</NavLink>, Reversal Of Man и Combat Wounded Veteran.
                                <br /><br />
                                Участники The Spirit Of Versailles также были задействованы в других музыкальных проектах, включая Caligari, Examination Of The..., In Loving Memory и Eclipse Of Eden, что свидетельствует об их активном участии в скримо-сцене того времени.
                                <br /><br />
                                Несмотря на то, что группа давно распалась, её творчество продолжает находить отклик у слушателей, а физические копии релизов, особенно ранние демо-кассеты, стали коллекционной редкостью.
                                <br /><br />
                                <h4>Вероятные версии происхождения названия</h4><br />
                                Скорее всего, название группы отсылает к одному из следующих образов:
                                <br /><br />
                                <b>Дух Версальского договора:</b> Наиболее очевидная версия - отсылка к Версальскому договору 1919 года, который завершил Первую мировую войну. Этот договор был пропитан духом мести и унижения для проигравшей стороны, что привело к масштабным социальным потрясениям и, в конечном счете, ко Второй мировой войне. Такая трактовка идеально ложится на эмоциональный фон скримо-хардкора: чувства обиды, несправедливости, травмы и гнева, которые являются центральными в музыке The Spirit Of Versailles.
                                <br /><br />
                                <b>Дух места (Дух Версаля):</b> Название может вызывать образ самого Версаля - французской королевской резиденции, символа абсолютной монархии, роскоши и строгой классической эстетики. В этом случае название группы строится на мощном контрасте: их резкая, хаотичная и эмоционально разрушительная музыка противопоставляется утонченности и порядку, которые олицетворяет Версаль.
                                <br /><br />
                                Довольно интересны обложки альбомов и вкладыши к ним, можно их посмотреть на этой странице <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://canadianwastelandarchives.blogspot.com/2023/11/the-spirit-of-versailles-discography.html" target="_blank" rel="noreferrer">canadianwastelandarchives.blogspot.com</a></b>
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
                                <h4>The Spirit of Versailles Interview</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/Z6aJMWoKauQ?si=J-6O77-wyBIzQEbL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>The Spirit of Versailles Interview - Tim Jewell (2022)</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/R0PLGejL-mM?si=VsfA4r2Mmi1KaqEZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Spirit of Versailles - LIVE Final Show</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/FHnUb2JXQUs?si=SM5ALxCQTBxN6S7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>the spirit of versailles live @ yr renaissance fest 5/24/25</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/ZnTs2Yz3BoI?si=WswlFAiAEnb2t4Fn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>The Spirit Of Versailles - Sioux Falls, SD 2001</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/lfb6P5tlQLU?si=h3hfUFbF_z8T2Oal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

