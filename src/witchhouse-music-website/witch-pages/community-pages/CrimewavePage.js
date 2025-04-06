import React, { useEffect, useState } from 'react';
import { WITCH_MAIN_CURSOR, WITCH_POINTER_CURSOR } from '../../../global-const.js';
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import "../../../common/styles/gallery.css";
import "../../../common/styles/text-background.scss"
import main_background from '../../resources/images/ccdd.gif'
import { webamp } from '../../components/webamp/WebampMusic.js';
import { Link } from 'react-router-dom';

import { CrimewavePhotos } from './crimewave/crimewave.js';

export function CrimewavePage() {
    useEffect(() => {
        document.title = `CRIMEWAVE | floralunit world ❤`;
    });
    webamp.close();
    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);

    const [photosCrimewave, setPhotosCrimewave] = useState([]);
    useEffect(() => {

        if (photosCrimewave.length === 0) {
            const photos = CrimewavePhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const shuffledArray = [...photos];
            setPhotosCrimewave(shuffle(shuffledArray));
        }
    }, [photosCrimewave.length]);

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
                            src={require("./crimewave/ntPq50xiUBM.jpg")}
                            style={{ width: '500px', height: 'auto' }}
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
                               <div style={{ margin: '0 70px' }}>
                                   <div className='photo-gallery'>
                                       <GalleryWithMusic items={photosCrimewave} className='photo-gallery'></GalleryWithMusic>
                                   </div>
                               </div>
                               <br />

            </section>
            <br /><br />
        </div>
    );
}
