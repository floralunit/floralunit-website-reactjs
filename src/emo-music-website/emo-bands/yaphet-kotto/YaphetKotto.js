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

export function YaphetKotto() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Yaphet Kotto | floralunit world ❤`;
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
            original: require('./images/6.webp'),
            thumbnail: require('./images/6.webp'),
        },
        {
            original: require('./images/7.webp'),
            thumbnail: require('./images/7.webp'),
        }
    ];

    return (
        <div className="bands yaphet-kotto">
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
                    <h id="head">Yaphet Kotto</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, emo 90s, hardcore punk, punk rock, screamo <br />
                    <b> Годы активности: </b> 1996–2005 <br />
                    <b> Место основания: </b> Santa Cruz, California, U. S. <br />
                    <b> Лейблы: </b> Ebullition, Analog Kid, Sonzai, Council, Scene Police <br />

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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Casey Watson, Mag Delana</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Casey Watson</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Mag Delana</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Pat Crowley</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Scott Batiste</li>
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
                                Yaphet Kotto - хардкор-панк-группа из Санта-Крус, Калифорния, названная в честь актёра Яфета Котто и активно выступавшая в период с 1996 по 2005 год. Коллектив образовался после распада группы Staple, в которой состояли Кейси Уотсон и Мэг Делана. В своих текстах музыканты поднимали остросоциальные и политические вопросы, а их творчество запомнилось слушателям хаотичными и катарсичными композициями, в которых переплетались яростные вокальные партии, мелодичность и звуковая агрессия. Группа выпустила три полноформатных альбома на лейбле Ebullition Records, а также приняла участие в записи множества синглов, мини-альбомов и сборников.
                                <br /><br />
                                История группы началась в 1996 году, когда гитаристы и вокалисты Кейси Уотсон и Мэг Делана, ранее игравшие в группе Staple, основали Yaphet Kotto. К ним вскоре присоединились басист Пэт Кроули, старый друг Уотсона, и барабанщик Скотт Батист. Название коллектива — дань уважения американскому актёру Яфету Котто, которым Делана искренне восхищался. Уже в аннотации к своему первому релизу, «The Killer Was in the Government Blankets», группа заявила: «Yaphet Kotto — не часть какой-либо сцены. Наслаждайтесь музыкой за то, что она есть, а не за то, кто её играет».
                                <br /><br />
                                Лирика коллектива была посвящена самым разным темам: от геноцида коренных народов Америки до революционного бездействия, «войны с террором», американской демократии и наследия сегрегации в США.
                                <br /><br />
                                После распада Yaphet Kotto её бывшие участники присоединились к таким группам, как Saviours, Look Back and Laugh, Baader Brains и многим другим.
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
                                <h4>The Story of Camping in Alaska</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/EyCd0Nix5Oo?si=CPc9ihk9WhNXSZ8a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>YAPHET KOTTO - 3/15/05 Oakland, CA - FULL SET</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/rUA1XBTJvAU?si=iHZvFlkC_YxYPyF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Yaphet Kotto live (Full Set)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/Vm5kmRmlBGI?si=VlJmRYV4uqRRPfDH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

