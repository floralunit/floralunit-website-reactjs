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

export function CampingAlaska() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Camping in Alaska | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/camping1.webp'),
            thumbnail: require('./images/camping1.webp'),
        },
        {
            original: require('./images/camping2.webp'),
            thumbnail: require('./images/camping2.webp'),
        },
        {
            original: require('./images/camping3.webp'),
            thumbnail: require('./images/camping3.webp'),
        },
        {
            original: require('./images/camping4.webp'),
            thumbnail: require('./images/camping4.webp'),
        },
        {
            original: require('./images/camping6.jpg'),
            thumbnail: require('./images/camping6.jpg'),
        }
    ];

    return (
        <div className="bands camping-in-alaska">
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
                    <h id="head">Camping in Alaska</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, midwest emo <br />
                    <b> Годы активности: </b> 2012–present <br />
                    <b> Место основания: </b> Huntsville, Alabama, U. S. <br />
                    <b> Лейблы: </b> Broken World Media <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://campinginalaska.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Austin Davis</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Austin Davis, Jacob Hill</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Eli Long</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Jacob Hill, Eli Long</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Jacob Stewart</li>
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
                                <img src={require('./images/WELCOME HOME SON.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Camping in Alaska — американская эмо-группа из Хантсвилла, штат Алабама, основанная в 2012 году и оказавшая значительное влияние на жанр эмо-ревайвала.
                                <br /><br />
                                <h4>История</h4><br />
                                Участники группы Остин Дэвис и Джейкоб Стюарт познакомились в одиннадцатилетнем возрасте на занятиях тхэквондо. Их сблизило общее равнодушие к тренировкам и взаимный интерес к панк-музыке. В пятнадцать лет они начали совместно сочинять музыку. Отточив своё звучание в гараже родителей Дэвиса, коллектив стал выступать на DIY-сценах северной Алабамы, пополнив состав Беном Кейпом и Джейкобом Хиллом. В 2013 году группа выпустила дебютный альбом "please be nice" (название написано в нижнем регистре), который стал культовым для эмо-сцены 2010-х после того, как композиция "c u in da ballpit" (также в нижнем регистре) приобрела значительную популярность на YouTube. Изначально демозапись была сделана в гараже матери Дэвиса, прежде чем коллектив арендовал студию на несколько часов для более профессиональной работы над альбомом. Участники группы признались, что, несмотря на успех "c u in da ballpit", все они испытывают к этой песне неприязнь. Любопытно, что изначально её не планировали включать в альбом: композиция была написана всего за два часа, когда музыканты осознали, что переоценили необходимое для записи остального материала время и решили воспользоваться моментом.
                                <br /><br />
                                Вскоре после выхода "please be nice" Кейп покинул коллектив, и в 2014 году группа выпустила второй альбом — "BATHE" (название в верхнем регистре). Впоследствии лейбл Broken World Media переиздал его на кассете в 2015 году. В 2016 году свет увидел релиз "WELCOME HOME SON" (также в верхнем регистре), выдержанный в более мрачных и серьёзных тонах по сравнению с предыдущими работами. Альбом затрагивает темы зависимости, бездомности и утраты — все участники группы прошли через борьбу с пагубными пристрастиями. Эта мрачная атмосфера составляет разительный контраст с "please be nice", сфокусированном на скейтбординге, школьной жизни и встречах на парковках.
                                <br /><br />
                                После релиза "WELCOME HOME SON" в деятельности группы наступила пауза, вызванная проблемами участников с наркотиками. Однако в 2022 году, с приходом в коллектив Дани Фандре, партнёрши Дэвиса, был выпущен "Lost and Found" — сборник акустических демозаписей, созданных в период с 2017 по 2018 год. В 2023 году группа представила сингл "HOLLOW EYES" (снова в верхнем регистре), за которым последовал тур в честь десятилетия "please be nice". Коллектив анонсировал, что их грядущий альбом получит название "Eggbeater Jesus" — в честь местной настенной росписи на церкви в Хантсвилле. Это название символично: во времена бездомности Дэвис ночевал на улице возле этой церкви в лютый холод.
                                <br /><br />
                                <h4>Влияние</h4><br />
                                Camping in Alaska по праву считаются одной из влиятельнейших групп в жанре Midwest emo и движении эмо-ревайвала, в особенности благодаря их дебютному альбому, который называют культовой классикой. Среди своих вдохновителей участники называют такие коллективы, как <NavLink to="/emo/sunny-day-real-estate">Sunny Day Real Estate</NavLink>, Modest Mouse, Fugazi, Pavement и Jawbreaker.
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
                                <h4>The Story of Camping in Alaska</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/BF6R7djxFGU?si=Ujy1J8QP9T5W5Ik-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>Camping In Alaska - c u in da ballpit live in Huntsville, Al 12/10/2022</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/xkwya8Y6T38?si=ROOrPbJy_N3hQfpl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Camping in Alaska (LIVE) - Kung Fu Necktie - "please be nice" 10 Year Anniversary Tour</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/v3dbJ4z9_nY?si=kGFFgi0V9je2AQZG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>camping in alaska live @ fete lounge 10/17/23</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/lxwah9eNOBs?si=htuDDboIxHadU5g5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Camping In Alaska - why can't i be snowing? LIVE</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/tz_-rysSo5c?si=SEd_O1Iqh9rL7hc2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

