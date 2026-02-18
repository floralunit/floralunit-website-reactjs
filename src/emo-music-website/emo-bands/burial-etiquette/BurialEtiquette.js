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

export function BurialEtiquette() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Burial Etiquette | floralunit world ❤`;
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
            original: require('./images/4.jpg'),
            thumbnail: require('./images/4.jpg'),
        },
        {
            original: require('./images/5.jpg'),
            thumbnail: require('./images/5.jpg'),
        },
        {
            original: require('./images/Held Tight In Fragile Embraces.jpg'),
            thumbnail: require('./images/Held Tight In Fragile Embraces.jpg'),
        },
        {
            original: require('./images/February 18th 1.jpg'),
            thumbnail: require('./images/February 18th 1.jpg'),
        },
        {
            original: require('./images/Burial Etiquette 1.jpg'),
            thumbnail: require('./images/Burial Etiquette 1.jpg'),
        }
    ];

    return (
        <div className="bands burial-etiquette">
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
                    <h id="head">Burial Etiquette</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> non-binary screamo/emo, post-hardcore <br />
                    <b> Годы активности: </b> 2018 - present <br />
                    <b> Место основания: </b> Thunder Bay, Ontario, U. S. <br />
                    <b> Лейблы: </b> Emocat Records <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://burialetiquette.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.discogs.com/ru/artist/6827682-Burial-Etiquette" target="_blank" rel="noreferrer">discogs</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Jaccob Hanley</li>
                                                <li> <img src={require('../../resources/instruments-images/synthesizer.png')} className={'instrument-image'} alt={''} /> Jaccob Hanley</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Jaccob Hanley</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Veta, Ophelia Jocelyn</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Nick, Ryan Despres</li>
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
                                <img src={require('./images/logo.jpg')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Burial Etiquette - это небинарный коллектив из Тандер-Бея (Онтарио), играющий на стыке скримо, эмо и пост-хардкора. Их звучание - это искусное лавирование на лезвии звукового столкновения. По одну сторону этой ножевой кромки - отчаяние, по другую - надежда. В каждом душераздирающем крике здесь слышна боль, а в каждом надрывном вопле, взывающем к чему-то лучшему, чувствуется оптимизм.
                                <br /><br />
                                Группа была образована как прямой ответ на сокрушительную скорбь, вызванную потерей близких. Её создатели стремились найти способ чтить память ушедших в мире, который движется слишком быстро, чтобы чувствам воздавалась та весомость, которой они заслуживают. Название Burial Etiquette («Похоронный этикет») родилось из этого стремления - изучить, как разные культуры прощаются с любимыми, и найти свой ритуал. В его основе лежит концепция двух смертей: первая наступает, когда человек покидает этот мир, а вторая - когда близкий человек в последний раз произносит его имя или вспоминает момент, заставляющий улыбнуться. Именно этой теме посвящена композиция «Gentle Wings», ставшая для многих визитной карточкой группы.
                                <br /><br />
                                История Burial Etiquette в её нынешнем виде началась не сразу. Изначально Тейлор (вокал, бас) участвовал в записи лишь как приглашённый вокалист для двух треков. Лишь в 2019 году он официально вошёл в состав, а спустя несколько месяцев взял на себя партии бас-гитары. К тому моменту видение проекта уже сформировалось, и Тейлор с энтузиазмом стал его частью, найдя глубокий отклик в идее создания музыки в память о тех, кого больше нет рядом.
                                <br /><br />
                                Джаккоб (гитара, ударные, вокал) прошёл путь, знакомый многим музыкантам андеграунда: открыв для себя панк-рок в седьмом классе, он был поражён не только музыкой, но и самой философией DIY. Решающим моментом стал подарок владельца местного музыкального магазина - бокс-сет группы Unwound с подробным эссе внутри. Для впечатлительного подростка это стало руководством к действию, зародив мечту провести жизнь, играя в группах. Позже, через творчество Unwound и Drive Like Jehu, он пришёл к скримо. Этот жанр стал для Джаккоба откровением, разрушив все барьеры и жанровые ожидания. Он сравнивает это чувство с осознанием собственной небинарности: в скримо, как и в его идентичности, нет правил, есть лишь свобода самовыражения. Влияние на группу оказали и лоу-фай записи канадских коллективов Eric's Trip и Elevator To Hell, показавших, что сам процесс домашней записи может быть инструментом творчества, а ограничения рождают новые возможности.
                                <br /><br />
                                Для Тейлора отправной точкой стали концерты Alexisonfire в их родном городе. Но настоящее погружение в скримо-сцену произошло позже, в 2018 году, благодаря форумам вроде Skramcave.
                                <br /><br />
                                Отличительной чертой Burial Etiquette, их своеобразной звуковой подписью, стали накладывающиеся друг на друга вокальные партии, сплетающие чистый, почти инди-фолковый вокал с надрывным скримом. Этот приём, напоминающий о творчестве Circle Takes the Square, требует особого подхода к написанию песен. Джаккоб и Тейлор используют свои голоса как инструменты повествования, черпая вдохновение в театре, кино и видеоиграх. В некоторых песнях разные вокалисты представляют разные точки зрения персонажей, создавая многослойное повествование, которое разворачивается на протяжении всей дискографии. Динамика - контраст между хрупкими, почти акустическими балладами и сокрушительной яростью - всегда была для них ключевой. Вдохновение они черпают как у групп вроде Carissa's Wierd, так и у Ostraca, стремясь вызвать у слушателя наиболее сильную эмоциональную реакцию.
                                <br /><br />
                                Изоляция Тандер-Бея, расположенного на северном берегу Верхнего озера, наложила отпечаток и на местную сцену, и на звучание группы. Одиночество лунных прогулок по лесу и долгих зимних месяцев нашло своё отражение в их музыке. Местная сцена уникальна своей эклектичностью: из-за небольшого количества групп на одном концерте могут выступать коллективы с противоположных жанровых полюсов, создавая необычную динамику.
                                <br /><br />
                                Burial Etiquette - невероятно плодовитый коллектив. За время своего существования они выпустили несколько EP, множество сплитов и приняли участие в ряде компиляций. Среди их работ - участие в шестистороннем сплите Cube от Zegema Beach Records, где их треки вошли в число лучших в дискографии. В феврале вышел новый сплит Faceless Departure на кассетах в трёх вариантах от лейблов из Европы, Японии и США (Gizzmoix Records, BSJD, Self Versed Records), отличающихся креативным оформлением (например, с кастомными карточками Pokémon).
                                <br /><br />
                                Их дебютный полноформатный альбом, запланированный к выходу 25 марта на лейбле Zegema Beach Records, готовился необычно. Половина материала была написана до пандемии, но локдаун заставил пересмотреть планы. Вместо концертов группа сосредоточилась на записи сплитов с коллективами со всего мира, используя это время для «обкатки» альбомного материала. Песни переписывались и дорабатывались на протяжении нескольких лет, что привело к появлению их самого плотного и динамичного материала на сегодняшний день. В альбоме, ориентированном на звучание поздних 90-х и ранних 2000-х, слушателей ждут сложные структуры, повторяющиеся лирические и музыкальные мотивы, а завершает его десятиминутная композиция.
                                <br /><br />
                                Помимо музыки, Burial Etiquette активно участвуют в жизни сообщества. Их политическая позиция, отражённая в творчестве, недвусмысленна: они выступают в поддержку прав LGBTQIA+, защиты трансгендерных детей, участвуют в благотворительных компиляциях в поддержку Палестины и других глобальных инициатив. По их собственным словам, если вы не разделяете их убеждений или не используете корректные местоимения по отношению к друзьям, их музыка не для вас. В центре их подхода - DIY-этика, стремление делать всё на своих условиях и сохранять прямую, прозрачную связь со слушателем. Для них важен физический носитель, ритуал прикосновения к обложке, чтения текстов и благодарностей - понимание альбома не просто как набора песен, а как застывшего в времени особого момента между близкими людьми.
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
                                <h4>Burial Etiquette Live | Vox Popular</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/o7rkF2H7xws?si=HAsPlUltgdgXlZYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>Burial Etiquette - Exhaustion That Led To Collapse</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/2JunC1Jc8wI?si=bGpfAcJeTcvAEdmW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Shot.by.demon • Burial Etiquette • Stage Right • New Friends Fest 2023</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/jhH0Z4nJWmk?si=6isMhdoSJ_XV5gGf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Burial Etiquette - Solace @Cinema 5 Skatepark</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/5wJMry4bva0?si=gGF636ruP99_sz_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

