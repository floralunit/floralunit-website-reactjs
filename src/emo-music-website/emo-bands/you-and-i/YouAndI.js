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

export function YouAndI() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `You and I | floralunit world ❤`;
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
        }
    ];

    return (
        <div className="bands you-and-i">
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
                    <h id="head">You and I</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, screamo, post-hardcore <br />
                    <b> Годы активности: </b> 1996-1999 <br />
                    <b> Место основания: </b> New Brunswick, New Jersey, U. S. <br />
                    <b> Лейблы: </b> Repeater Records <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://youandi.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.last.fm/ru/music/You+and+I/" target="_blank" rel="noreferrer">last.fm</a></b>

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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Jon Marinari, Tom Schlatter</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Tom Schlatter</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Casey Boland</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Jon Marinari</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Justin Hock</li>
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
                                Группа YOU AND I была основана в Нью-Джерси и существовала с 1996 по 1999 год. За это время они выпустили два полноформатных альбома, мини-альбом (EP) и один сингл на 7-дюймовой виниловой пластинке, и все эти записи включены в данную полную дискографию. YOU AND I внесли свой вклад в разнообразную хардкор-сцену 90-х, создавая звучание, которое находило отклик у поклонников хардкора, панка, метала и эмо. Хотя группа просуществовала всего несколько лет, её влияние ощущается в мире хардкора и панка до сих пор.
                                <br /><br />
                                Это переиздание дискографии на лейбле Repeater Records включает все их релизы: «Saturday’s Cab Ride Home», «Within The Frame», «The Curtain Falls» и их единственный сингл на 7". Все треки были ремастированы для винила Джеком Ширли в студии The Atomic Garden. Двойной винил (2xLP) упакован в гейтфолд-конверт и включает код для цифровой загрузки, а также объёмный PDF-файл с многочисленными фотографиями, флаерами и другими визуальными материалами из истории группы. Чтобы отпраздновать релиз и рассказать о нём подробнее, мы взяли небольшое интервью у Сета и Криса с лейбла Repeater Records, в котором они рассказали о группе и этом издании.
                                <br /><br />
                                Repeater Records прокомментировали:
                                <br />
                                «YOU AND I - одна из тех групп конца 90-х из сцены хардкора/пост-хардкора/эмо, которые были не только великолепны, но и инновационны. Что для нас наиболее важно, мы считаем, что их музыка до сих пор звучит актуально. Этим может похвастаться далеко не каждая группа той эпохи. Как лейбл, мы стараемся вернуть к жизни некоторые из этих труднодоступных записей с той сцены».
                                <br /><br />
                                <h4>После распада</h4>
                                После распада группы YOU AND I её бас-гитарист и вокалист Джон Маринари (Jon Marinari) вместе с бывшими участниками группы Red All Over основал новую группу <NavLink to="/emo/neil-perry">Neil Perry</NavLink>. Это была влиятельная скримо-группа из Нью-Джерси, активная с 1998 по 2002 год
                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <><AlbumListPage albums={songsData} /></>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}