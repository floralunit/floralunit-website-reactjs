import React, { useEffect, useState } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import second_background from '../../resources/images/6c84f488193221209b236e1bf15238de.gif'
import main_background from '../../resources/images/4db32fc86e1694f99df8bf9b86d6d290.gif'
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

import { NedostupnostPhotos } from './nedostupnost/nedostupnost.js';

export function NedostupnostPage() {
    useEffect(() => {
        document.title = `NEDOSTUPNOSTЬ | floralunit world ❤`;
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

    const [photosNedostupnost, setPhotosNedostupnost] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718769947' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/622863612' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/516657756' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/516657696' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/959427169' }
        ];

        if (photosNedostupnost.length === 0) {
            const photos = NedostupnostPhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosNedostupnost(shuffle(shuffledArray));
        }
    }, [photosNedostupnost.length]);

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
                            src={require("./nedostupnost/vopros.jpg")}
                            style={{ width: '200px', height: 'auto' }}
                            alt=''
                        />
                        <br />
                        <Link className='link-back' to="/witch-house" >
                            <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ height: '15px' }} alt='' />
                            <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src={require("../../../main-website/resources/pixels/cj2PLXc.gif")} style={{ width: '15px' }} alt='' />
                        </Link>
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 15px' }}>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ I</div>
                        </p>
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
                            src={require("./nedostupnost/W-QTIhlu6oA.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/TZyf7YqoC1c?si=RZ-bZjsBTjaalaFj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ II</div>
                        </p>
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
                            src={require("./nedostupnost/1yeLx2Wiazg.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ III</div>
                        </p>
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
                            src={require("./nedostupnost/3.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/I2e-diSAAY4?si=3ccVCGicM_9njrLO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ IV</div>
                        </p>
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
                            src={require("./nedostupnost/4.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/F2IwU1Jz-2w?si=g1gfGEtYyEppdZ0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ V</div>
                        </p>
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
                            src={require("./nedostupnost/5.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/orSmJlStbfo?si=etqEYqsrX_zmMyO3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 5</div>
                        </p>

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
                            src={require("./nedostupnost/L33T5.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 6</div>
                        </p>

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
                            src={require("./nedostupnost/L33T6.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/lCDQKdCU5Qo?si=he9tsPeGarOYes0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold', fontSize: '40px' }}>WITCH HOUSE FESTIVAL</div>
                        </p>

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
                            src={require("./nedostupnost/WITCHHOUSEFESTIVAL.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold', fontSize: '40px' }}>L33T: STAY OFFLINE</div>
                        </p>
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
                            src={require("./nedostupnost/L33TSTAYOFFLINE.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 7</div>
                        </p>
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
                            src={require("./nedostupnost/L33T7.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/iuRWaFBQ9_s?si=x4FXkMfKKtwqp583" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEIZVESTNOSTЬ</div>
                        </p>
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
                            src={require("./nedostupnost/NEIZVESTNOSTЬ.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold', fontSize: '40px' }}>WITCH HOUSE FESTIVAL | Санкт-Петербург</div>
                        </p>
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
                            src={require("./nedostupnost/WITCHHOUSEFESTIVALSPB.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/N6q4VWR044Q?si=f_l7eDsGYLaw_W8b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold', fontSize: '40px' }}>L33T Open Rain</div>
                        </p>
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
                            src={require("./nedostupnost/L33TOpenRain.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ VI</div>
                        </p>
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
                            src={require("./nedostupnost/NEDOSTUPNOSTЬ6.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 8</div>
                        </p>
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
                            src={require("./nedostupnost/L33T8.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ VII</div>
                        </p>
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
                            src={require("./nedostupnost/NEDOSTUPNOSTЬ7.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/IY3ePCUCGOo?si=WAwq8OO58iKCr_GT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ VIII</div>
                        </p>
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
                            src={require("./nedostupnost/NEDOSTUPNOSTЬ8.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 9</div>
                        </p>
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
                            src={require("./nedostupnost/L33T9.jpg")}
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br />
                <div style={{ margin: '0 70px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosNedostupnost} className='photo-gallery'></GalleryWithMusic>
                    </div>
                </div>
                <br />

            </section>
            <br /><br />
        </div>
    );
}
