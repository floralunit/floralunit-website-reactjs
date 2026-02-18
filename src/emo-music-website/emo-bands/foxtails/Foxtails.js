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

export function Foxtails() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Foxtails | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/1.jpg'),
            thumbnail: require('./images/1.jpg'),
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
            original: require('./images/III.jpg'),
            thumbnail: require('./images/III.jpg'),
        }
    ];

    return (
        <div className="bands foxtails">
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
                    <h id="head">Foxtails</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, post-hardcore, math rock <br />
                    <b> Годы активности: </b> 2015–present <br />
                    <b> Место основания: </b> Monroe, Connecticut, U. S. <br />
                    <b> Лейблы: </b> Kitty on Fire Records <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://fffoxtails.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://foxtails.co/" target="_blank" rel="noreferrer">foxtails.co</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.facebook.com/foxtailsct/" target="_blank" rel="noreferrer">facebook</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.instagram.com/foxtailsct/" target="_blank" rel="noreferrer">instagram</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.discogs.com/artist/5520574-foxtails" target="_blank" rel="noreferrer">discogs</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Blue Luno Solaz</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> June Benham</li>
                                                <li> <img src={require('../../resources/instruments-images/violin.png')} className={'instrument-image'} alt={''} /> Jared Schmidt</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Blue Luno Solaz, Josh Garcia</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Michael Larocca</li>
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
                                <img src={require('./images/banner.png')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Foxtails - американская скримо-группа из Монро, штат Коннектикут. Текущий состав включает Блу Луно Соласа (вокал и бас-гитара), Джун Бенэм (гитара), Майкла Ларокку (ударные) и Джареда Шмидта (скрипка). Все четверо участников коллектива являются небинарными персонами и используют местоимения they/them. Дебютный альбом группы, озаглавленный «This Is Not for You» (стилизованно - все буквы строчные), вышел в 2015 году.
                                <br /><br />
                                <h4>История</h4><br />
                                Foxtails были основаны Блу Луно Соласом, Джун Бенэм, Майклом Лароккой и Джошем Гарсиа. Четверка познакомилась во время учебы в Региональном центре искусств - специализированной старшей школе сценических искусств в Трамбалле, Коннектикут. На третьем году обучения Бенэм начала искать музыкантов для создания группы и пригласила на прослушивание Ларокку. Ларокка, бывший тогда первокурсником, поначалу отказался, но год спустя все же прошел прослушивание и успешно присоединился к коллективу. Позже к ним примкнули вокалист Блу Луно Солас и басист Джош Гарсиа.
                                <br /><br />
                                После выхода дебютного альбома 2015 года Гарсиа ненадолго переключился на гитару, затем вернулся к басу и вскоре покинул группу. Коллектив продолжил существование как трио: Солас взял на себя партии бас-гитары при записи второго альбома «Ill», вышедшего в 2017 году. Пластинка была записана на студии Dead Air Studios в Амхерсте, штат Массачусетс, под продюсерским руководством Уилла Киллингсворта, гитариста группы <NavLink to="/emo/orchid">Orchid</NavLink>.
                                <br /><br />
                                Третий альбом «Querida Hija» (все буквы строчные) увидел свет в 2019 году и стал первой работой коллектива, содержащей песню полностью на испанском языке. Источником вдохновения для этого шага Солас назвал такие группы, как Amygdala, Lord Snow, Entierralos и Massa Nera, которые «выводят латиноамериканские голоса на передний план и не боятся петь на испанском».
                                <br /><br />
                                В 2022 году Foxtails выпустили четвертый альбом «FAWN» (стилизованно строчными буквами) - первую запись с участием скрипача Джареда Шмидта. Пластинка была сведена и спродюсирована Стивом Роучем (участником групп Off Minor и <NavLink to="/emo/saetia">Saetia</NavLink>) и записана на студии Permanent Hearing Damage в Филадельфии, штат Пенсильвания. «Fawn» получил положительные отзывы от изданий, включая Sputnikmusic, Stereogum, Paste Magazine и Brooklyn Vegan.
                                <br /><br />
                                Последней на данный момент работой группы стал мини-альбом «HOME» (все буквы строчные), выпущенный в 2024 году. «Home» стал первым релизом, сведенным вокалисткой и басисткой Блу Луно Солас. Все средства, вырученные от продаж за первую неделю, были направлены в Sylvia Rivera Law Project - организацию, оказывающую юридическую поддержку трансгендерным, интерсекс и гендерно-неконформным людям с низким доходом, а также цветным представителям ЛГБТК+ сообщества.
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
                                <h4>Foxtails on Audiotree Live (Full Session)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/7sbio7giw-M?si=XxmWvWF-ziRcadDd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>[hate5six] Foxtails - June 11, 2019</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/gkW1fuNsm3k?si=fSHV3xnsjJ388747" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>foxtails - fawn ALBUM REVIEW</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/NDAQaePWUwE?si=y9hchKxuzI8XFtLz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Foxtails - i experienced ego death on a skramcave thread/nde thread [ZH1 Sessions]</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/sJQVcp_oF-w?si=-yxuTfikowNpuFhD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>every window in alcatraz has a view of san francisco- Foxtails</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/jZyev1m6mqE?si=FVbputU95GXMkTfJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>FOXTAILS - New Friends Fest 2019</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/0rW9mCCAeQw?si=AHZcQmafVurZ-CjL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

