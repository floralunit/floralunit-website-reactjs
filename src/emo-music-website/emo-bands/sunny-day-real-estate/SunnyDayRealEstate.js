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

export function SunnyDayRealEstate() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Sunny Day Real Estate | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/4.webp'),
            thumbnail: require('./images/4.webp'),
        },
        {
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
        },
        {
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
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
        },
        {
            original: require('./images/9.webp'),
            thumbnail: require('./images/9.webp'),
        },
        {
            original: require('./images/10.webp'),
            thumbnail: require('./images/10.webp'),
        }
    ];

    return (
        <div className="bands sunny-day-real-estate">
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
                    <h id="head">Sunny Day Real Estate</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, alternative rock, post-hardcore, indie rock <br />
                    <b> Годы активности: </b> 1992–1995, 1997–2001, 2009–2011, 2022–present <br />
                    <b> Место основания: </b> Seattle, Washington, U. S. <br />
                    <b> Лейблы: </b> Sub Pop, Time Bomb <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://sunnydayrealestate.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://sunnyday.realestate/" target="_blank" rel="noreferrer">sunnyday.realestate</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Jeremy Enigk, Greg Suran  </li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Jeremy Enigk, Greg Suran  </li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Dan Hoerner </li>
                                                <li> <img src={require('../../resources/instruments-images/synthesizer.png')} className={'instrument-image'} alt={''} /> Greg Suran</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Nate Mendel , Chris Jordan</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> William Goldsmith</li>
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
                                <img src={require('./images/How It Feels to Be Something On.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Sunny Day Real Estate - американская эмо-группа, образованная в Сиэтле. Коллектив, стоявший у истоков средне-западной эмо-сцены, несмотря на свое тихоокеанское происхождение, и по сей день состоит из основателей Джереми Энигка (вокал, гитара), Дэна Хорнера (гитара) и Уильяма Голдсмита (ударные), к которым присоединились гитарист Грег Суран, ранее игравший с группой, и басист Крис Джордан, пришедший в коллектив. Основатель и бас-гитарист Нейт Мендел был участником группы на протяжении трех из четырех периодов ее существования.
                                <br /><br />
                                Своеобразный поэтический образ заключен в самом названии группы. По словам басиста Нейта Мендела, оно родилось как случайная мысль, навеянная песней Talking Heads «(Nothing But) Flowers». Его размышления о том, как все в мире превращается в товар, привели к идее о том, что однажды люди смогут покупать и продавать даже солнечные дни, словно недвижимость. Это название идеально отражало их взгляд на коммерциализацию всего живого и придавало имени коллектива глубину и меланхоличный смысл.
                                <br /><br />
                                Уже в 1994 году дебютный альбом «Diary» на лейбле Sub Pop был встречен восторженными отзывами критиков. Однако вскоре после записи второй пластинки, известной как «LP2» или «The Pink Album» из-за розовой обложки, коллектив неожиданно распался. Ритм-секция в лице Мендела и Голдсмита присоединилась к Foo Fighters, а Энигк занялся сольной карьерой.
                                <br /><br />
                                Спустя несколько лет группа ненадолго воссоединилась, чтобы записать еще два студийных альбома и концертник, но в конечном счете вновь распалась. Следующее возрождение коллектива состоялось, и на этот раз в нем участвовал Нейт Мендел, который ранее предпочел остаться в Foo Fighters. По словам самого Мендела, группа пыталась записать новый материал, но сессии не увенчались успехом. Лишь один трек с тех записей, «Lipton Witch», увидел свет.
                                <br /><br />
                                В начале года группа объявила о своем третьем воссоединении, в котором место Мендела на бас-гитаре занял Крис Джордан, и отправилась в тур.
                                <br /><br />
                                История группы началась, когда гитарист Дэн Хорнер и басист Нейт Мендел, соседи по университету, решили создать группу и пригласили барабанщика Уильяма Голдсмита. После нескольких смен названий и выпуска демо-записей коллектив остановился на имени Sunny Day Real Estate, которое, по словам Мендела, родилось как размышление о коммерциализации всего на свете, навеянное песней Talking Heads.
                                <br /><br />
                                Изначально инструментальный коллектив решил добавить вокалиста. После экспериментов с женским вокалом Хорнер начал петь сам. Позже к группе присоединился старый школьный друг Голдсмита, Джереми Энигк, чей высокий, пронзительный вокал, вдохновленный вокалистом Shudder To Think Крейгом Уэдреном, вместе с более медленными темпами и мелодичностью определил уникальное звучание группы, сформировавшее тот самый «инди-эмо» саунд.
                                <br /><br />
                                Их дебютный альбом «Diary» был встречен шквалом позитивных рецензий. Группа культивировала загадочный имидж, отказываясь от интервью и публичных фото. Внутренние конфликты, однако, привели к распаду сразу после записи второго альбома. Ходили слухи, что причиной стало обращение Энигка в христианство, но сами участники это отрицали, ссылаясь на общую усталость и желание Энигка покинуть группу. Второй альбом вышел без какого-либо оформления, с розовой обложкой, а тексты для многих песен, по признанию Энигка, так и не были дописаны, и он пел «на тарабарском».
                                <br /><br />
                                Воссоединившись для записи нескольких новых пезей для сборника раритетов, группа ощутила возродившуюся химию и записала полноценный альбом «How It Feels to Be Something On». Мендел на этот раз решил не уходить из Foo Fighters, и его место заняли сначала Джефф Палмер, а затем Джо Скайуард. После выхода следующего альбома «The Rising Tide» на лейбле Time Bomb Recordings и продолжительного тура группа вновь распалась.
                                <br /><br />
                                После второго распада Энигк, Голдсмит и Мендел создали новый проект The Fire Theft, а Хорнер отошел от дел. Следующее воссоединение оригинального состава состоялось, группа отыграла масштабный тур, а их первые альбомы были переизданы. Несмотря на заявления о работе над новым материалом, сессии провалились. По словам Голдсмита, незавершенный альбом так и остался лежать в студии Дэйва Грола, а Мендел опроверг эти обвинения.
                                <br /><br />
                                Третье возрождение группы подтвердилось в начале года, и в ее состав, помимо трех основателей, вошли басист Крис Джордан и гитарист Грег Суран. Вскоре группа выпустила свой первый за годы новый трек «Novum Vetus», который был записан еще во время сессий альбома «How It Feels to Be Something On».
                                <br /><br />
                                Музыкальный стиль Sunny Day Real Estate определяют как эмо, с заметным влиянием гранжа. Их творчество, характеризующееся виртуозной гитарной работой и эмоциональным вокалом Энигка, оказало огромное влияние на становление жанра. Такие группы, как Dashboard Confessional, The Get Up Kids и <NavLink to="/emo/thursday">Thursday</NavLink>, называют их в числе своих вдохновителей. Альбом «Diary» не только разошелся огромным тиражом, но и возглавил авторитетные списки величайших эмо-альбомов всех времен, cementing наследие группы как одной из самых важных в своей эпохе.
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
                                <h4>NO Interviews, WEIRD Ads, Foo Fighters DRAMA, and RELIGIOUS TENSION: Sunny Day Real Estate's Legacy</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/1ui9o1GelEo?si=5Dnl93lyO8c48ZM2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>Sunny Day Real Estate - Seven [OFFICIAL VIDEO]</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/gAotWVmVRS4?si=lm3sHhXXJgR3WqN6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Sunny Day Real Estate - In Circles [OFFICIAL VIDEO]</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/41YqzHoCgk4?si=UbU-teEs4KtDZkA5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Sunny Day Real Estate - Unedited 120 Minutes footage</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/NM5_-aSaGhU?si=xPKRsug7Qwf5ZmCZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Sunny Day Real Estate - Live @ Breakroom 1999 [Full Concert] + lyrics</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/pnumCn1NuaU?si=h1rVi-JxosW4PELs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Sunny Day Real Estate - Live at House of Blues, Boston, MA, 10/03/22</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/KqfjO60YtzA?si=0r4Q0Pb9RgIByJIy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div></div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

