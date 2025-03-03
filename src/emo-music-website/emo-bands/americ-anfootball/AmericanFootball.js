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

export function AmericanFootball() {
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
            original: require('./images/americ2.gif'),
            thumbnail: require('./images/americ2.gif'),
        },
        {
            original: require('./images/americ1.jpg'),
            thumbnail: require('./images/americ1.jpg'),
        },
        {
            original: require('./images/americ3.webp'),
            thumbnail: require('./images/americ3.webp'),
        },
        {
            original: require('./images/americ4.webp'),
            thumbnail: require('./images/americ4.webp'),
        },
        {
            original: require('./images/americ5.webp'),
            thumbnail: require('./images/americ5.webp'),
        }
    ];

    return (
        <div className="bands americ-anfootball">
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
                    <h id="head">American Football</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, midwest emo, math rock, post rock, indie rock <br />
                    <b> Годы активности: </b> 1997–2000, 2014–present <br />
                    <b> Место основания: </b> Urbana, Champaign County, Illinois, U. S. <br />
                    <b> Лейблы: </b> Polyvinyl Records, Big Scary Monsters <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="http://americanfootballmusic.com/" target="_blank" rel="noreferrer">site</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://americanfootball.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Mike Kinsella, Nate Kinsella</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Mike Kinsella, Steve Holmes</li>
                                                <li> <img src={require('../../resources/instruments-images/synthesizer.png')} className={'instrument-image'} alt={''} /> Steve Holmes</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Nate Kinsella</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Steve Lamos</li>
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
                                <img src={require('./images/house.gif')} style={{ float: 'left', width: '120px', margin: '0 20px' }} alt={''} />
                                American Football — американская эмо / инди-рок-группа из Эрбаны, штат Иллинойс, первоначально существовавшая с 1997 по 2000 год, а затем с 2014 года. Гитарист / басист и вокалист Майк Кинселла (ранее в составе Cap’n Jazz, Owls, Joan of Arc, а в настоящее время — OWEN), барабанщик и трубач Стив Ламос (бывший участник The One Up Downstairs, бывший участник The Firebird Band и Edward Burch & the Staunch Characters, а в настоящее время — The Geese и DMS) и гитарист Стив Холмс (также был в составе The Geese) сформировали группу.
                                <br /><br />
                                Несмотря на недолгий начальный срок существования группы, их одноимённый дебютный альбом стал одним из самых известных альбомов эмо и математического рока своей эпохи. Группа American Football воссоединилась в 2014 году и с тех пор выпустила ещё два альбома: American Football LP2 (2016) и American Football LP3 (2019).
                                <br /><br />
                                Майк Кинселла и Стив Холмс познакомились ещё в раннем возрасте, поскольку оба учились в средней школе Уилинга в Уилинге, штат Иллинойс, где Кинселла играл на барабанах в Cap’n Jazz ; Холмс играл на гитаре в разных группах. Кинселла и Ламос начали играть вместе с Дэвидом Джонсоном и Алленом Джонсоном в 1997 году под названием «The One Up Downstairs», в котором Кинселла была исключительно вокалистом. Под этим названием были записаны три песни с намерением выпустить их как грампластинку на лейбле Polyvinyl Records . Однако группа распалась ещё до того, как пластинка была выпущена, и песни были отложены. Три трека, записанные The One Up Downstairs, были выпущены в 2006 году в виде цифрового EP, а в 2009 году — в виде грампластинки.
                                <br />
                                <img src={require('./images/cover.jpg')} style={{ float: 'right', width: '220px', margin: '0 20px' }} alt={''} />
                                <br />
                                Дэвид Джонсон и Аллен Джонсон сформировали группу Very Secret (а затем и Favorite Saints), а Кинселла и Ламос начали работать со Стивом Холмсом. Группа выпустила в общей сложности два релиза — титульный EP в 1998 году и свой дебютный альбом в 1999 году, оба на лейбле Polyvinyl Records. Хотя группа не записывала бас-гитару на EP, Кинселла играл на бас-гитаре в некоторых песнях для LP.
                                <br /><br />
                                Через год после выхода первого полноформатного альбома American Football превратился в студийный проект. Вскоре после этого группа решила прекратить совместную запись. Тем не менее, American Football получил признание критиков для этого альбома, который слился с обычными говорят, конфессиональные тексты и различные временные сигнатуры по математике рока с более мягким музыкальной чувственностью. Эти характеристики были сохранены в сольном проекте Майка Кинселлы Owen и позже Кинселла перезапишет «Never Meant» в роли Оуэна в 2004 году.
                                <br /><br />
                                23 августа 2016 года группа анонсировала свой второй альбом, также названный American Football . В том же анонсе песня «I’m Been So Lost For So Long» сообщалось что песня будет доступна на онлайн платформе SoundCloud .
                                <br /><br />
                                21 октября 2016 года группа выпустила свой второй альбом. На обложке альбома изображен тот же дом, что и на первом полнометражном альбоме группы. «Дом American Football» стал достопримечательностью для поклонников эмо-музыки по всему миру, которые часто ездили в Урбану, штат Иллинойс, чтобы фотографироваться возле местной достопримечательности.
                                <br /><br />
                                11 декабря 2018 года группа анонсировала свой третий альбом в Instagram, а их третий одноимённый студийный альбом стал доступен для предварительного заказа в Apple Music и iTunes.
                                <br /><br />
                                Их третий и последний на данный момент альбом вышел 22 марта 2019 года.
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
                                <h4>American Football - Never Meant [OFFICIAL MUSIC VIDEO]</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/_NfnXdXpjL0?si=oEMDDiHCDkGQzWhy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>American Football - Full Performance (Live on KEXP)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/uRXpvXpc45c?si=sNky5ByO2X1x1EP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>American Football: NPR Music Tiny Desk Concert</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/XjCGI4Sgb7k?si=uewtZptJhe0wfTbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>American Football - Stay Home (2020 Reprise) [OFFICIAL LIVE VIDEO]</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/GFztiN_y2LM?si=uldXvdRgnORozZf-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>American Football - My Instincts Are The Enemy [OFFICIAL MUSIC VIDEO]</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/iCI1QXMumBo?si=V0ldQNOdzMr0yWyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

