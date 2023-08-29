import "../../MainWebsite.css"
import "./simple-tabs.scss"
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { angel_photos } from "./angel-photos/angel-photos";
import Gallery from "react-photo-gallery";
import imgg from "../../../common/backgrounds/water-background.webp"
import {
    CLOUD1_BACKGROUND,
    CLOUD_BACKGROUND,
    MAIN_BACKGROUND,
    SKY1_BACKGROUND,
    SKY_BACKGROUND,
    SUN_BACKGROUND, TRIPPY_BACKGROUND,
    WATER_BACKGROUND
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
        if (index === 1){
            document.documentElement.style.setProperty('--box-header-color', '#ffffff');
            document.documentElement.style.setProperty('--main-background',  `url(${WATER_BACKGROUND})`);
        }
        else if (index === 2){
            document.documentElement.style.setProperty('--box-header-color', '#000000');
            document.documentElement.style.setProperty('--main-background',  `url(${TRIPPY_BACKGROUND})`);
        }
        else if (index === 3)
            document.documentElement.style.setProperty('--box-header-color', '#000000');
        else {
            document.documentElement.style.setProperty('--box-header-color', '#ffffff');
            document.documentElement.style.setProperty('--main-background',  `url(${MAIN_BACKGROUND})`);
        }
    };

    return (
        <div className='main'>
            <div className='box'>
                <div className='inner' style={{backgroundColor: "var(--box-header-color)"}}>
                    <div className="simple-tab-bar radius">
                        <button className={toggleState === 1 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(1)}>
                            <span className="icon">Angel</span>
                        </button>
                        <button className={toggleState === 2 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(2)}>
                            <span className="icon">Flower</span>
                        </button>
                        <button className={toggleState === 3 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(3)}>
                            <span className="icon">Hindu</span>
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
                            className={toggleState === 2 ? "simple-content  simple-active-content" : "simple-content"}
                        >
                            <div className='pupa' id="section2">
                                <Gallery photos={cottagecore_photos} onClick={openLightbox} />
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
