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

export function NeilPerry() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Neil Perry | floralunit world ❤`;
    });

    useEffect(() => {
        document.title = `Neil Perry | floralunit world ❤`;
    });


    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/1.webp'),
            thumbnail: require('./images/1.webp'),
        },
        {
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
        },
        {
            original: require('./images/4.webp'),
            thumbnail: require('./images/4.webp'),
        },
        {
            original: require('./images/5.webp'),
            thumbnail: require('./images/5.webp'),
        },
        {
            original: require('./images/6.webp'),
            thumbnail: require('./images/6.webp'),
        },
        {
            original: require('./images/7.webp'),
            thumbnail: require('./images/7.webp'),
        },
        {
            original: require('./images/8.webp'),
            thumbnail: require('./images/8.webp')
        }
    ];

    return (
        <div className="bands neil-perry">
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
                    <h id="head">Neil Perry</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, post-hardcore <br />
                    <b> Годы активности: </b> 1998–2003 <br />
                    <b> Место основания: </b> Central New Jersey, U. S. <br />
                    <b> Лейблы: </b> Level Plane, Robotic Empire, Witching Hour, Spiritfall <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.last.fm/music/Neil+Perry/" target="_blank" rel="noreferrer">last.fm</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Josh Jakubowski, Chris Smith, Jon Marinari</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Josh Jakubowski</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Chris Smith</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Jon Marinari</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Justin Graves</li>
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
                                Neil Perry - это американская скримо-группа из Нью-Джерси, США. Басист и вокалист Джон Маринари ранее играл в влиятельной нью-джерсийской скримо-группе <NavLink to="/emo/you-and-i">You and I</NavLink>. После её распада он и бывшие участники группы Red All Over основали Neil Perry.
                                <br /><br />
                                В течение следующих четырёх лет Neil Perry выпустили несколько записей, в основном на лейбле Level Plane Records. Группа распалась в 2002 году. В начале 2003 года они записали четыре новые песни, которые стали их последними работами и вошли в их дискографию Lineage Situation, выпущенную Level Plane Records в июле 2003 года. Этот релиз включал в себя всю дискографию группы (40 песен), а на втором диске содержалось 35-минутное видео с записью живых выступлений и туров. Некоторые из новых материалов имели пост-роковую структуру.
                                <br /><br />
                                После распада Neil Perry участники группы играли в других коллективах, таких как Hot Cross, Joshua Fit For Battle, A Life Once Lost, Superstitions of the Sky, The Now, Get Fucked и Welcome the Plague Year.
                                <br /><br />
                                Neil Perry считаются одной из самых влиятельных групп волны скримо 2000-х годов. Их музыка характеризуется чрезвычайно интенсивным, быстрым и хаотичным звучанием, короткими песнями, пронзительным вокалом и сложными, часто математическими, структурами композиций.
                                <br /><br />
                                Ироничное название группы происходит от имени австралийской актрисы Николь Кидман; так звали её персонажа в фильме 1989 года «Штормовой понедельник» (в оригинале - Neil Perry).
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
                                <h4>Neil Perry The Movie</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/t_7pK8hYLCc?si=d9ThaI2iO-3jz581" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Neil Perry - Unknown Location - Unknown Date live</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/P2pPir0rHAM?si=QyZoWnIjrj4JnE04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

