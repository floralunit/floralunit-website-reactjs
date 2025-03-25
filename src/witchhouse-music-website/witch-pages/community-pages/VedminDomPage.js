import React, { useEffect, useState } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import text3_background from '../../resources/images/444.gif'
import text2_background from '../../resources/images/4_.gif'
import text1_background from '../../resources/images/smoke.gif'
import third_background from '../../resources/images/ccad.gif'
import second_background from '../../resources/images/5mjD.gif'
import main_background from '../../resources/images/18_.gif'
import { UseScriptText } from '../../../common/components/UseScript.js';
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

import { VedmindomPhotos } from './vedmindom/vedmindom.js';

export function VedminDomPage() {
    useEffect(() => {
        document.title = `Ведьмин дом | floralunit world ❤`;
    });
    UseScriptText("VK.Widgets.Playlist('vk_playlist_-150736684_149', -150736684, 149,'2ae7a044d1b35fb1e4')");
    webamp.close();
    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${second_background})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight + section3.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${third_background})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [photosVedminDom, setPhotosVedminDom] = useState([]);
    useEffect(() => {

        if (photosVedminDom.length === 0) {
            const photos = VedmindomPhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const shuffledArray = [...photos];
            setPhotosVedminDom(shuffle(shuffledArray));
        }
    }, [photosVedminDom.length]);

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
                <br />
                <div >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src={require("../../resources/images/angel1.png")}
                                style={{ height: '120px', width: 'auto', margin: '15px' }}
                                alt=''
                            />
                            <img
                                src={require("./vedmindom/NxBqafomgvk.jpg")}
                                style={{ width: '400px', height: 'auto' }}
                                alt=''
                            />

                            <img
                                src={require("../../resources/images/angel1_l.png")}
                                style={{ height: '120px', width: 'auto', margin: '15px' }}
                                alt=''
                            />
                        </div>
                        <br />
                        <Link className='link-back' to="/witch-house" >
                            <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                            <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                        </Link>

                        <iframe style={{ margin: '15px', textAlign: 'center' }} src="https://vkvideo.ru/video_ext.php?oid=-150736684&id=456239435&hd=2" width="410" height="250" title='vk' allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                        <iframe style={{ margin: '15px', textAlign: 'center' }} width="410px" height="70px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1911335450&color=%23090909&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        <br />
                    </div>
                </div>

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ I
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
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/dJoFqM9iTrU?si=kS4UBcYKx9W7Es41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ TORQUE
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
                            src={require("./vedmindom/l8MQCmdMVv0.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/pqk1NR5bM54?si=Qqa1ztfOmnQeF-0a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ TORQUE
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
                            src={require("./vedmindom/6FADAEnUFJg.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/vufy1v0sKK0?si=LcmVG9n7YmHCW6l3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ ЛАК
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
                            src={require("./vedmindom/3eaomTsECK8.jpg")}
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
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ КАПЕЛЛА
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
                            src={require("./vedmindom/GYum_-vw4OE.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/m5cEhtFSo9k?si=JdLeYMlXL7rvKFhn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

            <br /><br />

            <section
                id='section2'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ БИБЛИОТЕКА
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
                            src={require("./vedmindom/EuIk4sXNgaQ.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/AKPRg7qDyWo?si=UYNDI_QvFW7nlH5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ МОРЕ
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
                            src={require("./vedmindom/IwEZ6-RL6u8.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/S1gOiB1D6zw?si=pus9h0KdFu0n8uDK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ ТЮМЕНЬ
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
                            src={require("./vedmindom/H_6JsXIWGSY.jpg")}
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
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ ОДИН ГОД
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
                            src={require("./vedmindom/vedmin_dom.gif")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/aKkvg_ChQXo?si=OgufUhtj9kqsBwdR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                РУССКАЯ ТЬМА
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
                            src={require("./vedmindom/vA4fGJqklrE.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br />
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/vedmin_dom" target="_blank" rel="noreferrer">Вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vedmindomrussia.tumblr.com/" target="_blank" rel="noreferrer">tumblr</a>
                    <hr />
                </div>
                <br />

                <div style={{ margin: '0 70px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosVedminDom} className='photo-gallery'></GalleryWithMusic>
                    </div>
                </div>

            </section>

            <section
                id='section3'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '25px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ ОТКРЫТЫЙ ВОЗДУХ
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
                            src={require("./vedmindom/3eupcg7eUz8.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/LDYxWXjp0EM?si=GJaG0zcmjCij2jry" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ВЕДЬМИН ДОМ X
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
                            src={require("./vedmindom/QKG4-imckRo.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/wumepUJMDag?si=bYXEd8HzgMIPZF1R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ XI
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
                            src={require("./vedmindom/Fo0RQIgAmr4.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/dOjgXWYbrBs?si=5IzPLTiZKAhiFImu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ВЕДЬМИН ДОМ XII
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
                            src={require("./vedmindom/hAHsXuKKEBc.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/W3JxpOql45w?si=7HdFMNQLAF1kFmS_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '25px' }}>
                            <p>

                                ВЕДЬМИН ДОМ XIII: 2 ГОДА НА СЦЕНЕ
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
                            src={require("./vedmindom/tzQMvjNUOww.jpg")}
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
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ МОСКВА
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
                            src={require("./vedmindom/POOeQMHUXww.jpg")}
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
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ПОСЛЕДНИЙ ВЕДЬМИН ДОМ
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
                            src={require("./vedmindom/oOlbgE5Qe9k.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/kAK7qoNVg9w?si=-WH9lK6acz0rNWtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>


                                РУССКАЯ ТЬМА 2
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
                            src={require("./vedmindom/kfkZn0VXh4A.jpg")}
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
        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ВЕДЬМИН ДОМ: ВОЗРОЖДЕНИЕ
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
                            src={require("./vedmindom/KLHWuAmcHPs.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-150736684&id=456239793&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
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
        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ВЕДЬМИН ДОМ Х CRIM3S
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
                            src={require("./vedmindom/u93ghP9jNXI.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/Z7_k644dCco?si=HFoKPqNo0tKJls6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
                <br />
                <div style={{ width: '400px', margin: '20px' }}>
                    <div id="vk_playlist_-150736684_149"></div>
                </div>
            </section>
            <br />
        </div>
    );
}
