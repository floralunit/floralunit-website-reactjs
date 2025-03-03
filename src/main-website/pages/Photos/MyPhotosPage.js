import React, { useState, useCallback, useEffect } from "react";
import { Modal, ModalGateway } from "react-images";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { LoadingComponent } from "../../components/LoadingComponent"
import { API_URL, PIG_BACKGROUND } from '../../../global-const';
import myphotos from '../../../common/jsons/MyPhotos.json';
import "../../../common/styles/gallery.css";

export function MyPhotosPage() {

  const [isLoaded, setIsLoaded] = useState(false);
  document.documentElement.style.removeProperty('--box-text-color');
  document.documentElement.style.removeProperty('--main-cursor');
  document.documentElement.style.removeProperty('--pointer-cursor');
  document.documentElement.style.setProperty('--box-header-color', `#c6506d`);
  document.documentElement.style.setProperty('--main-background', `url(${PIG_BACKGROUND})`);
  document.documentElement.style.setProperty('--box-background', `#f1eaed`);

  // #region LightBox
  const [currentImage2025, setCurrentImage2025] = useState(0);
  const [viewerIsOpen2025, setViewerIsOpen2025] = useState(false);
  const [currentImage2024, setCurrentImage2024] = useState(0);
  const [viewerIsOpen2024, setViewerIsOpen2024] = useState(false);
  const [currentImage2023, setCurrentImage2023] = useState(0);
  const [viewerIsOpen2023, setViewerIsOpen2023] = useState(false);
  const [currentImage2022, setCurrentImage2022] = useState(0);
  const [viewerIsOpen2022, setViewerIsOpen2022] = useState(false);
  const [currentImage2021, setCurrentImage2021] = useState(0);
  const [viewerIsOpen2021, setViewerIsOpen2021] = useState(false);
  const [currentImage2020, setCurrentImage2020] = useState(0);
  const [viewerIsOpen2020, setViewerIsOpen2020] = useState(false);
  const [currentImage2019, setCurrentImage2019] = useState(0);
  const [viewerIsOpen2019, setViewerIsOpen2019] = useState(false);
  const [currentImage2018, setCurrentImage2018] = useState(0);
  const [viewerIsOpen2018, setViewerIsOpen2018] = useState(false);
  const [currentImage2017, setCurrentImage2017] = useState(0);
  const [viewerIsOpen2017, setViewerIsOpen2017] = useState(false);
  const [currentImage2016, setCurrentImage2016] = useState(0);
  const [viewerIsOpen2016, setViewerIsOpen2016] = useState(false);

  const openLightbox2025 = (index) => {
    setCurrentImage2025(index);
    setViewerIsOpen2025(true);
  };
  const openLightbox2024 = (index) => {
    setCurrentImage2024(index);
    setViewerIsOpen2024(true);
  };
  const openLightbox2023 = (index) => {
    setCurrentImage2023(index);
    setViewerIsOpen2023(true);
  };
  const openLightbox2022 = (index) => {
    setCurrentImage2022(index);
    setViewerIsOpen2022(true);
  };
  const openLightbox2021 = (index) => {
    setCurrentImage2021(index);
    setViewerIsOpen2021(true);
  };
  const openLightbox2020 = (index) => {
    setCurrentImage2020(index);
    setViewerIsOpen2020(true);
  };
  const openLightbox2019 = (index) => {
    setCurrentImage2019(index);
    setViewerIsOpen2019(true);
  };
  const openLightbox2018 = (index) => {
    setCurrentImage2018(index);
    setViewerIsOpen2018(true);
  };
  const openLightbox2017 = (index) => {
    setCurrentImage2017(index);
    setViewerIsOpen2017(true);
  };
  const openLightbox2016 = (index) => {
    setCurrentImage2016(index);
    setViewerIsOpen2016(true);
  };

  const closeLightbox = () => {
    setCurrentImage2025(0);
    setCurrentImage2024(0);
    setCurrentImage2023(0);
    setCurrentImage2022(0);
    setCurrentImage2021(0);
    setCurrentImage2020(0);
    setCurrentImage2019(0);
    setCurrentImage2018(0);
    setCurrentImage2017(0);
    setCurrentImage2016(0);
    setViewerIsOpen2025(false);
    setViewerIsOpen2024(false);
    setViewerIsOpen2023(false);
    setViewerIsOpen2022(false);
    setViewerIsOpen2021(false);
    setViewerIsOpen2020(false);
    setViewerIsOpen2019(false);
    setViewerIsOpen2018(false);
    setViewerIsOpen2017(false);
    setViewerIsOpen2016(false);
  };
  // #endregion

  // #region GetPhotos
  const [photosData, setPhotosData] = useState([]);
  const [photos2016, setPhotos2016] = useState([]);
  const [photos2017, setPhotos2017] = useState([]);
  const [photos2018, setPhotos2018] = useState([]);
  const [photos2019, setPhotos2019] = useState([]);
  const [photos2020, setPhotos2020] = useState([]);
  const [photos2021, setPhotos2021] = useState([]);
  const [photos2022, setPhotos2022] = useState([]);
  const [photos2023, setPhotos2023] = useState([]);
  const [photos2024, setPhotos2024] = useState([]);
  const [photos2025, setPhotos2025] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
    const photos = myphotos.response.items.map(photo => ({
      src: photo.sizes.find(size => size.type === "z" || size.type === "r").url,
      width: 4, // замените на нужную ширину фотографии
      height: 3, // замените на нужную высоту фотографии
      title: photo.text,
      comments: photo.comments,
    }));
    setPhotosData(photos);
    setPhotos2016(photos.filter(x => x.title === '2016'));
    setPhotos2017(photos.filter(x => x.title === '2017'));
    setPhotos2018(photos.filter(x => x.title === '2018'));
    setPhotos2019(photos.filter(x => x.title === '2019'));
    setPhotos2020(photos.filter(x => x.title === '2020'));
    setPhotos2021(photos.filter(x => x.title === '2021'));
    setPhotos2022(photos.filter(x => x.title === '2022'));
    setPhotos2023(photos.filter(x => x.title === '2023'));
    setPhotos2024(photos.reverse().filter(x => x.title === '2024'));
    setPhotos2025(photos.reverse().filter(x => x.title === '2025'));
  })

  // #endregion

  if (!isLoaded) {
    return <LoadingComponent />;
  } else {
    return (
      <div className='main' style={{ maxWidth: '1000px' }}>
                <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2025
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2025.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2025(index)} />))}
              <ModalGateway>
                {viewerIsOpen2025 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2025}
                      index={currentImage2025}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2024
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2024.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2024(index)} />))}
              <ModalGateway>
                {viewerIsOpen2024 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2024}
                      index={currentImage2024}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2023
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2023.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2023(index)} />))}
              <ModalGateway>
                {viewerIsOpen2023 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2023}
                      index={currentImage2023}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2022
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2022.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2022(index)} />))}
              <ModalGateway>
                {viewerIsOpen2022 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2022}
                      index={currentImage2022}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2021
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2021.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2021(index)} />))}
              <ModalGateway>
                {viewerIsOpen2021 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2021}
                      index={currentImage2021}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2020
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2020.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2020(index)} />))}
              <ModalGateway>
                {viewerIsOpen2020 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2020}
                      index={currentImage2020}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2019
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2019.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2019(index)} />))}
              <ModalGateway>
                {viewerIsOpen2019 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2019}
                      index={currentImage2019}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2018
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2018.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2018(index)} />))}
              <ModalGateway>
                {viewerIsOpen2018 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2018}
                      index={currentImage2018}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2017
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2017.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2017(index)} />))}
              <ModalGateway>
                {viewerIsOpen2017 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2017}
                      index={currentImage2017}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2016
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
                  style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                  title='https://foollovers.com' />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="s01"></div>
          </div>
        </div>
        <div className='box'>
          <div className='inner'>
            <div className='photo-gallery'>
              {photos2016.map((image, index) => (
                <img key={index} src={image.src} onClick={() => openLightbox2016(index)} />))}
              <ModalGateway>
                {viewerIsOpen2016 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2016}
                      index={currentImage2016}
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
    );
  }
}
