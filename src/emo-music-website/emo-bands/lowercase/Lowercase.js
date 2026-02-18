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

export function Lowercase() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `lowercase | floralunit world ❤`;
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
            original: require('./images/13.jpg'),
            thumbnail: require('./images/13.jpg'),
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
        },
        {
            original: require('./images/11.jpg'),
            thumbnail: require('./images/11.jpg'),
        },
        {
            original: require('./images/12.jpg'),
            thumbnail: require('./images/12.jpg'),
        },
        {
            original: require('./images/14.jpg'),
            thumbnail: require('./images/14.jpg'),
        },
        {
            original: require('./images/15.jpg'),
            thumbnail: require('./images/15.jpg'),
        },
        {
            original: require('./images/16.jpg'),
            thumbnail: require('./images/16.jpg'),
        }
    ];

    return (
        <div className="bands lowercase">
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
                    <h id="head">lowercase</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, post-hardcore, indie emo <br />
                    <b> Годы активности: </b> 1993-2000, 2025-present <br />
                    <b> Место основания: </b> Palm Desert, California, U. S. <br />
                    <b> Лейблы: </b> Amphetamine Reptile, Punk in my Vitamins <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://lowercasetheband.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.instagram.com/lowercase_band/" target="_blank" rel="noreferrer">instagram</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.discogs.com/ru/artist/465995-Lowercase" target="_blank" rel="noreferrer">discogs</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Imaad Wasif</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Imaad Wasif</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Eli Long</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Justin Halterlein, Tiber Scheer</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Brian Girgus</li>
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
                                <img src={require('./images/banner.png')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Lowercase (иногда стилизуется как lowercase) - калифорнийская группа из Палм-Дезерт, авангард дуэтного звучания, ведомая гитарой и вокалом Имаада Уасифа и барабанами Брайана Гиргуса. Коллектив выпустил два полноформатных альбома на миннеаполисском лейбле Amphetamine Reptile, после чего записал свою последнюю пластинку для лейбла Punk in my Vitamins, основанного Верном Рамзи из Unwound. Гастроли с Sebadoh, Karp, Unwound, Hovercraft, Caustic Resin, The Lies, Faith No More и Chokebore помогли группе обрести как национальную, так и международную известность.
                                <br /><br />
                                <h4>История</h4><br />
                                Группа впервые собралась в 1993 году в Палм-Дезерт, Калифорния, усилиями гитариста и вокалиста Имаада Уасифа и барабанщика Брайана Гиргуса. Изначально Гиргус играл на басу, однако пересел за барабаны, когда коллектив столкнулся с трудностями в поиске ударника. В начале 1994 года музыканты выпустили свой дебютный семидюймовый сингл «Two Songs» на лейбле Punk in my Vitamins?, независимом проекте Верна Рамзи, басиста Unwound. За ним последовал второй семидюймовый сингл «Brass Tracks», изданный в 1995 году на X-Mas Records. В том же году группа подписала контракт с Amphetamine Reptile Records, который 11 ноября 1996 года выпустил их дебютный полноформатный альбом «All Destructive Urges... Seem So Perfect» . В этот же период коллектив перебрался в Сан-Франциско, где и оставался вплоть до своего распада в 2000 году.
                                <br /><br />
                                После переезда в Сан-Франциско группа приступила к работе над следующим альбомом, «Kill the Lights». Для этой записи дуэт привлек басиста Джастина Халтерляйна. Процесс создания пластинки оказался тернистым: троица не ладила между собой, и напряжение нарастало. Халтерляйн покинул группу вскоре после выхода альбома, состоявшегося 8 июля 1997 года. После релиза «Kill the Lights» коллектив расстался с Amphetamine Reptile, сохранив дружеские отношения. Для работы над следующей пластинкой дуэт пригласил басиста Тибера Шеера, ранее игравшего в группе P.E.E. 4 мая 1999 года на лейбле Punk in my Vitamins? вышел альбом «The Going Away Present», после чего в 2000 году коллектив прекратил существование.
                                <br /><br />
                                Основатели группы впоследствии занялись сольными проектами, а также играли в The Folk Implosion, Track Star, Yeah Yeah Yeahs, Wooden Shjips и других коллективах. В настоящее время Уасиф и Гиргус проживают в Лос-Анджелесе, тогда как Шеер перебрался в Чикаго.
                                <br /><br />
                                В январе 2025 года Lowercase воссоединились, дав серию концертов в Калифорнии в течение года.
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
                                <h4>Lowercase - May 24, 2025</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/RqTsSANFGl0?si=J4Qv4sbOt0ICxrBC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>lowercase live in Santa Cruz 12/3/99 Full Show</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/i4oUUekA-UE?si=glDJxDvN9YH8SSsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>lowercase - Live at Zebulon, Los Angeles, CA 4/16/2025</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/VeC-gnO6jvg?si=rhwaNj4dP8Pew1pB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>lowercase - you're a king (live @ the regent)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/kMOzBRzwaEQ?si=nLIu_7CrDXzkp92j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Lowercase - EJ's Portland,OR 5 29 1997 Live Full Set</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/08i8CKoNfcw?si=KlOPjmDPnwgA2VU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

