import "../../MainWebsite.css"
import "../../../common/styles/simple-tabs.scss"
import React, { useState, useCallback } from "react";
import { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import Carousel from 'react-gallery-carousel';
import ImageGallery from "react-photo-gallery";
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
} from '../../../global-const';
import { angel_photos } from "./angel-photos/angel-photos";
import { cottagecore_photos } from "./cottagecore-photos/cottagecore-photos";
import { hindu_photos } from "./hindu-photos/hindu-photos";
import { shit_photos } from "./shit-photos/shit-photos";

export function AestheticsPage() {

    // #region tabs-page-styles

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    document.documentElement.style.removeProperty('--box-text-color');
    if (toggleState === 1) {
        document.documentElement.style.setProperty('--box-header-color', '#272829');
        document.documentElement.style.setProperty('--main-background', `url(${SUN_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background', `url(${CLOUD_BACKGROUND})`);
    }
    else if (toggleState === 2) {
        document.documentElement.style.setProperty('--box-header-color', '#263A29');
        document.documentElement.style.setProperty('--main-background', `url(${FLOWER1_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background', '#dad7cd');
    }
    else if (toggleState === 3) {
        document.documentElement.style.setProperty('--box-header-color', '#850000');
        document.documentElement.style.setProperty('--main-background', `url(${HINDU_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background', '#FFDBAA');
    }
    else if (toggleState === 4) {
        document.documentElement.style.setProperty('--box-header-color', '#000000');
        document.documentElement.style.setProperty('--main-background', `url(${EMO_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background', `url(${EMO1_BACKGROUND})`);
    }
    else {
        document.documentElement.style.removeProperty('--box-header-color');
        document.documentElement.style.removeProperty('--main-background');
        document.documentElement.style.removeProperty('--box-background');
    }

    //#endregion

    // #region LightBox
    const [currentImageAngel, setCurrentImageAngel] = useState(0);
    const [currentImageFlower, setCurrentImageFlower] = useState(0);
    const [currentImageHindu, setCurrentImageHindu] = useState(0);
    const [currentImageShit, setCurrentImageShit] = useState(0);
    const [viewerIsOpenAngel, setViewerIsOpenAngel] = useState(false);
    const [viewerIsOpenFlower, setViewerIsOpenFlower] = useState(false);
    const [viewerIsOpenHindu, setViewerIsOpenHindu] = useState(false);
    const [viewerIsOpenShit, setViewerIsOpenShit] = useState(false);

    const openLightboxAngel = useCallback((event, { photo, index }) => {
        setCurrentImageAngel(index);
        setViewerIsOpenAngel(true);
    }, []);
    const openLightboxFlower = useCallback((event, { photo, index }) => {
        setCurrentImageFlower(index);
        setViewerIsOpenFlower(true);
    }, []);
    const openLightboxHindu = useCallback((event, { photo, index }) => {
        setCurrentImageHindu(index);
        setViewerIsOpenHindu(true);
    }, []);
    const openLightboxShit = useCallback((event, { photo, index }) => {
        setCurrentImageShit(index);
        setViewerIsOpenShit(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImageAngel(0);
        setCurrentImageFlower(0);
        setCurrentImageHindu(0);
        setCurrentImageShit(0);
        setViewerIsOpenAngel(false);
        setViewerIsOpenFlower(false);
        setViewerIsOpenHindu(false);
        setViewerIsOpenShit(false);
    };
    //#endregion


    return (
        <div className='main'>
            <div className='box'>
                <div className='inner' style={{ backgroundColor: "var(--box-header-color)" }}>
                    <div className="simple-tab-bar radius">
                        <button className={toggleState === 1 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(1)}>
                            <span className="icon"><img src={require('../../resources/pixels/wings.gif')} style={{ width: "40px" }} /></span>
                        </button>
                        <button className={toggleState === 2 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(2)}>
                            <span className="icon"><img src={require('../../resources/pixels/x02-icon-bee.gif')} style={{ width: "40px" }} /></span>
                        </button>
                        <button className={toggleState === 3 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(3)}>
                            <span className="icon"><img src={require('../../resources/pixels/hindu.gif')} style={{ width: "25px" }} /></span>
                        </button>
                        <button className={toggleState === 4 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(4)}>
                            <span className="icon"><img src={require('../../resources/pixels/blobshades.gif')} style={{ width: "40px" }} /></span>
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
                                <ImageGallery photos={angel_photos} onClick={openLightboxAngel} />
                                <ModalGateway>
                                    {viewerIsOpenAngel ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                images={angel_photos}
                                                index={currentImageAngel}
                                                style={{ height: '25em', width: '25em' }}
                                                hasMediaButton={false}
                                                hasIndexBoard={false}
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
                                <ImageGallery photos={cottagecore_photos} onClick={openLightboxFlower} />
                                <ModalGateway>
                                    {viewerIsOpenFlower ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                images={cottagecore_photos}
                                                index={currentImageFlower}
                                                style={{ height: '25em', width: '25em' }}
                                                hasMediaButton={false}
                                                hasIndexBoard={false}
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
                                <ImageGallery photos={hindu_photos} onClick={openLightboxHindu} />
                                <ModalGateway>
                                    {viewerIsOpenHindu ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                images={hindu_photos}
                                                index={currentImageHindu}
                                                style={{ height: '25em', width: '25em' }}
                                                hasMediaButton={false}
                                                hasIndexBoard={false}
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
                                <ImageGallery photos={shit_photos} onClick={openLightboxShit} />
                                <ModalGateway>
                                    {viewerIsOpenShit ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                images={shit_photos}
                                                index={currentImageShit}
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

            </div>
        </div>
    );
}
