import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { AlbumListPage } from "../../components/AlbumListPage";

export function Kashtanka() {
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
            original: require('./images/kashtanka1.jpg'),
            thumbnail: require('./images/kashtanka1.jpg'),
        },
        {
            original: require('./images/kashtanka2.jpg'),
            thumbnail: require('./images/kashtanka2.jpg'),
        },
        {
            original: require('./images/kashtanka3.jpg'),
            thumbnail: require('./images/kashtanka3.jpg'),
        },
        {
            original: require('./images/kashtanka4.jpg'),
            thumbnail: require('./images/kashtanka4.jpg'),
        },
        {
            original: require('./images/kashtanka5.jpg'),
            thumbnail: require('./images/kashtanka5.jpg'),
        },
        {
            original: require('./images/kashtanka6.webp'),
            thumbnail: require('./images/kashtanka6.webp'),
        },
    ];

    return (
        <div className="bands kashtanka">
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
                    <h id="head">Kashtanka</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, russian emo, screamo, post-hardcore <br />
                    <b> Годы активности: </b> 2015-present <br />
                    <b> Место основания: </b> Volgograd, Volgogradskaya oblast', Russia <br />
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> ?</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> ?</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> ?</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> ?</li>
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
                                «Итак, наша мёртвая группа заняла третье место с альбомом "Взаимность" 2018-го года в топе десятых по версии подписчиков паблика Boring Emo. Спасибо всем, кто упоминал нас в голосовании.
                                <br /><br />
                                Вот вам по этому случаю маленькая история касательно записи этого альбома от барабанщика группы Антона. Возможно, некоторые подумают, что у нас зашкаливает ЧСВ, но, как говорится, из песни слов не выкинешь.
                                <br /><br />
                                "Перед тем, как ехать записывать барабаны, я позвонил Мише, и сказал:"Ты в курсе, что мы сейчас едем записывать один из великих эмо-альбомов?". Он спросил:"Да? Ты это чувствуешь?". И я ответил:"Да, я это чувствую"."
                                <br /><br />
                                Поэтому занимайтесь любимым делом, верьте в себя, не отступайте перед трудностями - и всё получится.
                                <br /><br />
                                Спасибо за внимание🖤»
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
                                <h4>Kashtanka: Цех live</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/Fxqsr6DqaLI?si=K6KtG_eafcm0VVfl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Kashtanka – Ошибки (Live, 16.10.2022, Бумажная фабрика, Москва)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/JUfk4F-OvBE?si=yEJj2PGTtUkUvny8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>Прощальный концерт Каштанки (16.10.2022)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/iRt7ufFMHus?si=p9hOXfGrHeMdFP8e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
