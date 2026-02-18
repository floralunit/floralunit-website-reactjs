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

export function Raein() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Raein | floralunit world ❤`;
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
            original: require('./images/11.webp'),
            thumbnail: require('./images/11.webp'),
        },
        {
            original: require('./images/4.webp'),
            thumbnail: require('./images/4.webp'),
        },
        {
            original: require('./images/15.webp'),
            thumbnail: require('./images/15.webp'),
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
        },
        {
            original: require('./images/9.webp'),
            thumbnail: require('./images/9.webp'),
        },
        {
            original: require('./images/10.webp'),
            thumbnail: require('./images/10.webp'),
        },
        {
            original: require('./images/12.webp'),
            thumbnail: require('./images/12.webp'),
        },
        {
            original: require('./images/13.webp'),
            thumbnail: require('./images/13.webp'),
        },
        {
            original: require('./images/14.webp'),
            thumbnail: require('./images/14.webp'),
        },
        {
            original: require('./images/16.webp'),
            thumbnail: require('./images/16.webp'),
        },
        {
            original: require('./images/17.webp'),
            thumbnail: require('./images/17.webp'),
        },
        {
            original: require('./images/18.webp'),
            thumbnail: require('./images/18.webp'),
        },
        {
            original: require('./images/19.webp'),
            thumbnail: require('./images/19.webp'),
        },
        {
            original: require('./images/20.jpg'),
            thumbnail: require('./images/20.jpg'),
        },
        {
            original: require('./images/21.jpg'),
            thumbnail: require('./images/21.jpg'),
        }
    ];

    return (
        <div className="bands raein">
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
                    <h id="head">Raein</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, post-hardcore, emoviolence <br />
                    <b> Годы активности: </b> 2002-2005, 2007-present <br />
                    <b> Место основания: </b> Forlì, Italy <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://raeinband.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.discogs.com/ru/artist/1088273-Raein" target="_blank" rel="noreferrer">discogs</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.instagram.com/raein.band" target="_blank" rel="noreferrer">instagram</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Alessio Valmori, Andrea Console, Giuseppe Coluccelli</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Alessio Valmori</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Giuseppe Coluccelli</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Nicola Amadori</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Michele Camorani</li>
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
                                <img src={require('./images/Raein_logo.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Raein — одна из самых влиятельных и популярных скримо-групп Италии, образованная в городе Форли. В состав коллектива вошли участники команд La Quiete и пост-рок-проекта Neil on Impression. Именно Raein часто приписывают заслугу возвращения скримо-жанра в Европу после его расцвета в Соединенных Штатах, пришедшегося на период активности таких групп, как <NavLink to="/emo/orchid">Orchid</NavLink> и <NavLink to="/emo/saetia">Saetia</NavLink>.

                                <br /><br />
                                <h4>История</h4><br />

                                Период с 2000 по 2004 годы ознаменовался для группы выпуском нескольких записей и активной гастрольной деятельностью. В 2003 году вышел альбом «Il n’y a pas d’orchestre», который впоследствии музыкальный блог BrooklynVegan включил в список 25 ключевых скримо-альбомов 1990–2000-х годов. Издание поставило Raein в один ряд с такими хардкор-панк-коллективами, как Envy, <NavLink to="/emo/daitro">Daïtro</NavLink> и La Quiete, особо отметив их влияние на более поздние скримо-группы, включая Loma Prieta.
                                <br /><br />
                                В конце 2005 года коллектив распался, поскольку участники разъехались по разным городам. Прощальными выступлениями стали два концерта: в Монбризоне и на фестивале Cry Me a River в Германии. Однако в 2007 году группа воссоединилась для выступления на мероприятии antiMTVday в Болонье. Воодушевленные встречей, музыканты решили продолжить совместное творчество и в июле 2007 года завершили работу над новым материалом. Вышедший в 2008 году альбом положил начало новому этапу в истории Raein, за которым последовало масштабное международное турне 2009 года в его поддержку.
                                <br /><br />
                                В 2011 году музыканты выложили свой альбом «Sulla linea dell'orizzonte fra questa mia vita e quella di tutti» для бесплатного скачивания на официальном сайте. В начале 2013 года группа отправилась в обширный тур по США, Великобритании, Канаде и Пуэрто-Рико, отыграв 20 концертов за 22 дня. В апреле того же года на лейбле Deathwish Inc. вышел сплит-семидюймовка с группой Loma Prieta, чье творчество сами Raein некогда вдохновили.
                                <br /><br />
                                Четвертый студийный альбом Raein, озаглавленный «Perpetuum», был выпущен 30 апреля 2015 года через официальную страницу группы в Facebook, за ним последовал восьмидюймовый сплит с Ampere. В том же году коллектив в третий раз выступил на фестивале Fluff Fest в Чехии, где уже играли в 2008 и 2011 годах.
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
                                <h4>Raein live @ Venezia Hardcore Fest 2023</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/p5FDfmlH8eU?si=cGVqZuQi560b5Wer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>Raein in Portland, Oregon @ Laughing Horse Books</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/nkPuAN_0IU0?si=FdhhI4bTDo8oRw8_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Raein Full Set</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/C91rEB6xVnw?si=H54Th57jje8g0EDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Raein - Tigersuit</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/g49IW00-53I?si=kMU_PoLcANJf4kb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Raein - 12/10/2009 - Marsh House - Amherst, MA (live, full set)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/2JQvHA7tAl4?si=NHdz0zFd94-iZcNu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>RAEIN - New Friends Fest '24</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/0u0kvTmFlmU?si=YCWSoWzE7hhQ1Shx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

