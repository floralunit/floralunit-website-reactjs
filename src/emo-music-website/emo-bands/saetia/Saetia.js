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

export function Saetia() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Saetia | floralunit world ❤`;
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
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
        },
        {
            original: require('./images/4.webp'),
            thumbnail: require('./images/4.webp'),
        },
        {
            original: require('./images/6.jpg'),
            thumbnail: require('./images/6.jpg'),
        },
        {
            original: require('./images/2.gif'),
            thumbnail: require('./images/2.gif'),
        },
        {
            original: require('./images/7.jpg'),
            thumbnail: require('./images/7.jpg'),
        }
    ];

    return (
        <div className="bands saetia">
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
                    <h id="head">Saetia</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, screamo, hardcore punk, post-hardcore <br />
                    <b> Годы активности: </b> 1997–1999, 2022–present <br />
                    <b> Место основания: </b> New York City, New York, U. S. <br />
                    <b> Лейблы: </b> Secret Voice, Level Plane, Witching Hour, The Mountain Collective for Independent Artists <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://saetianyc.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Billy Werner, Adam Marino, Colin Bartoldus</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Adam Marino</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Jamie Behar</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Colin Bartoldus, Steve Roche</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Greg Drudy</li>
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
                                <img src={require('./images/symbol.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Saetia (произносится СЕЙ-ша) - нью-йоркская группа, считающаяся одной из самых влиятельных и высокооцениваемых в скримо-сцене конца 1990-х годов. Несмотря на то, что в годы своего активного существования коллектив оставался в тени, его творчество стало эталоном для всего жанра.
                                <br /><br />
                                <h4>Зарождение и творческий путь (1997–1999)</h4>
                                <br />
                                Группа образовалась в начале 1997 года, когда пятеро друзей, студентов Нью-Йоркского университета, решили создать группу, чтобы воплотить свои разнообразные музыкальные вкусы. Их первый концерт состоялся в легендарном нью-йоркском клубе ABC No Rio перед около тридцатью зрителями. Своё название коллектив получил из-за случайной опечатки в названии композиции Майлза Дэвиса «Saeta» с его альбома «Sketches of Spain».
                                <br /><br />
                                Изначальный состав включал Билли Вернера (вокал), Джейми Бехара (гитара), Адама Марино (гитара), Грега Друди (ударные) и Алекса Мадару (бас-гитара). С немногим более чем четырьмя песнями и огромным энтузиазмом квинтет записал демо, которое позже было переиздано на виниле. Этот релиз, осуществленный благодаря лейблу Level Plane, основанному барабанщиком Грегом Друди (который также был первым барабанщиком Interpol), изначально был создан именно для того, чтобы Saetia могли выпустить свою музыку. Выступления группы были отмечены невероятной эмоциональной интенсивностью, часто сопровождаясь нервными срывами и саморазрушительным поведением.
                                <br /><br />
                                Состав коллектива никогда не был постоянным. В 1998 году с группой произошла трагедия: первый бас-гитарист Алекс Мадара скончался после того, как тяжелейшая аллергическая реакция ввергла его в кому, длившуюся восемь дней. Его место занял Колин Бартолдус, и с этим составом группа записала свой дебютный LP, чьи ритмическая сложность и смелые мелодии стали её визитной карточкой. Вскоре Адам Марино покинул коллектив, и на бас-гитаре его заменил Стив Рош.
                                <br /><br />
                                За два с половиной года своего существования Saetia успели записать 17 песен, отыграть несколько туров и сменить четырех бас-гитаристов. Свой последний концерт в октябре 1999 года они, символично, сыграли там же, где и начали, - в ABC No Rio, на этот раз собрав около сорока человек. Последним студийным релизом группы стал сингл «Eronel» (названный в честь композиции Телониуса Монка), выпущенный на лейбле Witching Hour в 2000 году.
                                <br /><br />
                                <h4>Наследие и посмертные релизы</h4>
                                <br />
                                После распада Saetia достигли невероятного культового статуса. В 2001 году Level Plane выпустил альбом-компиляцию «A Retrospective», куда вошли все студийные записи коллектива. Позже, в 2016 году, лейбл Secret Voice, принадлежащий вокалисту Touché Amoré Джереми Болму, переиздал всё наследие группы в виде винилового бокс-сета «Collected», а запись с выступления в ABC No Rio вышла отдельной кассетой.
                                <br /><br />
                                Бывшие участники группы продолжили карьеру в таких известных проектах, как Hot Cross, Off Minor, The Fiction, Errortype: Eleven, Instruction.
                                <br /><br />
                                <h4>Воссоединение и новые работы (2022 - настоящее время)</h4>
                                <br />
                                В апреле 2022 года Saetia в обновлённом составе объявили о воссоединении после 24-летнего перерыва. Уже в ноябре того же года, вернув в группу Стива Роша и приняв в состав Тома Шлаттера, они отыграли несколько концертов. А 3 января 2025 года группа выпустила свой первый за более чем 26 лет трек «Tendrils», предвещающий выход нового мини-альбома.
                                <br /><br />
                                <h4>Стиль и влияние</h4>
                                <br />
                                По мнению издания Kerrang!, Saetia довели мелодраматизм до новой крайности, взяв за основу эмо и доведя его агрессию до предела. Звучание их одноимённого альбома было охарактеризовано как «инструментальный хаос абсолютной мощи», а крик Билли Вернера - как «достаточно острый, чтобы оставлять порезы».
                                <br /><br />
                                На творчество Saetia оказали влияние многочисленные группы, включая Born Against, Heroin, Antioch Arrow и многие другие. Их же наследие, в свою очередь, вдохновило таких исполнителей, как <NavLink to="/emo/thursday">Thursday</NavLink>, <NavLink to="/emo/la-dispute">La Dispute</NavLink>, Alexisonfire и Touché Amoré, став для них важным источником вдохновения.
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
                                <h4>Saetia - Interview. The history, lore & gear of the band with Adam Marino</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/uqpOJ5U6XIQ?si=xMTv-aC1tvgt1PAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>SAETIA AT MARTINS BEACH ~ 1999</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/r-_JDZwxloI?si=ynDTbCTUAHwDod0L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>[ LIVE Post-Hardcore Show ] Hot Cross - Bloomfield Ave Cafe Montclair NJ - 9/17/2005</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/aXRhdJlSzEM?si=362e10_NG1xTlJrH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Saetia - 04/29/2023(Live @ Programme Skate and Sound)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/kWOsrjfd1aY?si=sYXpVu4xrZZj5HTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

