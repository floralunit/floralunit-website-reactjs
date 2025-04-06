import React, { useEffect, useState } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import second_background from '../../resources/images/6c84f488193221209b236e1bf15238de.gif'
import main_background from '../../resources/images/c4818406128a73fa3de6251864a28b32.gif'
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

import { GatePhotos } from './gate/gate.js';

export function GatePage() {
    useEffect(() => {
        document.title = `Gáte | floralunit world ❤`;
    });
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

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${second_background})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [photosGate, setPhotosGate] = useState([]);
    useEffect(() => {

        if (photosGate.length === 0) {
            const photos = GatePhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const shuffledArray = [...photos];
            setPhotosGate(shuffle(shuffledArray));
        }
    }, [photosGate.length]);

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
                        <img
                            src={require("./gate/aImA93crPGQ.jpg")}
                            style={{ width: '600px', height: 'auto' }}
                            alt=''
                        />
                        <br />
                        <Link className='link-back' to="/witch-house" >
                            <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                            <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                        </Link>
                        <iframe style={{ margin: '15px', textAlign: 'center' }} title="vk" src="https://vk.com/video_ext.php?oid=-200546006&id=456239064&hd=2" width="560" height="315" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 15px' }}>
                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>Р А С П А Д</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/auLTXqeWAv4.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=-32130549&id=456239048&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>Р А С П А Д  2</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/DXmKX8TJ-j8.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 70px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosGate} className='photo-gallery'></GalleryWithMusic>
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>Unowned Sprees : the sect</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/1.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=52909919&id=456239272&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/Am6TA9aVt3o.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=52909919&id=456239352&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 2</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/nK2uMsgqNts.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
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

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '55px' }}>Unformed Sprees</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/5nBzVgHpFy0.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 3</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/4lt5-GwPsuk.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '55px' }}>United Souls</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/EPVDREUMrMc.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ ?</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/1hlY9XOy-XA.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=1696685&id=456239870&hd=2&hash=629a3c7c28392ae3" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '45px' }}>Unowned Sprees : hidden lake</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/MDZ2r7kbtV4.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 7</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/B6ACi2FTU7Q.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/Ax-xIeSQObo?si=HetmDsDxvId6ZG8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 8</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/UnHR65Z3IDc.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>Catharsis | 7 уровень</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/jSD2rNCtjzk.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '55px' }}>Unowned Sprees 9</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/FUxtk47rKd0.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/54AIrdIYO5I?si=PJBB445Cp9m_iI-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>Причастие - акт 1</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/OMl_01nrGKY.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/pUOzEuLWp4g?si=7YxxU52uYtn1mPai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>Catharsis | 8 уровень</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/8CXzPGd6aws.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=-161137927&id=456239034&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 9</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/sdJXdXNcYio.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=22814591&id=456239156&hd=2&hash=9b31b15a7ca027cf" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>ПРИЧАСТИЕ : АКТ 2</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/xUnggUcEf_k.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=83942138&id=456239476&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>

                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ X</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/SnazEAniSOM.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=-200546006&id=456239064&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}> Catharsis | 9 уровень</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/QoDohhmYiXM.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ XI</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/5GcvTIZrpYA.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ XII</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/qSX5y7AkdYE.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>ПРИЧАСТИЕ : АКТ 4</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={require("./gate/qvw6vTtsq8g.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

            </section>
            <br /><br />
        </div>
    );
}
