import "../../MainWebsite.css"
import "../../../common/styles/simple-tabs.scss"
import React, { useState, useCallback, useEffect } from "react";
import { Modal, ModalGateway } from "react-images";
import Carousel from 'react-gallery-carousel';
import ImageGallery from "react-photo-gallery";
import { LoadingComponent } from "../../components/LoadingComponent"

import {
    CLOUD1_BACKGROUND,
    CLOUD_BACKGROUND,
    COPPER_BACKGROUND, EMO1_BACKGROUND, EMO_BACKGROUND,
    FLOWER1_BACKGROUND,
    FLOWER2_BACKGROUND,
    FLOWER3_BACKGROUND,
    FLOWER_BACKGROUND, HINDU1_BACKGROUND,
    HINDU_BACKGROUND,
    MAIN_BACKGROUND,
    MARBLE1_BACKGROUND,
    MARBLE_BACKGROUND,
    PINK_BACKGROUND,
    RED_BACKGROUND,
    SKY1_BACKGROUND,
    SKY_BACKGROUND,
    SUN_BACKGROUND,
    TRIPPY_BACKGROUND,
    WATER1_BACKGROUND,
    WATER_BACKGROUND,
    WHITE_BACKGROUND,
    CLOTH_BACKGROUND,
    BLUEDOTS_BACKGROUND,
    SEXY_BACKGROUND,
    FRILL_BACKGROUND,
    GREEN_BACKGROUND,
    API_URL
} from '../../../global-const';

export function CatsFroggiesPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    // #region LightBox
    const [currentImageFrog, setCurrentImageFrog] = useState(0);
    const [viewerIsOpenFrog, setViewerIsOpenFrog] = useState(false);
    const [currentImageCat, setCurrentImageCat] = useState(0);
    const [viewerIsOpenCat, setViewerIsOpenCat] = useState(false);

    const openLightboxFrog = useCallback((event, { photo, index }) => {
        setCurrentImageFrog(index);
        setViewerIsOpenFrog(true);
    }, []);
    const openLightboxCat = useCallback((event, { photo, index }) => {
        setCurrentImageCat(index);
        setViewerIsOpenCat(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImageFrog(0);
        setViewerIsOpenFrog(false);
        setCurrentImageCat(0);
        setViewerIsOpenCat(false);
    };
    // #endregion

    // #region GetPhotos
    const [photosFrog, setPhotosFrog] = useState([]);
    const [photosCat, setPhotosCat] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/getFrogsPhotos`) // замените на ваш URL API
            .then(response => {
                setIsLoaded(true);
                if (!response.ok) {
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                setIsLoaded(true);
                const photos = data.response.items.reverse().map(photo => ({
                    src: photo.sizes.find(size => size.type === "z").url,
                    width: 4, // замените на нужную ширину фотографии
                    height: 3, // замените на нужную высоту фотографии
                    title: photo.text,
                    comments: photo.comments,
                }));
                setPhotosFrog(photos);
            })
            .catch(error => {
                console.error('Ошибка при получении фотографий', error);
            });
    }, []);


    useEffect(() => {
        fetch(`${API_URL}/getCatsPhotos`) // замените на ваш URL API
            .then(response => {
                setIsLoaded(true);
                if (!response.ok) {
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                setIsLoaded(true);
                const photos = data.response.items.reverse().map(photo => ({
                    src: photo.sizes.find(size => size.type === "y").url,
                    width: 1, // замените на нужную ширину фотографии
                    height: 1, // замените на нужную высоту фотографии
                    title: photo.text,
                    comments: photo.comments,
                }));
                setPhotosCat(photos);
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
    document.documentElement.style.removeProperty('--box-header-color');
    document.documentElement.style.removeProperty('--box-background');
    if (toggleState === 1) {
        document.documentElement.style.setProperty('--main-background', `url(${GREEN_BACKGROUND})`);
    }
    else if (toggleState === 2) {
        document.documentElement.style.setProperty('--box-header-color', '#36558f');
        document.documentElement.style.setProperty('--main-background', `url(https://dl.glitter-graphics.com/pub/1089/1089746pew58ongtj.jpg)`);
        document.documentElement.style.setProperty('--box-background', '#ffe4cc');
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
                                <span className="icon"><img src={require('../../resources/tabs_dividers_pixels/b06-icon-frog.gif')}
                                    title='https://foollovers.com' style={{ width: "19px" }} /></span>frogs
                            </button>
                            <button className={toggleState === 2 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(2)} style={{ fontSize: '10px' }}>
                                <span className="icon"><img src={require('../../resources/tabs_dividers_pixels/eg03-icon-cat.gif')}
                                    title='https://foollovers.com' style={{ width: "19px" }} /></span>cats
                            </button>
                        </div>
                    </div>
                </div>
                <div className="simple-content-tabs">
                    <div
                        className={toggleState === 1 ? "simple-content  simple-active-content" : "simple-content"}
                    >
                        <div className="flex-container">
                            <div className="box08" style={{ width: '100%', height: '100%', order: '1' }}>
                                <div className="box-top">
                                    <div className="u01"></div>
                                </div>
                                <div className="box-center">
                                    <div className="box-inner" style={{ height: '100%' }}>
                                        <div>
                                            <img src={require('../../resources/images/стасик.png')}
                                                style={{ float: "left", maxWidth: '110px' }} />
                                            <div>
                                                <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.2em' }}>
                                                    <div>Stasik <pupa style={{ fontSize: '0.7em' }}>(Стасик, Станислав Сердцеедович Лягушкин)</pupa></div>
                                                </div>
                                                <div style={{ fontWeight: 'bold' }}>Species  Name: </div> Pacman frog / Лягушка рогатка
                                                <div style={{ fontWeight: 'bold' }}>Scientific Name: </div> Ceratophrys cranwelli / Чакская рогатка
                                                <div style={{ fontWeight: 'bold' }}>Date of birth</div> june 2022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-bottom">
                                    <div className="s01"></div>
                                </div>
                            </div>
                            <div style={{ width: '100%', order: '2', margin: '0 5px' }}>
                                <div className="box08">
                                    <div className="box-top">
                                        <div className="u01"></div>
                                    </div>
                                    <div className="box-center">
                                        <div className="box-inner">
                                            <div>
                                                <img src={require('../../resources/images/лысик.png')}
                                                    style={{ float: "right", maxWidth: '150px' }} />
                                                <div>
                                                    <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                                        <div>Lisik (Лысик)</div>
                                                    </div>
                                                    <div >
                                                        <br />
                                                        <div style={{ fontWeight: 'bold' }}>Species  Name: </div> Pacman frog / Лягушка рогатка
                                                        <div style={{ fontWeight: 'bold' }}>Scientific Name: </div> Ceratophrys cornuta / Амазонская рогатка
                                                        <div style={{ fontWeight: 'bold' }}>Date of birth</div> march 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-bottom">
                                        <div className="s01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ fontWeight: 'bold', color: '#013220', margin: '0 auto', display: 'table' }}> <img src={require('../../resources/tabs_dividers_pixels/ga08-heart-line.gif')}
                            style={{ height: '7px', width: 'auto', alignSelf: 'center' }}
                            title='https://foollovers.com' />check frogs insta @floral.frogs
                            <img src={require('../../resources/tabs_dividers_pixels/ga08-heart-line.gif')}
                                style={{ height: '7px', width: 'auto', alignSelf: 'center' }}
                                title='https://foollovers.com' /></div>
                        <div className='box'>
                            <div className='inner'>
                                <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                    <img src={require('../../resources/tabs_dividers_pixels/ga08-heart-line.gif')}
                                        style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                        title='https://foollovers.com' />
                                    <div>Frog gallery</div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={require('../../resources/tabs_dividers_pixels/ga08-heart-line.gif')}
                                            style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                            title='https://foollovers.com' />
                                    </div>
                                </div>
                                <br />
                                <div className='pupa' id="section2">
                                    <ImageGallery photos={photosFrog} onClick={openLightboxFrog} />
                                    <ModalGateway>
                                        {viewerIsOpenFrog ? (
                                            <Modal onClose={closeLightbox}>
                                                <Carousel
                                                    images={photosFrog}
                                                    index={currentImageFrog}
                                                    style={{ height: '25em', width: '25em' }}
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
                        <div className="flex-container">
                            <div className="box08" style={{ width: '100%', height: '100%', order: '1' }}>
                                <div className="box-top">
                                    <div className="u01"></div>
                                </div>
                                <div className="box-center">
                                    <div className="box-inner" style={{ height: '100%' }}>
                                        <div>
                                            <img src={require('../../resources/images/кузя.png')}
                                                style={{ float: "left", maxWidth: '150px' }} />
                                            <div>
                                                <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                                    <div>Kuzya (Кузя/Кузькин)</div>
                                                </div>
                                                <br />
                                                Kuzya is the oldest cat who has been with me since childhood.
                                                He was born in 2009 and is already quite an elderly cat.
                                                Kuzya is very fat and lazy, likes to sleep a lot, eat and meow.
                                                He doesn't care who he hugs, and he loves everyone and isn't afraid of anyone.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-bottom">
                                    <div className="s01"></div>
                                </div>
                                <img src={require('../../resources/pixels/cats_divider.gif')}
                                    style={{ float: "left", padding: '10px' }} />
                            </div>
                            <div className="box08" style={{ width: '100%', order: '2' }}>
                                <div className="box-top">
                                    <div className="u01"></div>
                                </div>
                                <div className="box-center">
                                    <div className="box-inner">
                                        <div>
                                            <img src={require('../../resources/images/цыпа.png')}
                                                style={{ float: "right", width: '30%', height: '30%' }} />
                                            <div>
                                                <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                                    <div>Tsipa (Цыпа/Цыпленок)</div>
                                                </div>
                                                <div >
                                                    <br />
                                                    We took Tsipa in 2017 with my mom from one babushka, whose cat gave birth to a bunch of kittens.
                                                    Tsipa was the most active kitten and I liked that.
                                                    From that day on, she recognizes and loves only me and my mom.
                                                    She's the most gentle kitty I've ever met.
                                                    When I studied in school, she always put me to bed, sat on my arms when I was doing my homework.
                                                    She loves to lick me and always calms me down when I cry.
                                                    Now she always greets me, even when we haven't seen each other for half year, and I miss her very much living in another city.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-bottom">
                                    <div className="s01"></div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="inner">
                                <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
                                    <img src={require('../../resources/tabs_dividers_pixels/ga07-heart-line.gif')}
                                        style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                        title='https://foollovers.com' />
                                    <div>Cat gallery</div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={require('../../resources/tabs_dividers_pixels/ga07-heart-line.gif')}
                                            style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                            title='https://foollovers.com' />
                                    </div>
                                </div>
                                <br />
                                <div className='pupa' id="section2">
                                    <ImageGallery photos={photosCat} onClick={openLightboxCat} />
                                    <ModalGateway>
                                        {viewerIsOpenCat ? (
                                            <Modal onClose={closeLightbox}>
                                                <Carousel
                                                    images={photosCat}
                                                    index={currentImageCat}
                                                    style={{ height: '20em', width: '20em' }}
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
