import "../../MainWebsite.css"
import "./simple-tabs.scss"
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { angel_photos } from "./angel-photos/angel-photos";
import Gallery from "react-photo-gallery";
import imgg from "../../../common/images/backgrounds/water-background.webp"
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
    RED_BACKGROUND, SEXY_BACKGROUND,
    SKY1_BACKGROUND,
    SKY_BACKGROUND,
    SUN_BACKGROUND,
    TRIPPY_BACKGROUND,
    WATER1_BACKGROUND,
    WATER_BACKGROUND,
    WHITE_BACKGROUND
} from '../../../global-images';
import {cottagecore_photos} from "./cottagecore-photos/cottagecore-photos";
import {hindu_photos} from "./hindu-photos/hindu-photos";
import {shit_photos} from "./shit-photos/shit-photos";

export function AestheticsPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    if (toggleState === 1){
        document.documentElement.style.setProperty('--box-header-color', '#272829');
        document.documentElement.style.setProperty('--main-background',  `url(${SUN_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background',  `url(${CLOUD_BACKGROUND})`);
    }
    else if (toggleState === 2){
        document.documentElement.style.setProperty('--box-header-color', '#263A29');
        document.documentElement.style.setProperty('--main-background',  `url(${FLOWER1_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background',  '#dad7cd');
    }
    else if (toggleState === 3){
        document.documentElement.style.setProperty('--box-header-color', '#850000');
        document.documentElement.style.setProperty('--main-background',  `url(${HINDU_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background',  '#FFDBAA');
    }
    else if (toggleState === 4){
        document.documentElement.style.setProperty('--box-header-color', '#000000');
        document.documentElement.style.setProperty('--main-background',  `url(${EMO_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background',  `url(${EMO1_BACKGROUND})`);
    }
    else {
        document.documentElement.style.removeProperty('--box-header-color');
        document.documentElement.style.removeProperty('--main-background');
        document.documentElement.style.removeProperty('--box-background');
    }

    return (
        <div className='main'>
            <div className='box'>
                <div className='inner' style={{backgroundColor: "var(--box-header-color)"}}>
                    <div className="simple-tab-bar radius">
                        <button className={toggleState === 1 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(1)}>
                            <span className="icon"><img src={require('../../resources/pixels/wings.gif')} style={{width: "30px"}}/></span>
                        </button>
                        <button className={toggleState === 2 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(2)}>
                            <span className="icon">Flower</span>
                        </button>
                        <button className={toggleState === 3 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(3)}>
                            <span className="icon"><img src={require('../../resources/pixels/hindu.gif')} style={{width: "25px"}}/></span>
                        </button>
                        <button className={toggleState === 4 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(4)}>
                            <span className="icon">####</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='inner'>
                    <div className="simple-content-tabs">
                        <div
                            className={toggleState === 1 ? "simple-content  simple-active-content" : "simple-content"}
                        >
                            <div className='pupa' id="section2">
                                <Gallery photos={angel_photos} onClick={openLightbox} />
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                      currentIndex={currentImage}
                                                      views={angel_photos.map(x => ({
                                                          ...x,
                                                          srcset: x.srcSet,
                                                          caption: x.title,
                                                      }))}
                                            />
                                        </Modal>
                                    ) : null}
                                </ModalGateway>
                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "simple-content  simple-active-content" : "simple-content"}
                        >
                            <div className='pupa' id="section2">
                                <Gallery photos={cottagecore_photos} onClick={openLightbox} />
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel style={{width: "100px", height: "100px"}}
                                                      currentIndex={currentImage}
                                                      views={cottagecore_photos.map(x => ({
                                                          ...x,
                                                          srcset: x.srcSet,
                                                          caption: x.title
                                                      }))}
                                            />
                                        </Modal>
                                    ) : null}
                                </ModalGateway>
                            </div>
                        </div>
                        <div
                            className={toggleState === 3 ? "simple-content  simple-active-content" : "simple-content"}
                        >
                            <div className='pupa' id="section2">
                                <Gallery photos={hindu_photos} onClick={openLightbox} />
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel style={{width: "100px", height: "100px"}}
                                                      currentIndex={currentImage}
                                                      views={angel_photos.map(x => ({
                                                          ...x,
                                                          srcset: x.srcSet,
                                                          caption: x.title
                                                      }))}
                                            />
                                        </Modal>
                                    ) : null}
                                </ModalGateway>
                            </div>
                        </div>
                        <div
                            className={toggleState === 4 ? "simple-content  simple-active-content" : "simple-content"}
                        >
                            <div className='pupa' id="section2">
                                <div className="crt"></div>
                                <Gallery photos={shit_photos} onClick={openLightbox} />
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel style={{width: "100px", height: "100px"}}
                                                      currentIndex={currentImage}
                                                      views={angel_photos.map(x => ({
                                                          ...x,
                                                          srcset: x.srcSet,
                                                          caption: x.title
                                                      }))}
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
