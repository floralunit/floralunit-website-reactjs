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

export function Mineral() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Mineral | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/5.webp'),
            thumbnail: require('./images/5.webp'),
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
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
        },
        {
            original: require('./images/4.webp'),
            thumbnail: require('./images/4.webp'),
        }
    ];

    return (
        <div className="bands mineral">
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
                    <h id="head">Mineral</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo90s, post-hardcore, indie rock <br />
                    <b> Годы активности: </b> 1994-1998, 2014-2025 <br />
                    <b> Место основания: </b> Austin, Texas, U.S. <br />
                    <b> Лейблы: </b> 	Caulfield, Crank!, Interscope <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://mineralofficial.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.officialmineral.com/" target="_blank" rel="noreferrer">officialmineral</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Chris Simpson</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Chris Simpson</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Scott McCarver</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Jeremy Gomez</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Gabriel Wiley</li>
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
                                <img src={require('./images/mineral.webp')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Mineral - американская эмо-группа, основанная в Хьюстоне, штат Техас, и начавшая свой путь в Остине. Её творческий расцвет пришёлся на конец 1990-х годов. Несмотря на то, что группа изначально просуществовала менее пяти лет и выпустила всего два альбома, её по праву считают одной из основополагающих в жанре. Дебютный альбом, «The Power of Failing», был встречен критиками с большим одобрением и со временем приобрёл статус классического.
                                <br /><br />
                                Группа Mineral зародилась в эмо-сцене девяностых, которая также подарила миру такие коллективы, как The Promise Ring и Jimmy Eat World. Их первый альбом, выпущенный на лейбле Crank! Records, стал культовым, хотя в годы своего существования группа не достигла широкой известности. Работая над вторым альбомом, «EndSerenading», коллектив подписал контракт с крупным лейблом Interscope Records, однако распался вскоре после его выхода, и альбом так и остался их последней работой для Crank!. После распада участники группы занимались другими музыкальными проектами, такими как The Gloria Record, Pop Unknown, Zookeeper и Mountaintime.
                                <br /><br />
                                После затяжного перерыва, длившегося более пятнадцати лет, группа объявила о воссоединении и концертном туре. Музыканты связали это с новой волной популярности их творчества, возникшей в рамках так называемого «эмо-возрождения». Примерно в то же время были переизданы ремастированные версии их двух альбомов, которые удостоились высоких оценок критики. Примечательно, что для переиздания группа изменила шрифт на обложке первого альбома, который изначально был выполнен в Comic Sans и впоследствии стал предметом сожаления для лидера группы Криса Симпсона. В интервью он признавался, что в прошлом сомневался в качестве записанного материала, но со временем научился ценить своё творчество.
                                <br /><br />
                                Группа отметила своё двадцатипятилетие выпуском двух новых песен, выходом ретроспективной книги и объявлением мирового турне, которое, однако, было прервано пандемией COVID-19. В дальнейшем коллектив дал несколько концертов и объявил о планах окончательно завершить свою деятельность.
                                <br /><br />
                                В музыкальном плане Mineral характеризуют прежде всего как эмо-группу, вобравшую в себя элементы инди-рока, пост-рока и альтернативного рока. Среди своих главных вдохновителей музыканты называют группы Catherine Wheel, Sugar, Swervedriver, Buffalo Tom, Dinosaur Jr., Superchunk и Rocket from the Crypt. И хотя группа родом с юга США, а не с Среднего Запада, её творчество часто ассоциируют с движением «мидвест-эмо».
                                <br /><br />
                                Лирика группы, создаваемая вокалистом и автором песен Крисом Симпсоном, часто обращается к теме его взаимоотношений с христианской верой, а также к вопросам семьи, любви и личной тревоги.
                                <br /><br />
                                Mineral неизменно удостаиваются высоких оценок со стороны критиков. По мнению обозревателей, их влияние на формирование инди-рок ландшафта трудно переоценить, а в пантеоне эмо-музыки им отведено почётное место у главного стола.
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
                                <h4>Artist-On-Artist interview: Into It. Over It. chats with Mineral (part 1)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/s37xQEUyxCs?si=UHdPgR5C0MWGR2-d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>Artist-On-Artist interview: Into It. Over It. chats with Mineral (part 2)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/k3utrjufVB0?si=V7q5K1mKtwuTa0wx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Mineral Live 3/9/1997 at Mind Over Matter Fest Michigan</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/QH_oKqC24t4?si=WbGpXB72dmJHWDV1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Mineral Live in Vegas 10/10/25 (Full set from Best Friends Forever Festival Set List in Description)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/8XsSAsqPnhI?si=3bkfI8wMKr7BB5MY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Mineral Last Show</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/gOTG8uYo5Ps?si=F9hGfnBvwbsKR_L3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

