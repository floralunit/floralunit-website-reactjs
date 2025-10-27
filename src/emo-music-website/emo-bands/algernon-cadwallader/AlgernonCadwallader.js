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

export function AlgernonCadwallader() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '333333');
    document.documentElement.style.setProperty('--box-header-text-color', 'c0c0c0');

    useEffect(() => {
        document.title = `Algernon Cadwallader | floralunit world ❤`;
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
            original: require('./images/5.jpg'),
            thumbnail: require('./images/5.jpg'),
        },
        {
            original: require('./images/6.webp'),
            thumbnail: require('./images/6.webp'),
        },
        {
            original: require('./images/7.webp'),
            thumbnail: require('./images/7.webp'),
        }
    ];

    return (
        <div className="bands algernon-cadwallader">
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
                    <h id="head">Algernon Cadwallader</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, midwest emo, math rock, post-hardcore <br />
                    <b> Годы активности: </b> 2005–2012, 2022–present <br />
                    <b> Место основания: </b> Yardley, Pennsylvania, U.S. <br />
                    <b> Лейблы: </b> Saddle Creek, Lauren, Asian Man, Hot Green, Big Scary Monsters, Protagonist <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://algernoncadwallader.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://pillowheadmerch.com/collections/algernon-cadwallader/" target="_blank" rel="noreferrer">pillowheadmerch</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Peter Helmis, Joe Reinhart</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Joe Reinhart</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Colin Mahony</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Peter Helmis</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Nick Tazza, Tank Bergman</li>
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
                                <img src={require('./images/Fun.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Algernon Cadwallader - американский коллектив из Ярдли, Пенсильвания, творчество которого лежит в жанрах мидвест-эмо и мат-рок. Изначально группа существовала в период с 2005 по 2012 год. В 2022 году музыканты объявили о воссоединении и возвращении на концертную сцену. Издание Stereogum охарактеризовало коллектив как «героев возрождения эмо».
                                <br /><br />
                                <b>Основание, творческий путь и распад (2005–2012)</b>
                                <br /><br />
                                Питер Хелмис, Джо Райнхарт и Колин Махони познакомились в старшей школе Пенсбери и вместе со своим другом TJ ДеБлуа (ударником металкор-группы A Life Once Lost) в 2001 году основали группу-предшественницу Algernon Cadwallader под названием Halfway to Holland. Хелмис и Райнхарт выступали в роли гитаристов, Махони - басиста, а вокал исполнял Хелмис. Хотя коллектив просуществовал недолго, успев выпустить лишь демозапись и одноимённый альбом перед распадом в 2004 году, он сумел собрать собственную культовую фан-базу. После этого Хелмис занялся сольными проектами и работой в дуэтах, а Махони и Райнхарт вместе с другими одноклассниками создали группу Like Lions. Их сотрудничество в Like Lions оказалось недолгим из-за творческих разногласий, после чего они связались с Хелмисом и своим другом Ником Таззой (из Ape Up!), чтобы основать Algernon Cadwallader в 2005 году.
                                <br /><br />
                                Состав группы претерпел изменения: Хелмис остался вокалистом, но поменялся инструментом с Махони, который перешёл на ритм-гитару. В 2006 году был выпущен демо-альбом из четырёх композиций, в котором звучание было более ориентировано на мат-рок и мидвест-эмо, нежели в их предыдущем проекте. При этом лирика наполнилась жизнеутверждающими мотивами, обращёнными к личному опыту и повседневности, что контрастировало с более мрачной и меланхоличной эстетикой, традиционной для жанра эмо. Свой первый полноформатный альбом под названием Some Kind Of Cadwallader группа представила в 2008 году. На тот момент выступления коллектива в основном проходили в подвалах и на домашних концертах в Филадельфии, изредка перемежаясь короткими турами по соседним городам. Тазза покинул группу в начале 2008 года, и его место занял Мэтт «Танк» Бергман из US Funk Team. Позже, в том же году, Algernon покинул и Махони, после чего коллектив решил не искать ему замену, продолжив путь в формате трио.
                                <br /><br />
                                В составе трио группа отыграла концерты по Америке и выступила в Европе. В 2009 году музыканты выпустили мини-альбом Fun на лейбле Protagonist Music, а затем представили свой второй полноформатный альбом Parrot Flies в 2011 году. В 2012 году коллектив «упокоился».
                                <br /><br />
                                <b>Период после распада (2012–2022)</b>
                                <br /><br />
                                В 2014 году Райнхарт, Хелмис и Тазза вместе с гитаристом группы Snowing Нейтом Дионном создали проект Dogs on Acid, который в 2015 году выпустил один одноимённый альбом.
                                <br /><br />
                                В 2018 году Algernon Cadwallader впервые переиздали свои альбомы на цифровых стриминговых платформах. Это издание включало то, что сами музыканты назвали своим «третьим LP» - компиляцию демозаписей 2006 года, мини-альбома Fun 2009 года, а также несколько би-сайдов и каверов на инструментальные композиции The Beatles и The Beach Boys, «некоторые из которых мы решили доработать, добавив вокальные партии».
                                <br /><br />
                                Algernon Cadwallader признаны провозвестниками возрождения эмо середины 2000-х и регулярно удостаиваются похвал за свои мат-роковые аранжировки, в которых переплетаются альтернативные строи и синкопы, занимая заметные места в различных «топ-листах» эмо-коллективов.
                                <br /><br />
                                Райнхарт присоединился к филадельфийской инди-рок группе Hop Along, а также основал студию звукозаписи Headroom Studios в Филадельфии. Хелмис продолжил творческую деятельность в других проектах, таких как Peter the Piano Eater, Yankee Bluff и Peter & Craig.
                                <br /><br />
                                <b>Воссоединение (2022 – настоящее время)</b>
                                <br /><br />
                                1 июня 2022 года группа, в составе которой на тот момент числились все бывшие участники, объявила о воссоединении и предстоящем туре по Северной Америке.
                                <br /><br />
                                После успешного североамериканского тура Algernon Cadwallader анонсировали два концерта в канун Нового года в филадельфийском зале Johnny Brenda's.
                                <br /><br />
                                В 2023 году коллектив, вновь собравшийся в изначальном составе - Хелмис, Райнхарт, Махони и Тазза - объявил о серии туров. 19 января 2023 года был анонсирован хедлайнерский тур по Японии в апреле того же года, за которым последовали концерты в Европе и Великобритании в июне. 20 сентября музыканты сообщили о туре по юго-западу США на ноябрь 2023 года, параллельно выступив на фестивалях в Сиэтле и Филадельфии.
                                <br /><br />
                                28 декабря 2023 года группа представила кавер на композицию «Mad World» коллектива Tears for Fears в знак поддержки гуманитарных усилий в помощь Палестине. Запись была создана совместно с Kinsella + Pulse, Тео Катсаунисом и Брайсом Паласки, а все средства от её продаж были направлены Обществу Красного Полумесяца Палестины.
                                <br /><br />
                                5 августа 2025 года музыканты выпустили новый сингл «Hawk». Их третий студийный альбом Trying Not to Have a Thought вышел 12 сентября 2025 года на лейбле Saddle Creek и был высоко оценён критиками.
                                <br /><br />
                                <h4>Музыкальный стиль и влияние</h4><br /> Творчество Algernon Cadwallader определяют как эмо и мат-рок. Среди своих ключевых вдохновителей группа называет Cap'n Jazz и The Beatles. По словам Яна Коэна из Pitchfork, коллектив «сознательно избрал мидвест-эмо среди прочих форм панка и хардкора, что позволило им освободиться от профессионализма, излишней искренности и амбиций, характерных для инди-рока». Как отмечает Rolling Stone, «Algernon Cadwallader игнорировали современное эмо, обратившись к его истокам».
                                <br /><br />
                                Гитарное мастерство Джо Райнхарта в группе включало тэппинг, арпеджио, гармоники, хаммер-оны и пул-оффы, нестандартные размеры и аккордовые последовательности с использованием каподастра. Дебютный альбом коллектива Some Kind of Cadwallader характеризовали как «техничный», отмечая, что он стилистически заимствует элементы не только мат-рока, но и хэви-метала. Второй альбом Parrot Flies, по мнению критиков, «предвосхитил» стилистику будущих работ Райнхарта в филадельфийской инди-рок группе Hop Along. Отдельные риффы с этой пластинки вызывали сравнения с творчеством Pavement.
                                <br /><br />
                                Американская музыкантка Yvette Young называла Algernon Cadwallader одним из своих источников вдохновения.
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
                                <h4>The Legacy of Algernon Cadwallader: Emo's Greatest Band</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/sIgkwjaFduE?si=XO7_LXrv5O8Y4rxf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Algernon Cadwallader - Hawk [Official Video]</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/YgWklrkn5cA?si=3BgKXmp5KecQ-Wiq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>ALGERNON CADWALLADER- Spit Fountain</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/2dPenCDDbi4?si=3nu5nIP65jQVMGhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>[hate5six] Algernon Cadwallader - October 30, 2022</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/5ccojyQnRnw?si=JNGutUO3z6ncq3LH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

