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

export function EveryoneAskedAboutYou() {
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
            original: require('./images/everyoneasked1.webp'),
            thumbnail: require('./images/everyoneasked1.webp'),
        },
        {
            original: require('./images/everyoneasked2.webp'),
            thumbnail: require('./images/everyoneasked2.webp'),
        },
        {
            original: require('./images/everyoneasked3.webp'),
            thumbnail: require('./images/everyoneasked3.webp'),
        },
        {
            original: require('./images/everyoneasked4.webp'),
            thumbnail: require('./images/everyoneasked4.webp'),
        },
        {
            original: require('./images/everyoneasked5.webp'),
            thumbnail: require('./images/everyoneasked5.webp'),
        },
        {
            original: require('./images/everyoneasked6.webp'),
            thumbnail: require('./images/everyoneasked6.webp'),
        },
    ];

    return (
        <div className="bands everyone-asked">
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
                    <h id="head">Everyone Asked About You</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, midwest emo, indie rock <br />
                    <b> Годы активности: </b> 1996–2000 (4 года), 2022-present <br />
                    <b> Место основания: </b> Little Rock, Arkansas, U.S <br />
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Hannah Vogan</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Chris Sheppard</li>
                                                <li> <img src={require('../../resources/instruments-images/synthesizer.png')} className={'instrument-image'} alt={''} /> John Beachboard</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Collins Kilgore</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Matt Bradley</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Lee Buford</li>
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
                                "Everyone Asked About You" - американская эмо-группа из Литл Рок, Арканзас. Они были образованы в 1996 году. Название группы происходит из детской книги с таким же названием, написанной Теодором Фаро Гроссом и Шейлой Уайт Сэмтон. Группа воссоединилась в 2022 году после переиздания материала группы через Numero Group, за которым последовал выпуск их первого нового альбома за 25 лет - альбома "Never Leave".
                                <br /><br />
                                Группа записала только один альбом и три EP (один из которых был совместным с The Shyness Clinic) в 1997 и 1998 годах. В первые годы существования они были малоизвестны, но привлекли внимание позже благодаря успеху их дебютного самоназванного EP, который отличался своим уникальным звучанием от других эмо-групп благодаря смешению с инди-попом. Во время своего первоначального существования они отправились в тур летом 1999 года. Их последнее выступление в первоначальном составе состоялось 26 февраля 2000 года в Clunk Music Hall в Фейетвилле, Арканзас, вместе с Les Savy Fav.
                                <br /><br />
                                После распада группы Ли Буфорд, игравший на ударных, создал группу The Body. Джон Бичборд и Коллинс Килгор основали группу American Princes.
                                <br /><br />
                                В 2022 году Numero Group объявили о переиздании дискографии группы. Материал был выпущен в виде двойного альбома в 2023 году под названием "Paper Airplanes, Paper Hearts", названного в честь песни из их дебютного EP. Группа также начала давать концерты, начав с официального родного города и выступления на фестивале Numero Twenty. 3 июня 2024 года группа представила новую песню из пост-воссоединенческих сессий под названием "We're All Losing It", написанную во время солнечного затмения и записанную в ту же неделю. 25 июня была анонсирована вторая песня "A Vigil", а также формальное объявление о выпуске EP "Never Leave" 5 августа.
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
                                <h4>Everyone Asked About You - Live in Columbus, OH 6/25/1999</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/XmEciIQb2Z8?si=ce7RBU2wqSTR-aBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Everyone Asked About You reunion show 2022 12 28 9 pm @ White Water Tavern, Little Rock, AR</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/olANHFOUD5k?si=f4vuvyaCbEbp052E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
