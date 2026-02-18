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

export function Catalyst() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `catalyst... | floralunit world ❤`;
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
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
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
            original: require('./images/6.jpeg'),
            thumbnail: require('./images/6.jpeg'),
        }
    ];

    return (
        <div className="bands catalyst">
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
                    <h id="head">catalyst...</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, hardcore punk <br />
                    <b> Годы активности: </b> 2020 - present <br />
                    <b> Место основания: </b> Providence, Rhode Island, U. S. <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://catalystsucks420.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.instagram.com/catalystgmail.com2/" target="_blank" rel="noreferrer">instagram</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Connor Kelliher</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> David Lemmel</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Andrew Trow</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Aidan Lavoie</li>
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
                                Catalyst - эмо- и скримо-группа из Провиденса, штат Род-Айленд, чье звучание дарит слушателям катарсис и напоминает о целительной силе жанра. В состав коллектива входят Коннор Келлихер (вокал), Дэвид Леммел (гитара), Эндрю Троу (бас-гитара) и Эйдан Лавуа (ударные). Группа возникла на волне возрождения скримо-сцены около 2020 года, когда многие музыканты, запертые в изоляции, искали новые формы творческого самовыражения.
                                <br /><br />
                                Их дебютный одноименный EP вышел в 2021 году, а в 2023 году свет увидел мини-альбом под названием «…», состоящий из шести треков, отсылающих к сырому звучанию скримо девяностых. В этой работе слышны как драйвовая панк-энергетика, так и тягучие, шугейзовые настроения. В поддержку релиза группа отправилась в совместный тур с техасским коллективом Party Hats, выступив в Нью-Йорке, Лонг-Бранче и Филадельфии.
                                <br /><br />
                                В 2024 году Catalyst отправились в свои первые полноценные гастроли по США, выступая на самых разных площадках - от культового деликатесного магазина Stay Gold Deli в Окленде до подвала Shanghai Tunnel Bar в Портленде, где они разогревали публику для Camping In Alaska на юбилейном туре в честь десятилетия их альбома. Их живые выступления отличаются неистовой энергетикой и полным слиянием с залом: вокалист Коннор Келлихер проводит большую часть сета спиной к публике, а микрофон то и дело передается особо рьяным фанатам из первых рядов, которые выкрикивают политические лозунги вместе с текстами песен.
                                <br /><br />
                                Интересной особенностью концертов Catalyst стала интеграция сайд-проекта Fate, созданного Коннором и Натаном Райтом - продюсером, записывающим все релизы группы, а также работающим с другими скримо-проектами вроде Vs Self. Когда кажется, что сет Catalyst подходит к концу, музыканты внезапно меняются инструментами: ударник Эйдан Лавуа переходит на бас, Коннор садится за ударную установку, а Натан выхватывает гитару, и группа обрушивает на зал взрывную энергию пауэр-вайоленс. К 2026 году треки группы уже насчитывают миллионы прослушиваний на Spotify.
                                <br /><br />
                                Музыка Catalyst тяжела, но при этом доступна для восприятия, что делает их идеальным проводником в мир скримо для новых слушателей. Группу часто рекомендуют тем, кто только начинает погружаться в жанр.
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
                                <h4>catalyst live @ emo night as220 2/17</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/VNIrNSx4Jgg?si=p08eUbdjBf0-59L-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>catalyst live @ boxing ring 3/30/24</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/c9OsdMv3Ui8?si=8mLy2JisttZ3nYk9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>catalyst live @ boxing ring 3/30/24</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/f-AgoNZW04I?si=uJKFac6nkVcR89CT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>catalyst live @ market hotel 9/2/23</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/_dVqal-Z_Ck?si=Yk_L01chiQFxYVM-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

