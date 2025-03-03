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

export function IHateMyself() {
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
            original: require('./images/ihatemyself1.webp'),
            thumbnail: require('./images/ihatemyself1.webp'),
        },
        {
            original: require('./images/ihatemyself2.webp'),
            thumbnail: require('./images/ihatemyself2.webp'),
        },
        {
            original: require('./images/ihatemyself3.webp'),
            thumbnail: require('./images/ihatemyself3.webp'),
        },
        {
            original: require('./images/ihatemyself4.webp'),
            thumbnail: require('./images/ihatemyself4.webp'),
        }
    ];

    return (
        <div className="bands i-hate-myself">
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
                    <h id="head">I Hate Myself</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, post-hardcore, screamo <br />
                    <b> Годы активности: </b> 1996–2005 (9 лет)<br />
                    <b> Место основания: </b> Gainesville, Florida, U.S <br />
                    <b> Лейбл: </b> No Idea Records <br />
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Jim Marburger</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Jim Marburger</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Jon Marburger</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Steve Jin</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Jason Dooley</li>
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
                                <img src={require('./images/ihatemyself.jpg')} style={{ float: 'left', width: '220px', margin: '0 20px' }} alt={''} />
                                I Hate Myself (часто стилизуется как i hate myself) - американская эмо-группа, основанная Джоном и Джимом Марбургерами в Гейнсвилле, Флорида, в 1996 году. Группа использовала элементы пост-хардкора и инди в своих песнях.
                                <br /><br />
                                Никакие заголовки не были даны ни одному альбому или синглу, и их первый релиз (четырехпесенный односторонний LP) даже не включал названий песен. (У второй песни есть известное название "Less Than Nothing", как отмечено на последующем сборнике.) Дальнейшие релизы содержали названия песен, которые часто были очень длинными по общепринятым стандартам, описывая странные ситуации, о которых вокалист Джим Марбургер развивал мысль в текстах песен. Это добавило к предположению, что I Hate Myself подшучивали над тенденцией эмо/скримо групп предпочитать затянутые и часто бессмысленные названия песен, которые обычно не отражают темы или тексты внутри песни. Буклеты к альбомам были крайне минимальными и иногда полны самоуничижения со стороны группы. После ряда релизов только на виниле в середине и конце 1990-х годов группа распалась. Вскоре после этого группа, наконец, согласилась на свой первый выпуск CD - сборник своего полноформатного LP "10 Songs" с одним дополнительным треком, их вклад в разделенный 7-дюймовый сингл с Strikeforce Diablo.
                                <br /><br />
                                Братья Марбургер продолжили свою деятельность, создав группу Burnman, развивая более шумную сторону звучания I Hate Myself. Эта группа распалась вскоре после выпуска своего дебютного LP, а ударник Джон Марбургер присоединился к коллегам из No Idea - Gunmoll. Группа воссоединилась для двух концертов в одну ночь в Гейнсвилле в 2003 году. Они просили отправлять им любые аудио- или видеозаписи, что подогрело интерес у фанатов, возможно ли выпуск живого альбома. Планов на такой выпуск не было объявлено. В 2005 году братья Марбургер записали три новых трека I Hate Myself для выпуска одностороннего LP. Бас был дублирован Джоном Марбургером вместо воссоединения с оригинальным басистом или поиска замены. В настоящее время оба брата играют вместе в Die Hoffnung, которые выпустили свой первый альбом в 2006 году, снова на No Idea. 15-песенный CD, собирающий все оставшиеся треки, не вошедшие в релиз "Ten Songs", был запланирован с начала 2005 года, но еще не материализовался. В ноябре 2016 года Джон и Джим выступили как I Hate Myself в рамках празднования книги "Gainesville Punk: A History of Bands & Music" Мэтта Уокера, с записями баса, предположительно исполненными Джоном.
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
                                <h4>I Hate Myself- Live (2/2) 6/28/97 Kingston, Pa</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/sVM_DNsIq_8?si=40Ws7hGTHHZ97ojo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
