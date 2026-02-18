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

export function BrightLightsAlwaysTurnOff() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `Bright Lights Always Turn Off | floralunit world ❤`;
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
            original: require('./images/Demo.webp'),
            thumbnail: require('./images/Demo.webp'),
        }
    ];

    return (
        <div className="bands bright-lights-always-turn-off">
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
                    <h id="head">Bright Lights Always Turn Off</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, post-hardcore, emoviolence <br />
                    <b> Годы активности: </b> 2006 <br />
                    <b> Место основания: </b> Duluth, St. Louis County, Minnesota, U. S. <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://canadianwastelandarchives.blogspot.com/2024/05/bright-lights-always-turn-off-demo-2006.html" target="_blank" rel="noreferrer">canadianwastelandarchives.blogspot.com</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Dan Rude</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Odin</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Garrett</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Steve</li>
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
                                Bright Lights Always Turn Off (сокращённо BLATO) - недолговечный скримо-коллектив из Дулута, штат Миннесота, чьё существование уместилось в один лишь 2006 год. За свою скоротечную карьеру группа отыграла всего два полноценных концерта, одним из которых стал релиз-шоу в поддержку EP популярной местной скримо-группы Bear Garden. В активе коллектива числится лишь шесть известных композиций: три вошли в демо-запись, ещё три так и остались неизданными. К счастью, эти три трека удалось оцифровать благодаря человеку, у которого сохранился диск с записью.
                                <br /><br />
                                Группа родилась в городе, отнюдь не слывшем в середине нулевых центром скримо-сцены, однако музыканты быстро нашли свою аудиторию через Myspace и тематические форумы. Их звучание - сокрушительные гитарные риффы в духе Jerome's Dream и The Red Scare, перемежающиеся с пронзительным, раздирающим глотку вокалом, который оценят поклонники <NavLink to="/emo/orchid">Orchid</NavLink> и Louise Cyphre. В музыке BLATO нет места пустоте - каждый миг заполнен то щемящими, пронзительными мелодиями, то чистыми звуковыми риффами, несущимися в бешеном темпе и порой напоминающими о блэк-метале.
                                <br /><br />
                                За микрофоном стоял шестнадцатилетний Дэн Руд, чей надрывный, кислотный скрим отражал текстурную материю его жизни - скитания по миннесотским центрам временного содержания для несовершеннолетних и прочие подростковые трудности. Помимо Руда, состав включал гитариста Одина.
                                <br /><br />
                                Несмотря на то, что тираж их единственного EP составил всего 50 дисков, сделанных вручную, запись не канула в Лету: относительно неизвестная на просторах Myspace, она обрела новую жизнь благодаря публикации на YouTube. Помимо выступления на разогреве у Bear Garden в местном зале Rice Lake Town Hall, музыканты успели сыграть лишь один концерт - в Северном Висконсине. После распада BLATO Дэн Руд и гитарист Один продолжили карьеру в составе эмо-группы Bear Garden из Миннеаполиса.
                                <br /><br />
                                Доподлинно о группе известно немного, однако фрагменты пазла удалось собрать благодаря интервью, которое вокалист дал блогу This Endless Breath, приоткрыв завесу над историей этого мимолётного, но яркого проекта.
                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <><AlbumListPage albums={songsData} /></>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

