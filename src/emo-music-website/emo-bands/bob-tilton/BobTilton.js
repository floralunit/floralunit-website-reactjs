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

export function BobTilton() {
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
            original: require('./images/bobtilton1.jpg'),
            thumbnail: require('./images/bobtilton1.jpg'),
        },
        {
            original: require('./images/bobtilton2.jpg'),
            thumbnail: require('./images/bobtilton2.jpg'),
        },
        {
            original: require('./images/bobtilton3.jpg'),
            thumbnail: require('./images/bobtilton3.jpg'),
        },
        {
            original: require('./images/bobtilton4.jpg'),
            thumbnail: require('./images/bobtilton4.jpg'),
        },
        {
            original: require('./images/bobtilton5.jpg'),
            thumbnail: require('./images/bobtilton5.jpg'),
        },
    ];

    return (
        <div className="bands bob-tilton">
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
                    <h id="head">Bob Tilton</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, post-hardcore, british <br />
                    <b> Годы активности: </b> 1993 – 1999 (6 лет) <br />
                    <b> Место основания: </b> Nottingham, England <br />
                    <b> Лейбл: </b> Subjugation records <br />
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Simon Feirn</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Neil Johnson</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} />(1994-1998) Chay Lawrence</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} />(1994-1998) Ralph Hamilton</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Mark Simms</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Alan Gainey</li>
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
                                Легенды Британской сцены Боб Тилтон (названы в честь американского телепроповедника и бывшего пастора семейной церкви "Слово веры"), начинали в 1993, в городе Ноттингем, еще до того как
                                термин
                                "имо", закрепился
                                на Туманном Альбионе. В том же году, группа записала песни для дебютного 7" EP, который был
                                издан через год, лейблом
                                Subjugation records тиражем 1000 копий.
                                <br /><br />
                                Два следующих года для группы сложились вполне удачно, у Bob Tilton выходит вторая по счету
                                семёрка, в 1996 известный персонаж Джон Пилл пригласил ребят записать сессию для своего шоу на BBC Radio One.
                                Несколько месяцев спустя Subjugation издали долгожданный и самый хитовый лонгплей группы.
                                <br /><br />
                                На самом деле 96'ой был очень особенным временем, внутри независимой британской сцены, люди
                                просто сходили с ума на
                                концертах, начиная от Spy Versus Spy и кончая Mogwai. Конечно же Bob Tilton были не
                                исключением, лонгплей просто разлетелся среди фанатов эмо и панка. На протяжении еще трёх лет группа рубилась на концертах по всей Британии,
                                вернувшись домой в декабре 1998 они записали свой второй альбом на лейбле Sousaphon Recordings,
                                под названием The Leading Hotels Of The World, вскоре после этого, барабанщик Алан Гейни переехал в Лондон, что послужило одной из причин распада группы весной 1999 года.
                                <br /><br />
                                После Боб Тилтон, вокалист Саймон Фирн пел в группе Wolves Of Greece, остальные участники
                                замутили проект I Am Spartacus.
                                Гитарист Нейл Джонсон так же играл в Wolves Of Greece, сейчас он играет в группах avoy Grand
                                и Andy Clambake & The Resurrection Men.
                                <br /><br />
                                <div>
                                    Информация взята с <a href="https://www.last.fm/music/Bob+Tilton"
                                        target="_blank"
                                        style={{ textDecoration: 'underline' }}
                                        title="переход на last.fm"
                                        rel="noopener noreferrer">last.fm </a>
                                </div>

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
                                <h4>Bob Tilton - Live Nottingham - 8/1/1994</h4>
                                <br />
                                <iframe
                                    src="https://www.youtube.com/embed/viAXz0CHBek"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    width={500}
                                    height={300}
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
