import React, { useState, useCallback, useEffect } from "react";
import { Modal, ModalGateway } from "react-images";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
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
  RED_BACKGROUND, SEXY_BACKGROUND,
  SKY1_BACKGROUND,
  SKY_BACKGROUND,
  SUN_BACKGROUND,
  TRIPPY_BACKGROUND,
  WATER1_BACKGROUND,
  WATER_BACKGROUND,
  WHITE_BACKGROUND,
  CLOTH_BACKGROUND,
  BLUEDOTS_BACKGROUND,
  FRILL_BACKGROUND,
  ROSES_BACKGROUND,
  GREEN_BACKGROUND,
  LEAVE_BACKGROUND,
  HYDRAGEA_BACKGROUND,
  API_URL
} from '../../../global-const';

export function MyPhotosPage() {

  const [isLoaded, setIsLoaded] = useState(false);
  document.documentElement.style.removeProperty('--box-text-color');
  document.documentElement.style.setProperty('--box-header-color', `#c6506d`);
  document.documentElement.style.setProperty('--main-background', `url(http://dl10.glitter-graphics.net/pub/2850/2850860nb1sevkfva.gif)`);
  document.documentElement.style.setProperty('--box-background', `#f1eaed`);

  // #region LightBox
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

  const openLightbox2024 = useCallback((event, { photo, index }) => {
    setCurrentImage2024(index);
    setViewerIsOpen2024(true);
  }, []);
  const openLightbox2023 = useCallback((event, { photo, index }) => {
    setCurrentImage2023(index);
    setViewerIsOpen2023(true);
  }, []);
  const openLightbox2022 = useCallback((event, { photo, index }) => {
    setCurrentImage2022(index);
    setViewerIsOpen2022(true);
  }, []);
  const openLightbox2021 = useCallback((event, { photo, index }) => {
    setCurrentImage2021(index);
    setViewerIsOpen2021(true);
  }, []);
  const openLightbox2020 = useCallback((event, { photo, index }) => {
    setCurrentImage2020(index);
    setViewerIsOpen2020(true);
  }, []);
  const openLightbox2019 = useCallback((event, { photo, index }) => {
    setCurrentImage2019(index);
    setViewerIsOpen2019(true);
  }, []);
  const openLightbox2018 = useCallback((event, { photo, index }) => {
    setCurrentImage2018(index);
    setViewerIsOpen2018(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage2024(0);
    setCurrentImage2023(0);
    setCurrentImage2022(0);
    setCurrentImage2021(0);
    setCurrentImage2020(0);
    setCurrentImage2019(0);
    setCurrentImage2018(0);
    setViewerIsOpen2024(false);
    setViewerIsOpen2023(false);
    setViewerIsOpen2022(false);
    setViewerIsOpen2021(false);
    setViewerIsOpen2020(false);
    setViewerIsOpen2019(false);
    setViewerIsOpen2018(false);
  };
  // #endregion

  // #region GetPhotos
  const [photosData, setPhotosData] = useState([]);
  const [photos2018, setPhotos2018] = useState([]);
  const [photos2019, setPhotos2019] = useState([]);
  const [photos2020, setPhotos2020] = useState([]);
  const [photos2021, setPhotos2021] = useState([]);
  const [photos2022, setPhotos2022] = useState([]);
  const [photos2023, setPhotos2023] = useState([]);
  const [photos2024, setPhotos2024] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/getMyPhotos`) // замените на ваш URL API
      .then(response => {

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
        setPhotosData(photos);
        setPhotos2018(photos.filter(x => x.title === '2018'));
        setPhotos2019(photos.filter(x => x.title === '2019'));
        setPhotos2020(photos.filter(x => x.title === '2020'));
        setPhotos2021(photos.filter(x => x.title === '2021'));
        setPhotos2022(photos.filter(x => x.title === '2022'));
        setPhotos2023(photos.filter(x => x.title === '2023'));
        setPhotos2024(photos.reverse().filter(x => x.title === '2024'));
      })
      .catch(error => {
        console.error('Ошибка при получении фотографий', error);
      });
  }, []);

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
            <div className='pupa' id="section2">
              <ImageGallery photos={photos2024} onClick={openLightbox2024} />
              <ModalGateway>
                {viewerIsOpen2024 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2024}
                      index={currentImage2024}
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
            <div className='pupa' id="section2">
              <ImageGallery photos={photos2023} onClick={openLightbox2023} />
              <ModalGateway>
                {viewerIsOpen2023 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2023}
                      index={currentImage2023}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2022
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img rc={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
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
            <div className='pupa' id="section2">
              <ImageGallery photos={photos2022} onClick={openLightbox2022} />
              <ModalGateway>
                {viewerIsOpen2022 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2022}
                      index={currentImage2022}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2021
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img rc={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
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
            <div className='pupa' id="section2">
              <ImageGallery photos={photos2021} onClick={openLightbox2021} />
              <ModalGateway>
                {viewerIsOpen2021 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2021}
                      index={currentImage2021}
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
        <div className="box08">
          <div className="box-top">
            <div className="u01"></div>
          </div>
          <div className="box-center">
            <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
              2020
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img rc={require('../../resources/tabs_dividers_pixels/j06-cherry_blossom-line.gif')}
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
            <div className='pupa' id="section2">
              <ImageGallery photos={photos2020} onClick={openLightbox2020} />
              <ModalGateway>
                {viewerIsOpen2020 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2020}
                      index={currentImage2020}
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
            <div className='pupa' id="section2">
              <ImageGallery photos={photos2019} onClick={openLightbox2019} />
              <ModalGateway>
                {viewerIsOpen2019 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2019}
                      index={currentImage2019}
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
            <div className='pupa' id="section2">
              <ImageGallery photos={photos2018} onClick={openLightbox2018} />
              <ModalGateway>
                {viewerIsOpen2018 ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      images={photos2018}
                      index={currentImage2018}
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
    );
  }
}
