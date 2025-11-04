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

export function MerchantShips() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Merchant Ships | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/6.webp'),
            thumbnail: require('./images/6.webp'),
        },
        {
            original: require('./images/1.webp'),
            thumbnail: require('./images/1.webp'),
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
            original: require('./images/7.webp'),
            thumbnail: require('./images/7.webp'),
        },
        {
            original: require('./images/8.webp'),
            thumbnail: require('./images/8.webp'),
        }
    ];

    return (
        <div className="bands merchant-ships">
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
                    <h id="head">Merchant Ships</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, midwest emo, post-hardcore, screamo <br />
                    <b> Годы активности: </b> 2008–2009, 2010 <br />
                    <b> Место основания: </b> South Bend, Indiana and Sturgis, Michigan, U. S. <br />
                    <b> Лейблы: </b> Count Your Lucky Stars Records <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.last.fm/music/Merchant+Ships/" target="_blank" rel="noreferrer">last.fm</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Jack Senff</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Nick Stutsman</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Michael Gerstein</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Dwayne Robinson</li>
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
                                Merchant Ships - американская скримо/мидвест-эмо-группа из Саут-Бенда, Индиана и Старджиса, Мичиган, образованная в 2008 году. Группа прошла непростой путь, несколько раз распадалась, но, несмотря на это, оставила заметный след в жанре.                                <br /><br />
                                <h4>История</h4><br />
                                Группа была основана в июле 2008 года вокалистом Джеком Сенффом и барабанщиком Дуэйном Робинсоном, которых вдохновили выступления местных коллективов. Вскоре к ним присоединились гитарист Ник Статсмен и басист Майкл Герштейн. Их первым релизом стал демо-альбом "LOL Cats Demo" (2008), а первым полноценным мини-альбомом - "I Want To Forget About Everything Bad That Ever Happened, Ever" (2008).
                                <br /><br />
                                <b>Первый распад и новые проекты: </b><br />
                                <br />
                                В мае 2009 года Merchant Ships впервые распались. После этого Сенфф и Статсмен вместе с Гарретом Кабелло и Майком Кенуэем создали группу Midwest Pen Pals и выпустили ЕР "Inside Jokes".
                                <br /><br />
                                <b>Воссоединение и финальный релиз: </b><br />
                                <br />
                                В 2010 году Merchant Ships ненадолго воссоединились, подписали контракт с лейблом Count Your Lucky Stars Records и выпустили свой последний и самый зрелый ЕР, "For Cameron".
                                <br /><br />
                                <b>Окончательный распад: </b><br />
                                <br />
                                В июле 2010 года группа окончательно прекратила существование, выпустив всю свою дискографию для бесплатного скачивания через свою страницу в Myspace в виде компиляции под названием "Shipsography".                                <br /><br />
                                <h4>Дальнейшая судьба участников</h4><br />
                                После окончательного распада Merchant Ships все участники продолжили музыкальную карьеру в других известных проектах:
                                <br />
                                Джек Сенфф (вокал): Участвовал в культовой группе William Bonney, а затем основал несколько проектов, включая North Folk, Boy Rex и Knola. В итоге перешёл к сольному акустическому фолку под именем Jack M. Senff.
                                <br />
                                Ник Статсмен (гитара): Основал эмо-группу Park Jefferson и группу Jingwei.
                                <br />
                                Майкл Герштейн (бас): Присоединился к группе Lucy из Ист-Лансинга.
                                <br />
                                Дуэйн Робинсон (ударные): Играл в группах Hive Mind и House Olympics из Блумингтона.
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
                                <h4>Merchant Ships - sleep patterns (video)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/JdTjD86IS4A?si=1SAIWK4jGm8r_i3F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Merchant Ships [live]- Full Set [NEW AUDIO] @ AS220, 6/30/2010</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/svqV3G7UGbo?si=vWx0Wuabn8oUyBBG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>The Story of Merchant Ships</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/Hdscl2SueRI?si=YYyL4lwdS2bIQABx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

