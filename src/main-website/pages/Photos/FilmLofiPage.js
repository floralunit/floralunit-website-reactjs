import "../../MainWebsite.css"
import "../../../common/styles/simple-tabs.scss"
import React, { useState, useCallback, useEffect } from "react";
import { Modal, ModalGateway } from "react-images";
import Carousel from 'react-gallery-carousel';
import "../../../common/styles/gallery.css";
import { LoadingComponent } from "../../components/LoadingComponent"

import { TRIPPY_BACKGROUND, API_URL, FLOWER7_BACKGROUND, CD_BACKGROUND } from '../../../global-const';

export function FilmLofiPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    // #region LightBox
    const [currentImageFilm, setCurrentImageFilm] = useState(0);
    const [viewerIsOpenFilm, setViewerIsOpenFilm] = useState(false);
    const [currentImageLofi, setCurrentImageLofi] = useState(0);
    const [viewerIsOpenLofi, setViewerIsOpenLofi] = useState(false);

    const openLightboxFilm = (index) => {
        setCurrentImageFilm(index);
        setViewerIsOpenFilm(true);
    };
    const openLightboxLofi = (index) => {
        setCurrentImageLofi(index);
        setViewerIsOpenLofi(true);
    };

    const closeLightbox = () => {
        setCurrentImageFilm(0);
        setViewerIsOpenFilm(false);
        setCurrentImageLofi(0);
        setViewerIsOpenLofi(false);
    };
    // #endregion

    // #region GetPhotos
    const [photosFilm, setPhotosFilm] = useState([]);
    const [photosLofi, setPhotosLofi] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/getFilmPhotos`) // замените на ваш URL API
            .then(response => {
                setIsLoaded(true);
                if (!response.ok) {
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                setIsLoaded(true);
                const photos = data.response.items.map(photo => ({
                    src: photo.sizes.find(size => size.type === "z").url,
                    width: 4, // замените на нужную ширину фотографии
                    height: 3, // замените на нужную высоту фотографии
                    title: photo.text,
                    comments: photo.comments,
                }));
                setPhotosFilm(photos);
            })
            .catch(error => {
                console.error('Ошибка при получении фотографий', error);
            });
    }, []);


    useEffect(() => {
        fetch(`${API_URL}/getLofiPhotos`) // замените на ваш URL API
            .then(response => {
                setIsLoaded(true);
                if (!response.ok) {
                    setIsLoaded(true);
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                setIsLoaded(true);
                const photos = data.response.items.map(photo => ({
                    src: photo.sizes.find(size => size.type === "y").url,
                    width: 4, // замените на нужную ширину фотографии
                    height: 3, // замените на нужную высоту фотографии
                    title: photo.text,
                    comments: photo.comments,
                }));
                setPhotosLofi(photos);
            })
            .catch(error => {
                console.error('Ошибка при получении фотографий', error);
            });
    }, []);

    // #endregion

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    document.documentElement.style.removeProperty('--box-text-color');
    document.documentElement.style.removeProperty('--main-cursor');
    document.documentElement.style.removeProperty('--pointer-cursor');
    if (toggleState === 1) {
        document.documentElement.style.setProperty('--box-header-color', '#614A44');
        document.documentElement.style.setProperty('--main-background', `url(${FLOWER7_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background', `#F3E6D7`);
    }
    else if (toggleState === 2) {
        document.documentElement.style.setProperty('--box-header-color', '#212529');
        document.documentElement.style.setProperty('--main-background', `url(${TRIPPY_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background', `url(${CD_BACKGROUND})`);
    }
    else {
        document.documentElement.style.removeProperty('--box-header-color');
        document.documentElement.style.removeProperty('--main-background');
        document.documentElement.style.removeProperty('--box-background');
    }
    if (!isLoaded) {
        return <LoadingComponent />;
    } else {
        return (
            <div className='main' style={{ maxWidth: '1000px' }}>
                <div className='box'>
                    <div className='inner' style={{ backgroundColor: "var(--box-header-color)" }}>
                        <div className="simple-tab-bar radius">
                            <button className={toggleState === 1 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(1)} style={{ fontSize: '10px' }}>
                                <span className="icon"><img src={require('../../resources/pixels/Camera.gif')} style={{ height: "20px" }} /></span>films
                            </button>
                            <button className={toggleState === 2 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(2)} style={{ fontSize: '10px' }}>
                                <span className="icon"><img src={require('../../resources/pixels/cdrom.gif')}
                                    title="https://artwork.neocities.org"
                                    style={{ width: "20px" }} /></span>lofi
                            </button>
                        </div>
                    </div>
                </div>
                <div className="simple-content-tabs">
                    <div
                        className={toggleState === 1 ? "simple-content  simple-active-content" : "simple-content"}
                    >
                        <div className="box08">
                            <div className="box-top">
                                <div className="u01"></div>
                            </div>
                            <div className="box-center">
                                <div className="box-inner">
                                    <div>
                                        <img src={require('../../resources/images/zenit.png')}
                                            style={{ float: "left", maxWidth: '210px' }} />
                                        <div>
                                            <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                                <div>Film photography / Пленочная фотография</div>
                                            </div>
                                            <br />
                                            <div>
                                                <img src={require('../../resources/images/milnitsa.png')}
                                                    style={{ float: "right", maxWidth: '110px' }} />
                                                <div style={{ fontWeight: 'bold' }}>My film cameras: </div>
                                                <ul>
                                                    <li>Zenit TTL | Зенит TTL (1979)</li>
                                                    <li>Rekam BF-300 (~2000)</li>
                                                </ul>
                                            </div>
                                            <br />
                                            One day in 2021, I found an old soviet camera at my grandfather's house, which my family used in the 80s and 90s.
                                            I wondered if it worked, bought a film and tried to shoot and I did it!
                                            Since then, I've been taking film photos with this camera for several years now, and sometimes it shoots better than a phone.
                                            Also, one day I was given another camera from 00x - Rekam BF-300(мыльница),
                                            I also take pictures with it periodically, but it is automated, so it is too boring to shoot without settings.
                                            <br />
                                            <div style={{ fontWeight: 'bold' }}>check my film insta @floral.35mm and vk group <a href='https://vk.com/floralfilm' target="_blank" rel="noreferrer" style={{ color: 'black', textDecorationLine: 'underline' }}>floral.film</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-bottom">
                                <div className="s01"></div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="inner">
                                <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                    <img src={require('../../resources/tabs_dividers_pixels/d10-simple-line.gif')} title='https://foollovers.com'
                                        style={{ height: '20px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                                    <div>Photo gallery</div>
                                    <img src={require('../../resources/tabs_dividers_pixels/d10-simple-line.gif')} title='https://foollovers.com'
                                        style={{ height: '20px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                                </div>
                                <br />
                                <div className='photo-gallery'>
                                    {photosFilm.map((image, index) => (
                                        <img key={index} src={image.src} onClick={() => openLightboxFilm(index)} />))}
                                    <ModalGateway>
                                        {viewerIsOpenFilm ? (
                                            <Modal onClose={closeLightbox}>
                                                <Carousel
                                                    images={photosFilm}
                                                    index={currentImageFilm}
                                                    style={{ height: 'auto', maxWidth: '25em' }}
                                                    hasMediaButton={false}
                                                    hasIndexBoard={false}
                                                />
                                            </Modal>
                                        ) : null}
                                    </ModalGateway>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 2 ? "simple-content  simple-active-content" : "simple-content"}
                    >
                        <div className="crt"></div>
                        <div className="box08">
                            <div className="box-top">
                                <div className="u01"></div>
                            </div>
                            <div className="box-center">
                                <div className="box-inner">
                                    <div>
                                        <img src={require('../../resources/images/angel.png')}
                                            style={{ float: "right", maxWidth: '230px', margin: 0 }} />

                                        <div>
                                            <img src={require('../../resources/images/knopki.png')}
                                                style={{ float: "left", maxWidth: '110px', margin: 0 }} />
                                            <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                                <div>Lo-fi photography</div>
                                            </div>
                                            <br />
                                            As a 00s culture enjoyer I have 3 button phones, 2 of which I had in my childhood
                                            and I use them for making shitty pictures, shitty videos and playing old java games. Sometimes I take pictures on my laptop's webcam, which also turns out to be cool and lo-fi.
                                            I also shoot with old digital cameras that I found at my grandfather's house and I really like their effect and sometimes I don't even use my modern phone for photo sessions.
                                            <br />
                                            <div style={{ fontWeight: 'bold' }}>check my lo-fi vk group <a href='https://vk.com/florallow' target="_blank" rel="noreferrer" style={{ color: 'black', textDecorationLine: 'underline' }}>all this shitty pics</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-bottom">
                                <div className="s01"></div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="inner">
                                <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                    <img src={require('../../resources/tabs_dividers_pixels/d10-simple-line.gif')} title='https://foollovers.com'
                                        style={{ height: '20px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                                    <div>Photo gallery</div>
                                    <img src={require('../../resources/tabs_dividers_pixels/d10-simple-line.gif')} title='https://foollovers.com'
                                        style={{ height: '20px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                                </div>
                                <br />
                                <div className='photo-gallery'>
                                    {photosLofi.map((image, index) => (
                                        <img key={index} src={image.src} onClick={() => openLightboxLofi(index)} />))}
                                    <ModalGateway>
                                        {viewerIsOpenLofi ? (
                                            <Modal onClose={closeLightbox}>
                                                <Carousel
                                                    images={photosLofi}
                                                    index={currentImageLofi}
                                                    style={{ height: 'auto', maxWidth: '25em' }}
                                                    hasMediaButton={false}
                                                    hasIndexBoard={false}
                                                />
                                            </Modal>
                                        ) : null}
                                    </ModalGateway>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
