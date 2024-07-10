import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import { SongLyrics } from "../../components/SongLyrics"
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

export function SixMilSebya() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    const [selectedSong, setSelectedSong] = useState(null);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [isShownSongs1, setIsShownSongs1] = useState(false);
    const [open1, setOpen1] = useState(false);
    const handleClickShowSongs1 = () => {
        setIsShownSongs1(current => !current);
        setOpen1(open => !open);
    };

    const images = [
        {
            original: require('./images/6mil5.webp'),
            thumbnail: require('./images/6mil5.webp'),
        },
        {
            original: require('./images/6mil2.webp'),
            thumbnail: require('./images/6mil2.webp'),
        },
        {
            original: require('./images/6mil1.webp'),
            thumbnail: require('./images/6mil1.webp'),
        },
        {
            original: require('./images/6mil4.webp'),
            thumbnail: require('./images/6mil4.webp'),
        },
        {
            original: require('./images/6mil3.webp'),
            thumbnail: require('./images/6mil3.webp'),
        },
        {
            original: require('./images/6mil9.jpg'),
            thumbnail: require('./images/6mil9.jpg'),
        },
    ];

    return (
        <div className="bands sixsebya">
            <div className='bands-container'>
                <br />
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <Link className='link-back' to="/emo">
                        <img src={require("../../../main-website/resources/pixels/rYgMZnK.gif")} style={{ height: '15px' }} alt='' />
                        <span >&nbsp;back to emo page&nbsp;</span>
                        <img src={require("../../../main-website/resources/pixels/rYgMZnK.gif")} style={{ width: '15px' }} alt='' />
                    </Link>
                </div>
                <div className="header">
                    <h id="head">6000000000 себя</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, alternative, cybercore, post-grunge <br />
                    <b> Годы активности: </b> 2006 – 2007 (1 год) <br />
                    <b> Место основания: </b> Самара, Россия <br />
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
                                                <li> <img src={require('../instruments-images/singer.png')} className={'instrument-image'} alt={''} />Антон </li>
                                                <li> <img src={require('../instruments-images/guitar.png')} className={'instrument-image'} alt={''} />Алексей Колтунов</li>
                                                <li> <img src={require('../instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} />Гоша</li>
                                                <li> <img src={require('../instruments-images/drums.png')} className={'instrument-image'} alt={''} />Сергей Карякин (Каряка)</li>
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
                                Группа 6000000000себя была образована 22 мая 2006 года в городе Самара, Россия. Группа записала и собственными силами выпустила сингл «6000000000» и альбом «Прошу,убей меня!».
                                Также клипы группы на песни «Галерея снов», «Тоннель в небо» и «6000000000», которые транслировались в эфире телеканала A-One» (Первый Альтернативный).<br />
                                После ряда изменений в составе группа (пере)записала альбом «Прошу, убей меня!» на лейбле «A-One Records». Однако до выхода альбома в продажу группа прекратила свое существование.
                                <br /><br />
                                Перед тем как собраться вместе участники группы играли в разных командах, переходили из коллектива в коллектив, но потом всё-таки нашли друг друга. Образовавшись в новую музыкальную команду, ребята начали поиски своего нового звучания. С первых дней существования группа ставит перед собой серьёзные цели… Не ориентируясь на существующие, на тот момент западные и отечественные группы и закрывшись от любого воздействия извне, группа обрела полноценность и самодостаточность во всех смыслах. После прослушивания первых композиций создавалось явное ощущение того, что группа не хочет быть одной из многих, а хочет сделать что-то свое, новое и ни на что не похожее.
                                <br /><br />
                                Первая пластинка-сингл, которая вышла в том же 2006 году, включает в себя 4 песни:<br />
                                «Последний день войны», «Часть моих мыслей», «6000000000» и «Яхта» (Home version). На тот момент в адрес группы было достаточное количество критики. Но, тем не менее, ребят это не останавливало, а даже наоборот. Хотя вместе с критикой у группы появлялась своя аудитория слушателей, в последствии и верных поклонников. В сентябре 2006 года группа начинает запись альбома «Прошу, убей меня!», который выпустит «A-One Records» осенью 2007 года. Дебютный альбом 6000000000себя «Прошу, убей меня!» являет собой новую форму альтернативной музыки - это долгая, кропотливая работа, каждый участник группы вложил в него большое количество энергии, своих чувств и эмоций… Энергетика альбома настолько разнообразна, что любой слушатель найдет что-то для себя. Пластинка впитала в себя всю неоднозначность, а порой и противоречивость музыкальных образов, создававшихся коллективом. Концепция альбома «Прошу, убей меня!» заключается в симбиозе грязных и рваных гитар, психоделических, электронных покрытий и мелодичного вокала. Темы, поднимаемые в текстах, не несут никакого протеста и отражают проблемы и вопросы между одним человеком и целым миром.
                                <br /><br />
                                Оригинальный состав:<br />
                                Антон - вокал;<br />
                                Лёша - гитара;<br />
                                Гоша - бас;<br />
                                Каряка - ударные;<br />
                                Кубань - компьютер.
                                <br /><br />
                                Также в группе принимали участие:<br />
                                Дрянь - вторая гитара; <br />
                                Мик - MC; <br />
                                Чех - компьютер;<br />
                                Макс - вокал «Тоннель в небо».<br />
                                Support: Сима - фото; Хоффман - фото; Лис - фото; Лида - фото.
                                <br /><br />
                                После ухода Антона, состав покинули Кубань и Каряка.<br />
                                Был набран новый состав, который перенес фатальные изменения и прожил совсем недолго: Эдик – бас; Гоша – компьютер; Лёша - гитара; Яша - барабаны; Саша - вокал.
                                Слова Лёши:
                                <br /><br />
                                «Если кто-то ещё не понял…..Группы 6000000000себя, которую вы знали, больше нет….Последним словом от неё будет переизданный альбом, который выйдет точно до нового года….И мне не "Стрёмно" его выпускать, потому что я вложил в него всю свою душу и жизнь….Этот альбом память о тех днях когда мы были вместе…
                                ….Он очень много значит для всех нас…И дело совсем не в каждом из нас….дело в музыке…и она будет жить…».
                                <br /><br />
                                <div>
                                    Информация взята с <a href="https://www.last.fm/ru/music/6000000000себя"
                                        target="_blank"
                                        style={{ textDecoration: 'underline' }}
                                        title="переход на last.fm"
                                        rel="noopener noreferrer">last.fm </a>
                                </div>

                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <div className={"Parent"}>
                                <div className={"child1"}>
                                    <h3 style={{ textAlign: 'center' }}>Альбомы</h3>
                                    <ul type="none">
                                        <li>
                                            <div onClick={handleClickShowSongs1} className={'albumList'}><img
                                                src={require('./images/прошу_убей_меня.jpg')}
                                                style={{ width: "50px", margin: '5px' }} alt={''} /> Прошу, убей меня! (2008) {open1 ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album || '').includes('Прошу')
                                                        ).map(u => (
                                                            <>
                                                                <li key={u.key}
                                                                    onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                            </>
                                                        ))}
                                                    </div>
                                                </ol>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                                <div className={"child2"} style={{ borderLeft: '1px solid gray' }}>
                                    {selectedSong ? <SongLyrics song={selectedSong} /> : <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        Нажми по альбому, чтобы открыть список песен. Нажми по песне, чтобы появился сам трек, текст песни (если он есть) и мой перевод (если он есть).
                                        <br />
                                        <img src={require('../../resources/heart-boy-smoking.gif')} style={{ height: "auto", width: '200px', margin: '0 auto', textAlign: 'center' }} alt={''} />
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <h4>6000000000 себя - тоннель в небо</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/x2aHuWvgcdo?si=RHKL9Rxt6JtaZXTm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>6000000000себя - Галерея снов</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/-T5OfaEiMkk?si=cNWq6BL5avH2GLXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>6000000000 себя 6000000000 себя A One rip</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/Ez5XZbGo1iU?si=oZH6lZRaYpqqFnu6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>6000000000 себя 15.05.2007 Рок-Бар "Подвал"</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/qldVueW_STo?si=X9J7jx-eqzmoOo5N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
