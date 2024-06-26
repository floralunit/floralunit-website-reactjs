import "../../MainWebsite.css"
import "../../../common/styles/simple-tabs.scss"
import React, { useState, useCallback, useEffect } from "react";
import { Modal, ModalGateway } from "react-images";
import Carousel from 'react-gallery-carousel';
import "../../../common/styles/gallery.css";
import { LoadingComponent } from "../../components/LoadingComponent"
import catsPhotos from '../../../common/jsons/CatsPhotos.json';
import frogsPhotos from '../../../common/jsons/FrogsPhotos.json';
import { GREEN_BACKGROUND, API_URL, RABBIT_BACKGROUND } from '../../../global-const';

export function CatsFroggiesPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    // #region LightBox
    const [currentImageFrog, setCurrentImageFrog] = useState(0);
    const [viewerIsOpenFrog, setViewerIsOpenFrog] = useState(false);
    const [currentImageCat, setCurrentImageCat] = useState(0);
    const [viewerIsOpenCat, setViewerIsOpenCat] = useState(false);

    const openLightboxFrog = (index) => {
        setCurrentImageFrog(index);
        setViewerIsOpenFrog(true);
    };
    const openLightboxCat = (index) => {
        setCurrentImageCat(index);
        setViewerIsOpenCat(true);
    };

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
        setIsLoaded(true);
        const photos = frogsPhotos.response.items.map(photo => ({
            src: photo.sizes.find(size => size.type === "z").url,
            width: 4, // замените на нужную ширину фотографии
            height: 3, // замените на нужную высоту фотографии
            title: photo.text,
            comments: photo.comments,
        }));
        setPhotosFrog(photos.reverse());
    })


    useEffect(() => {
        setIsLoaded(true);
        const photos = catsPhotos.response.items.map(photo => ({
            src: photo.sizes.find(size => size.type === "y").url,
            width: 1, // замените на нужную ширину фотографии
            height: 1, // замените на нужную высоту фотографии
            title: photo.text,
            comments: photo.comments,
        }));
        setPhotosCat(photos.reverse());
    })

    // #endregion

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    document.documentElement.style.removeProperty('--box-text-color');
    document.documentElement.style.removeProperty('--box-header-color');
    document.documentElement.style.removeProperty('--box-background');
    document.documentElement.style.removeProperty('--main-cursor');
    document.documentElement.style.removeProperty('--pointer-cursor');
    if (toggleState === 1) {
        document.documentElement.style.setProperty('--main-background', `url(${GREEN_BACKGROUND})`);
    }
    else if (toggleState === 2) {
        document.documentElement.style.setProperty('--box-header-color', '#36558f');
        document.documentElement.style.setProperty('--main-background', `url(${RABBIT_BACKGROUND})`);
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
                                <span className="icon"><img src={require('../../resources/pixels/b06-icon-frog.gif')}
                                    title='https://foollovers.com' style={{ width: "19px" }} /></span>frogs
                            </button>
                            <button className={toggleState === 2 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(2)} style={{ fontSize: '10px' }}>
                                <span className="icon"><img src={require('../../resources/pixels/eg03-icon-cat.gif')}
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
                                                style={{ float: "left", maxWidth: '140px' }} />
                                            <div>
                                                <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.2em' }}>
                                                    <div>Stasik <pupa>(Стасик, Стас Лягушкин)</pupa></div>
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
                        <div style={{ fontWeight: 'bold', color: '#013220', margin: '0 auto', display: 'table' }}>
                            <img src={require('../../resources/tabs_dividers_pixels/ga08-heart-line.gif')}
                                style={{ height: '7px', width: 'auto', alignSelf: 'center' }}
                                title='https://foollovers.com' />check frogs insta @floral.frogs
                            <img src={require('../../resources/tabs_dividers_pixels/ga08-heart-line.gif')}
                                style={{ height: '7px', width: 'auto', alignSelf: 'center' }}
                                title='https://foollovers.com' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={require('../../resources/blinkies/0011-frog.gif')}
                                style={{ height: '20px', width: 'auto' }} />
                            <img src={require('../../resources/blinkies/143973s64ei05ghw.gif')}
                                style={{ height: '20px', width: 'auto' }} />
                            <img src={require('../../resources/blinkies/763765qvfcjt9142.gif')}
                                style={{ height: '20px', width: 'auto' }} />
                        </div>
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
                                <div className='photo-gallery'>
                                    {photosFrog.map((image, index) => (
                                        <img key={index} src={image.src} onClick={() => openLightboxFrog(index)} />))}
                                    <ModalGateway>
                                        {viewerIsOpenFrog ? (
                                            <Modal onClose={closeLightbox}>
                                                <Carousel
                                                    images={photosFrog}
                                                    index={currentImageFrog}
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
                                <img src={require('../../resources/tabs_dividers_pixels/cats_divider.gif')}
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
                                <div className='photo-gallery'>
                                    {photosCat.map((image, index) => (
                                        <img key={index} src={image.src} onClick={() => openLightboxCat(index)} />))}
                                    <ModalGateway>
                                        {viewerIsOpenCat ? (
                                            <Modal onClose={closeLightbox}>
                                                <Carousel
                                                    images={photosCat}
                                                    index={currentImageCat}
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
