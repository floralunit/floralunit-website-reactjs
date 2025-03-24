import React, { useEffect, useState } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import second_background from '../../resources/images/baba.gif'
import main_background from '../../resources/images/13.gif'
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

import { Vv17chou7 } from './vv17chou7.js';
import { VV17CHOU7Photos } from './vv17chou7/vv17chou7.js';

export function VV17CHOU7Page() {
    useEffect(() => {
        document.title = `VV17CHØU7 | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_73', 283385573, 73,'eabe07992a90e79771')");
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-150736684_134', -150736684, 134,'a263508783a7a972ea')");
    webamp.close();
    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);

    const [photosVv17chou7, setPhotosVv17chou7] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/155682507' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154824757' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154601524' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/153899543' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154020925' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154182467' }
        ];

        if (photosVv17chou7.length === 0) {
            const photos = VV17CHOU7Photos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosVv17chou7(shuffle(shuffledArray));
        }
    }, [photosVv17chou7.length]);

    return (
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="crt"></div>
            <section
                id='section1'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >
                <hr />
                <Vv17chou7 />
                <hr />
                <br />
                <div >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/UZkGNXWqMHk.jpg")}
                            style={{ width: '600px', height: 'auto' }}
                            alt=''
                        />
                        <br />
                        <Link className='link-back' to="/witch-house" >
                            <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                            <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                        </Link>
                        <iframe style={{ margin: '15px', textAlign: 'center' }} width="560" height="315" src="https://www.youtube.com/embed/FaF2kQeN3hU?si=NqnAUlzSoTbn8mBc" autoplay='1' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '65px' }}>
                            <p>
                                VV17CHØU7
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/unswl-wue1M.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-74730723&id=171630624&hd=1" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 II&nbsp;
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>

                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-74730723&id=171630636&hd=2" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                VV17CHØU7 III
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/J1JQMnEcvxA.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-74730723&id=171630637&hd=2" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
    ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 IV&nbsp;
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/WeVH_FFK7tw.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 V&nbsp;
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/dvgP_jeNh6I.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '50px' }}>
                            <p>
                                VV17CHØU7 KVZVN
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/tknK0qesT0Y.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-74730723&id=171630663&hd=2" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 VI&nbsp;
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/l1Vy674Bewk.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                VV17CHØU7 VII
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/IATBm3qqllg.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=304864481&id=171169759&hd=2" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '45px' }}>
                            <p>
                                VV17CHØU7 VØZM3ZD13
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/O9DhDGySM7A.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/y6vL0r_VGB0?si=hJk2cGZHwFQeZlN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                VV17CHØU7 IX
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/D8yH4NVOyYA.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/PnqiWsyH-3w?si=MLkuuPCLjQlj5Uny" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 X&nbsp;
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/u_0VFDsAaOk.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '35px' }}>
                            <p>
                                &nbsp;VV17CHØU7 III YEARS&nbsp;
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./vv17chou7/88888.gif")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/w17chou7" target="_blank" rel="noreferrer">Вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/vv17chou7" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/vv17chou7" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <br />

                <div style={{ margin: '0 50px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosVv17chou7} className='photo-gallery'></GalleryWithMusic>
                    </div>
                </div>

            </section>
            <br /><br />
        </div>
    );
}
