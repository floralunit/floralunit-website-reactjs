import "../../MainWebsite.css"
import "../../../common/styles/simple-tabs.scss"
import React, { useState, useCallback } from "react";
import { Modal, ModalGateway } from "react-images";
import Carousel from 'react-gallery-carousel';
import "../../../common/styles/gallery.css";
import {
    CLOUD_BACKGROUND,
    EMO1_BACKGROUND, EMO_BACKGROUND,
    FLOWER1_BACKGROUND,
    HINDU_BACKGROUND,
    HINDU_CURSOR,
    MEME_CURSOR,
    SUN_BACKGROUND,
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
    document.documentElement.style.removeProperty('--main-cursor');
    document.documentElement.style.removeProperty('--pointer-cursor');
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
        document.documentElement.style.setProperty('--main-cursor', `url(${HINDU_CURSOR})`);
    }
    else if (toggleState === 4) {
        document.documentElement.style.setProperty('--box-header-color', '#000000');
        document.documentElement.style.setProperty('--main-background', `url(${EMO_BACKGROUND})`);
        document.documentElement.style.setProperty('--box-background', `url(${EMO1_BACKGROUND})`);
        document.documentElement.style.setProperty('--main-cursor', `url(${MEME_CURSOR})`);
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

    const openLightboxAngel = (index) => {
        setCurrentImageAngel(index);
        setViewerIsOpenAngel(true);
    };
    const openLightboxFlower = (index) => {
        setCurrentImageFlower(index);
        setViewerIsOpenFlower(true);
    };
    const openLightboxHindu = (index) => {
        setCurrentImageHindu(index);
        setViewerIsOpenHindu(true);
    };
    const openLightboxShit = (index) => {
        setCurrentImageShit(index);
        setViewerIsOpenShit(true);
    };

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
                            <span className="icon"><img src={require('../../resources/pixels/wings.gif')} style={{ width: "35px" }} /></span>
                        </button>
                        <button className={toggleState === 2 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(2)}>
                            <span className="icon"><img src={require('../../resources/pixels/x02-icon-bee.gif')} style={{ width: "35px" }} /></span>
                        </button>
                        <button className={toggleState === 3 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(3)}>
                            <span className="icon"><img src={require('../../resources/pixels/hindu.gif')} style={{ width: "25px" }} /></span>
                        </button>
                        <button className={toggleState === 4 ? "simple-tab selected" : "simple-tab"} onClick={() => toggleTab(4)}>
                            <span className="icon"><img src={require('../../resources/pixels/blobshades.gif')} style={{ width: "35px" }} /></span>
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
                            <div className='photo-gallery'>
                                {angel_photos.map((image, index) => (
                                    <img key={index} src={image.src} onClick={() => openLightboxAngel(index)} />))}
                                <ModalGateway>
                                    {viewerIsOpenAngel ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                images={angel_photos}
                                                index={currentImageAngel}
                                                style={{ height: 'auto', maxWidth: '25em' }}
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
                            <div className='photo-gallery'>
                                {cottagecore_photos.map((image, index) => (
                                    <img key={index} src={image.src} onClick={() => openLightboxFlower(index)} />))}
                                <ModalGateway>
                                    {viewerIsOpenFlower ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                images={cottagecore_photos}
                                                index={currentImageFlower}
                                                style={{ height: 'auto', maxWidth: '25em' }}
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
                            <div className='photo-gallery'>
                                {hindu_photos.map((image, index) => (
                                    <img key={index} src={image.src} onClick={() => openLightboxHindu(index)} />))}
                                <ModalGateway>
                                    {viewerIsOpenHindu ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                images={hindu_photos}
                                                index={currentImageHindu}
                                                style={{ height: 'auto', maxWidth: '25em' }}
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
                            <div className='photo-gallery'>
                                <div className="crt" />
                                {shit_photos.map((image, index) => (
                                    <img key={index} src={image.src} onClick={() => openLightboxShit(index)} />))}
                                <ModalGateway>
                                    {viewerIsOpenShit ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                images={shit_photos}
                                                index={currentImageShit}
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
