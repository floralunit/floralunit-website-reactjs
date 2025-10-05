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

export function IHaveDreams() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `I Have Dreams | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
        },
        {
            original: require('./images/1.webp'),
            thumbnail: require('./images/1.webp'),
        },
        {
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/1.gif'),
            thumbnail: require('./images/1.gif'),
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
            thumbnail: require('./images/8.webp'),
        }
    ];

    return (
        <div className="bands i-have-dreams">
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
                    <h id="head">I Have Dreams</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, emo90s, hardcore, emo violence <br />
                    <b> Годы активности: </b> 1998 - 1999 <br />
                    <b> Место основания: </b> Tallahassee, Florida, U. S. <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.discogs.com/ru/release/4927188-I-Have-Dreams-Three-Days-Til-Christmas/" target="_blank" rel="noreferrer">discogs</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.last.fm/ru/music/I+Have+Dreams/" target="_blank" rel="noreferrer">last.fm</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Allen Compton, Mike Peters</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Mike Hanson</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Ben Sils</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Clayton Ryklick</li>
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
                                Как это часто происходило в 90-е, когда жизни многих команд были слишком коротки, история I Have Dreams началась совсем с другой группы. Этой группой были New Ethic. Образовавшись 1998 году в Таллахасси, штат Флорида, New Ethic в этом же году перестали существовать, успев записать лишь одну трехпесенную демку. Причиной распада группы послужила смерть гитариста Дэниэла, который погиб в автокатастрофе. Свой последний концерт New Ethic сыграли в августе 1998 года, где на месте Дэниэла играл его лучший друг Майк Хансон.
                                <br /><br />
                                Примерно через два месяца, едва оправившись от потери друга, свет увидел новую группу, которая состояла из Аллена Комптона и Майка Питерса на вокале, Майка Хансона на гитаре, Бена Силса на басу и Клейтона Риклика на барабанах. Группа получила название «I Have Dreams». В 1999 году ребята записали демо «Three Days ’Til Christmas», в которую вошли 5 треков. Музыкально I Have Dreams представляли собой
                                достаточно своеобразное эмо\скримо с двойным вокалом. Просуществовав около полугода, в апреле-мае 1999-го I Have Dreams распались. Несмотря на короткую историю и малочисленность записей, I Have Dreams были больше, чем просто группа. Майк Питерс говорил на реюнион шоу, что это была попытка справиться с болью, которую ребята чувствовали после смерти Дэниэла. И вправду, лирика на «Three Days ’Til Christmas» от первого до последнего слова посвящена ему, в связи с чем демо вообще больше напоминает эпитафию.
                                «Я помню, что твое сердце всегда сияло ярче всех, и утро наступает слишком рано, когда мне снится, что ты все еще жив. На улице холодно, но закаты по-прежнему прекрасны. Я не могу поверить, что ты больше не вытащишь меня из окна просто побегать без какой-либо цели, ведь цель не имела значения, потому что на самом деле не важно, куда ты идешь и что ты делаешь, важно то, с кем ты. Я был с тобой, а ты был со мной, и все было на своих местах. Мне жаль, что я не могу сказать тебе, что солнце никогда не перестанет светить, пока я думаю о тебе. Когда я думаю о тех днях, когда весь долбаный мир принадлежал нам. Каждая крыша в городе. Когда я думаю о тех днях, когда я держал за руку самого лучшего друга, который у меня когда-либо был».
                                После распада I Have Dreams Майк, Аллен, Бен и Клейтон играли в A New Kind of American Saint и кто-то из них - в Levy Park All-Stars.
                                <br /><br />
                                22 декабря 2001 года I Have Dreams сыграли отличное реюнион-шоу в Cow Haus. Перед последней песней Майк Питерс расплакался прямо на сцене. Еще одно шоу было сыграно совершенно случайно в Thunderdome, во время совместного концерта Levy Park All-Stars с Майком Хансоном, который выступал сольно. Там были все, кроме вокалистов, Аллена и Майка.
                                После этого I Have Dreams окончательно ушли в прошлое, вписав в историю эмо-музыки шестнадцать минут искреннего отчаяния, боли и трагизма.
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
                                <h4>The Story of I Have Dreams</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/D3_Zbjg0OVw?si=119CMgJHZnFh7afl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>I have dreams -Mega Rock-Thank you so much for having the courage to help a friend change...</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/XHHO5hikWUk?si=wG4lZoHyuyqznHGj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>I Have Dreams - Live set @ Tallahasse (1999)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/YApkroW0Fg8?si=iV8gps0TjSjN2QiF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}